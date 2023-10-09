declare type AppType = {
  id: string
  name: string
  src: string
  iconName: string
  iconColor: string
  instance?: any
  window: {
    top?: number
    left?: number
    width?: number
    height?: number | 'auto'
    minWidth?: number
    minHeight?: number
    resizable?: boolean
    movable?: boolean
    fullscreen?: boolean
    minimizable?: boolean
    maximizable?: boolean
  }
}

declare type AppListType = AppType[]
