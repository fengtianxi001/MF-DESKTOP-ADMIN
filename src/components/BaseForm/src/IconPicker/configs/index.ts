import { ICON_RAW } from '../assets/icons'

type IconKeyType = keyof typeof ICON_RAW

const ICON_KEYS: IconKeyType[] = [
  '地图',
  '写作',
  '编辑器',
  '文件',
  '聊天',
  '用户头像',
  '交通工具',
  '音视频',
  '设计',
  '界面',
  '机动车',
  '建筑',
  '商业',
  '代码',
  '电脑',
  '教育',
  '能量',
  '财务',
  '物体',
  '安全',
  '旅行',
  '天气',
]

export const ICON_RECORDS = ICON_KEYS.reduce((prev, cur) => {
  prev[cur] = ICON_RAW[cur]
  return prev
}, {} as Record<IconKeyType, any>)

export default ICON_RECORDS
