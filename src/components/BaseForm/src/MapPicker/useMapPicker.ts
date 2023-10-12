import L from 'leaflet'
import * as turf from '@turf/turf'
import 'leaflet-draw'
import 'leaflet-draw/dist/leaflet.draw.css'
import 'leaflet/dist/leaflet.css'
import { type Ref, shallowRef, ref, onMounted, watch } from 'vue'
import { forEach, size } from 'lodash'
import {
  DRAW_LOCAL,
  MAP_CONFIG,
  ICON_CONFIG,
  TILE_URLS,
  DRAW_SHAPE_CONFIG,
} from './configs'

// @ts-ignore
L.drawLocal = DRAW_LOCAL

export function useMapPicker(
  element: Ref<HTMLElement | null>,
  modelValue: any,
  mode: 'marker' | 'rectangle',
  needFullViewPort?: boolean
) {
  const map = shallowRef<L.Map | null>(null)
  const layer = shallowRef<L.LayerGroup | L.Marker | null>(null)
  const icon = L.icon(ICON_CONFIG)
  const propsValue = ref(modelValue)
  const control = shallowRef<any>(null)

  const onClearLayer = () => {
    layer.value && layer.value.remove()
  }
  const onCreateMarker = (coordinates: [number, number]) => {
    onClearLayer()
    const marker = L.marker(coordinates, { icon })
    layer.value = marker
    map.value && marker.addTo(map.value)
  }

  const onPreviewMarker = () => {
    const [lng, lat] = propsValue.value
    onCreateMarker([lat, lng])
    map.value?.setView([lat, lng], 16)
  }
  const onCreatePolygon = (coordinates: Array<any>) => {
    if (size(coordinates) < 4) return false
    onClearLayer()
    const polygon = turf.polygon([[...coordinates]])
    layer.value = L.geoJSON(polygon)
    const cache = layer.value
    map.value && cache.addTo(map.value)
    return true
  }

  const fullViewPort = () => {
    const coordinates = propsValue.value
    if (size(coordinates) < 4) {
      // console.log('收到参数:', JSON.stringify(coordinates, null, 2))
      return console.warn('参数错误,点位不能少于4个')
    }
    const polygon = turf.polygon([[...coordinates]])
    const center = turf.center(polygon).geometry.coordinates
    // 1.计算矩形的最长边
    const d1 = turf.distance(
      turf.point(coordinates[1]),
      turf.point(coordinates[0]),
      { units: 'meters' }
    )
    const d2 = turf.distance(
      turf.point(coordinates[1]),
      turf.point(coordinates[2]),
      { units: 'meters' }
    )
    const d = Math.max(d1, d2)
    // 2.计算18级缩放下, 每个像素代表多少米(赤道周长/18级缩放全球地图总像素点)
    // 缩放级别和像素点的管理, 可以参考: https://blog.csdn.net/chenwen112/article/details/96475185
    const px2Meter = 40075016.68557849 / (256 * 2 ** 18)
    // 3.计算视图范围宽度呈现的实际距离,单位米
    const clientWidth = element.value?.clientWidth as number
    const clientHeight = element.value?.clientHeight as number
    const viewMeter = Math.min(clientWidth, clientHeight) * px2Meter
    // 6.计算想要完全呈现矩形需要的缩放比例
    const space = 3 / 2 // 留白的比例
    let zoom = 18 - Math.log2((d * space) / viewMeter)
    zoom = zoom > 18 ? 18 : zoom
    map.value?.setView([center[1], center[0]], zoom)
    return false
  }
  const onPreviewPolygon = () => {
    onCreatePolygon(propsValue.value)
    if (needFullViewPort) fullViewPort()
  }
  const onUpdatePreview = () => {
    onClearLayer()
    if (!propsValue.value) return false
    if (mode === 'marker') onPreviewMarker()
    if (mode === 'rectangle') onPreviewPolygon()
    return true
  }

  const draw = () => {
    onClearLayer()
    control.value.enable()
    return new Promise((resolve, reject) => {
      // eslint-disable-next-line prefer-promise-reject-errors
      if (!map.value) return reject('地图还未初始化完成')
      map.value.off('draw:created')
      control.value && control.value.enable()
      map.value.on('draw:created', (e: any) => {
        layer.value = e.layer
        map.value?.addLayer(e.layer)
        const cache = e.layer.toGeoJSON()
        if (mode === 'marker') {
          resolve(cache.geometry.coordinates)
        } else if (mode === 'rectangle') {
          resolve(cache.geometry.coordinates[0])
        }
      })
      return false
    })
  }
  const onInitialize = () => {
    const conatiner = element.value as HTMLElement
    map.value = L.map(conatiner, MAP_CONFIG)
    forEach(TILE_URLS, (url) => {
      map.value?.addLayer(L.tileLayer(url))
    })
    onUpdatePreview()
    if (mode === 'marker') {
      // @ts-ignore
      control.value = new L.Draw.Marker(map.value, DRAW_SHAPE_CONFIG.MARKER)
    } else if (mode === 'rectangle') {
      // @ts-ignore
      control.value = new L.Draw.Rectangle(
        map.value,
        DRAW_SHAPE_CONFIG.RECTANGLE
      )
    }
  }

  onMounted(() => {
    onInitialize()
  })
  watch(propsValue, onUpdatePreview)
  return {
    map,
    draw,
    onInitialize,
  }
}
