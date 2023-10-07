import { createVNode, ref, render, type Ref } from 'vue'
import BaseViewer from '../components/BaseViewer/index.vue'

export const docks = ref<AppListType>([])
export const apps: Ref<AppListType> = ref([
  {
    name: '一张图',
    src: '@/views/msr-picture/index.vue',
    iconName: 'fa-map-location-dot',
    iconColor: '#0099ff',
    window: {
      width: 1000,
      height: 800,
      fullscreen: true,
      minimizable: true,
      maximizable: false,
    },
  },
  {
    name: '一张图2',
    src: '@/views/msr-picture/index.vue',
    iconName: 'fa-map-location-dot',
    iconColor: '#0099ff',
    window: {
      width: 1000,
      height: 800,
      fullscreen: true,
      minimizable: true,
      maximizable: true,
    },
  },
])

export const addDockItem = (app: AppType) => {
  docks.value.push(app)
}
export const deleteDockItem = (app: AppType) => {
  const index = docks.value.findIndex((dock) => dock.name === app.name)
  if (index < 0) return false
  docks.value.splice(index, 1)
}

export const openApp = (app: AppType) => {
  // 先确定该应用是否已经存活
  const find = docks.value.find((dock) => dock.name === app.name)
  if (find) {
    //如果已经存活, 显示窗口
    showApp(app)
  } else {
    //否则新建窗口实例
    addDockItem(app)
    const container = document.createElement('span')
    const instance = createVNode(BaseViewer, { app })
    app.instance = instance
    render(instance, container)
    document.body.appendChild(instance.el as HTMLElement)
    topApp(app)
  }
}

export const closeApp = (app: AppType) => {
  const visible = getAppInstanceAttr(app, 'visible')
  visible.value = false
  deleteDockItem(app)
}

export const topApp = (app: AppType) => {
  const maxZIndex = Array.from(document.querySelectorAll('.base-viewer')).reduce(
    (maxZIndex, element) => {
      const zIndex = parseInt(getComputedStyle(element).zIndex) || 0
      return zIndex > maxZIndex ? zIndex : maxZIndex
    },
    0
  )
  const zindex = getAppInstanceAttr(app, 'zindex')
  if (zindex.value <= maxZIndex) zindex.value = maxZIndex + 1
}

export const showApp = (app: AppType) => {
  const show = getAppInstanceAttr(app, 'show')
  show.value = true
  topApp(app)
}

export const minusApp = (app: AppType) => {
  const show = getAppInstanceAttr(app, 'show')
  show.value = false
}

export const fullscreenApp = (app: AppType) => {
  const element = app.instance.el
  if (document.fullscreenElement === element) {
    document.exitFullscreen()
  } else {
    element?.requestFullscreen()
  }
}

export const getAppInstanceAttr = (app: AppType, attr: string) => {
  return app?.instance?.component?.exposed?.[attr]
}
