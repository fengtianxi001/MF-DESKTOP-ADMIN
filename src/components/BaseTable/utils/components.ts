import { createVNode } from 'vue'
import { Badge as arcoBadge } from '@arco-design/web-vue'
import dayjs from 'dayjs'
import BaseTableButtons from '../src/BaseTableCell/BaseTableButtons/index.vue'
import BaseTableTags from '../src/BaseTableCell/BaseTableTags/index.vue'
import BaseTableProfile from '../src/BaseTableCell/BaseTableProfile/index.vue'
import BaseTableSwitch from '../src/BaseTableCell/BaseTableSwitch/index.vue'

export const Buttons = (props: Record<string, any>) =>
  createVNode(BaseTableButtons, props)

export const Badge = (props: Record<string, any>) =>
  createVNode(arcoBadge, props)

export const Date = (props: any) => {
  const cache = dayjs(props.value)
  return cache.isValid()
    ? cache.format(props.format ?? 'YYYY-MM-DD HH:mm:ss')
    : ''
}

export const Tags = (props: any) => createVNode(BaseTableTags, props)

export const Profile = (props: any) => createVNode(BaseTableProfile, props)

export const Switch = (props: any) => createVNode(BaseTableSwitch, props)

const components: any = {
  Buttons,
  Badge,
  Date,
  Tags,
  Profile,
  Switch,
}

export default components
