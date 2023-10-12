import type { FieldRule } from '@arco-design/web-vue'
import type { BuiltInRulesType } from '../rules'
import type { widgets } from '../src/widgets'

type arcoFormComponentType =
  | 'AutoComplete'
  | 'Cascader'
  | 'Checkbox'
  | 'DatePicker'
  | 'MonthPicker'
  | 'YearPicker'
  | 'QuarterPicker'
  | 'WeekPicker'
  | 'RangePicker'
  | 'Input'
  | 'InputSearch'
  | 'InputPassword'
  | 'InputNumber'
  | 'InputTag'
  | 'Mention'
  | 'Radio'
  | 'RadioGroup'
  | 'Rate'
  | 'Select'
  | 'Slider'
  | 'Switch'
  | 'Textarea'
  | 'TimePicker'
  | 'Transfer'
  | 'TreeSelect'
  | 'Upload'

type widgetsType = keyof typeof widgets
export type BaseFormConfigType = {
  name: string
  label: string
  component: arcoFormComponentType | widgetsType
  props?: Record<string, any>
  formItemProps?: Record<string, any>
  defaultValue?: any
  disabled?: any
  rules?: Array<FieldRule | BuiltInRulesType>
  required?: boolean
  placeholder?: string | string[]
  visible?: boolean
  clearValueOnHidden?: boolean
  depends?: {
    keys: string[]
    immediate?: boolean
    handler: (...args: any[]) => void | any
  }
}
