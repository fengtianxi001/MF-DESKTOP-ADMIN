# BaseForm

> 一个配置式表单组件

## API

### 组件属性

> 属性继承于 `@arco-desgin `的`form`组件

| 参数名  | 描述         | 类型                   | 必须    | 默认值  |
| ------- | ------------ | ---------------------- | ------- | ------- |
| v-model | 表单数据对象 | `Record<string,any>`   | `true`  | `{}`    |
| configs | 表单配置项   | `BaseFormConfigType[]` | `true`  | `-`     |
| loading | 否是加载中   | `boolean`              | `false` | `false` |

### BaseFormConfigType

| 属性名        | 描述            | 类型                    | 必须                | 默认值  |
| ------------- | --------------- | ----------------------- | ------------------- | ------- | --- |
| name          | 绑定的字段      | `string`                | `true`              | `-`     |
| label         | 标签名称        | `string`                | `true`              | `-`     |
| component     | 组件名称        | `arcoFormComponentType` | `true`              | `-`     |
| props         | 组件属性        | `Record<string,any>`    | `false`             | `-`     |
| formItemProps | formItem 的属性 | `Record<string,any>`    | `false`             | `-`     |
| defaultValue  | 默认值          | `any`                   | `false`             | `-`     |
| rules         | 使用的校验规则  | `Array<FieldRule        | BuiltInRulesType> ` | `false` | `-` |
| required      | 是否必须        | `boolean`               | `false`             | `-`     |
| placeholder   | 占位符          | `Array[string]          | string`             | `false` | `-` |
| visible       | 是否可见        | `Boolean`               | `false`             | `false` |

### ArcoFormComponentType

```typescript
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
```

## 使用案例

```html
<template>
  <div>
    <BaseForm ref="form" v-model="dataSource" :configs="configs"></BaseForm>
    <button @click="validate">提交</button>
  </div>
</template>
<script setup lang="ts">
  import {BaseForm, useBaseForm} form "@/components/BaseForm"

   const { form, validate} = useBaseForm()
   const dataSource = ref({})
   const configs = computed(()=>[
     {
       name: "name",
       label: "用户名称",
       component: "Input",
       required: true
     },
     {
       name: "sex",
       label: "用户性别",
       component: "RadioGroup",
       props: {
         options: [
          {
             label: "男",
           	value: 1
          },
          {
             label: "女",
           	value: 0
          }
         ]
       }
     }
   ])
</script>
```
