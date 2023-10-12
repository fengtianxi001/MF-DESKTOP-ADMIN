import { createVNode, ref, render, type Ref } from 'vue'
import BaseViewer from '@/components/BaseViewer/index.vue'
import { v4 as uuidv4 } from 'uuid'

export const dockStore = ref<AppListType>([])

export const appStore: Ref<AppListType> = ref([
  {
    id: uuidv4(),
    name: '监控平台',
    src: 'https://fengtianxi001.github.io/MF-TurbineMonitor/',
    iconName: 'fa-tv',
    iconColor: '#0099ff',
    window: {
      width: 1200,
      height: 800,
      resizable: false,
      fullscreen: false,
      minimizable: true,
      maximizable: false,
    },
  },
  {
    id: uuidv4(),
    name: '人员定位',
    src: '/business-map',
    iconName: 'fa-street-view',
    iconColor: '#0099ff',
    window: {
      width: 1000,
      height: 800,
      fullscreen: true,
      minimizable: true,
      maximizable: true,
    },
  },

  {
    id: uuidv4(),
    name: '壁纸库',
    src: '/system-wallpaper',
    iconName: 'fa-image',
    iconColor: '#8856ff',
    window: {
      width: 1000,
      height: 570,
      fullscreen: false,
      minimizable: true,
      maximizable: false,
      resizable: false,
    },
  },
])

export const addDockItem = (app: AppType) => {
  dockStore.value.push(app)
}
export const deleteDockItem = (app: AppType) => {
  const index = dockStore.value.findIndex((dock) => dock.name === app.name)
  if (index < 0) return false
  dockStore.value.splice(index, 1)
}

export const openApp = (app: AppType) => {
  // 先确定该应用是否已经存活
  const find = dockStore.value.find((dock) => dock.name === app.name)
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
  if (app.window.fullscreen !== false) {
    const element = app.instance.el
    if (document.fullscreenElement === element) {
      document.exitFullscreen()
    } else {
      element?.requestFullscreen()
    }
  }
}

export const getAppInstanceAttr = (app: AppType, attr: string) => {
  return app?.instance?.component?.exposed?.[attr]
}
