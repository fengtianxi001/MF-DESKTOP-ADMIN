import L from 'leaflet'
import markerIcon from './assets/marker.png'

export const DRAW_LOCAL = {
  draw: {
    handlers: {
      marker: {
        tooltip: {
          start: '点击地图放置一个标记',
        },
      },
      rectangle: {
        tooltip: {
          start: '按下鼠标并拖拽，生成矩形选区',
        },
      },
      simpleshape: {
        tooltip: {
          end: '松开鼠标后完成绘制',
        },
      },
    },
  },
}

export const MAP_CONFIG = {
  minZoom: 10,
  maxZoom: 15,
  center: [27.996827, 118.469696],
  zoom: 14,
  zoomControl: false,
  attributionControl: false,
} as L.MapOptions

export const ICON_CONFIG = {
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
} as L.IconOptions

export const DRAW_SHAPE_CONFIG = {
  RECTANGLE: {
    shapeOptions: {
      stroke: true,
      color: '#3388ff',
      weight: 4,
      opacity: 0.5,
      fill: true,
      fillColor: null,
      fillOpacity: 0.2,
      showArea: true,
      clickable: true,
    },
    metric: false,
  },
  MARKER: {
    icon: L.icon(ICON_CONFIG),
  },
}
export const TILE_URLS = [
  'http://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=61d4914961368dcd0af3c0c8cf3b61e6',
  'http://t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=61d4914961368dcd0af3c0c8cf3b61e6',
]
