import satellite from '../assets/satellite.png'
import street from '../assets/street.png'

export const mapConfigs = {
  center: [26.07, 119.2] as [number, number],
  zoom: 15,
}

export const tileConfigs = [
  {
    name: '矢量地图',
    thumb: street,
    url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  },
  {
    name: '卫星地图',
    thumb: satellite,
    url: 'https://gac-geo.googlecnapps.cn/maps/vt?lyrs=s&x={x}&y={y}&z={z}',
  },
]

export default {
  mapConfigs,
  tileConfigs,
}
