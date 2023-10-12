import {
  ref,
  onMounted,
  nextTick,
  shallowRef,
  defineComponent,
  h,
  createVNode,
  render,
  computed,
  reactive,
  shallowReactive,
} from 'vue'
import * as L from 'leaflet'
import configs from '../configs'
interface MapOptions {
  center: [number, number]
  zoom: number
  tileUrl: string
}

export function useMap() {
  const container = ref()
  const map = shallowRef()
  const tiles = ref<any[]>([])
  const groups = shallowReactive<any>({})
  const scale = ref<any>(0)
  const coordinate = reactive({
    lng: 0,
    lat: 0,
  })
  const generateMap = () => {
    map.value = L.map(container.value, {
      center: configs.mapConfigs.center,
      zoom: configs.mapConfigs.zoom,
      minZoom: 9,
      maxZoom: 18,
      zoomControl: false,
      attributionControl: false,
    })
    map.value!.on('mousemove', (e: any) => {
      const { lat, lng } = e.latlng
      coordinate.lng = lng
      coordinate.lat = lat
    })
    // const arr: any = []
    // map.value.on('click', (e: any) => {
    //   const marker = L.marker(e.latlng).addTo(map.value)
    //   const lat = e.latlng.lat.toFixed(6)
    //   const lng = e.latlng.lng.toFixed(6)
    //   arr.push([lat, lng])
    //   navigator.clipboard
    //     .writeText(JSON.stringify(arr))
    //     .then(function () {
    //       console.log('字符串已成功写入粘贴板')
    //     })
    //     .catch(function (err) {
    //       console.error('写入粘贴板时出错:', err)
    //     })
    // })
  }
  const generateTile = () => {
    const current = ref(configs.tileConfigs[0].name)
    tiles.value = configs.tileConfigs.map((item, index) => {
      return {
        name: item.name,
        thumb: item.thumb,
        url: item.url,
        active: computed(() => item.name === current.value),
        onclick: () => {
          current.value = item.name
          tile.setUrl(item.url)
        },
      }
    })

    const tile = L.tileLayer(tiles.value[0].url)
    console.log('tile', tile)
    map.value.addLayer(tile)
  }
  const addGroup = (name: string) => {
    const exit = groups.hasOwnProperty(name)
    let group: any
    if (exit) {
      group = groups.value[name]
    } else {
      group = new L.LayerGroup()
      group.setVisible = (visible: boolean) => {
        group.eachLayer((layer: any) => {
          if (visible) {
            layer.addTo(map.value)
          } else {
            layer.removeFrom(map.value)
          }
        })
      }
      groups[name] = group
      map.value.addLayer(group)
    }
    return group
  }
  const addMarker = (component: any, props: any, coordinate: [number, number], name: string) => {
    const com = defineComponent({ render: () => h(component, { ...props }) })
    const instance = createVNode(com)
    render(instance, document.createElement('div'))
    const icon = L.divIcon({
      html: instance.el as any,
      iconSize: [40, 40],
      iconAnchor: [20, 20],
    })
    const marker = L.marker(coordinate, { icon })
    const group = addGroup(name)
    group.addLayer(marker)
  }
  onMounted(() => {
    nextTick(() => {
      generateMap()
      generateTile()
    })
  })
  return {
    container,
    map,
    tiles,
    groups,
    coordinate,
    scale,
    addMarker,
  }
}
