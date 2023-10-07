<template>
  <Form ref="form" :model="dataSource" v-bind="$attrs">
    <template v-for="config in props.configs">
      <FormItem
        v-if="config.visible !== false"
        :key="config.name"
        :field="config.name"
        :label="config.label"
        :name="config.name"
        :disabled="config.disabled"
        :required="config.required"
        :label-col-flex="labelWidth"
        :rules="generateRules(config)"
        v-bind="config.formItemProps"
      >
        <component
          :is="generateComponent(config)"
          v-model="dataSource[config.name]"
          :allow-clear="true"
          :placeholder="generatePlaceholder(config)"
          v-bind="config.props"
        />
      </FormItem>
    </template>
  </Form>
</template>
<script setup lang="ts">
import { Form, FormItem, type FieldRule } from '@arco-design/web-vue'
import { computed, onMounted, ref, watch, createVNode, h } from 'vue'
import { isArray, forEach, isString, isObject } from 'lodash'
import * as arco from '@arco-design/web-vue'
import type { BaseFormConfigType } from '../types'
import { builtInRules } from '../rules/index'

interface PropsType {
  configs: BaseFormConfigType[]
  modelValue: any
  labelWidth?: string
}

const props = defineProps<PropsType>()
const emit = defineEmits(['update:modelValue'])
const form = ref()
const dataSource: Record<string, any> = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})

const coms: any = {
  ...arco,
}

const generateComponent = (config: BaseFormConfigType) => {
  const { component } = config
  if (isObject(component)) {
    return component
  }
  if (isString(component)) {
    return coms[component]
  }
  return h('span', '未知组件')
}
/** @description: 去除字符串中的冒号 */
const removeColon = (label: string) => label.replace(':', '')

/** @description: 生成formItem的校验规则 */
const generateRules = (config: BaseFormConfigType) => {
  const rules: FieldRule[] = []
  if (config.required) {
    rules.push({
      required: true,
      message: `${removeColon(config.label)}不能为空`,
    })
  }
  if (isArray(config.rules)) {
    forEach(config.rules, (rule) => {
      isString(rule) ? rules.push(builtInRules[rule]) : rules.push(rule)
    })
  }
  return rules
}

/** @description: 生成formItem的占位符 */
const generatePlaceholder = (config: BaseFormConfigType) => {
  const placeholder = config.placeholder || config.props?.placeholder
  if (placeholder) return placeholder
  const InputActionsType = [
    'Input',
    'InputNumber',
    'InputPassword',
    'InputTag',
    'Mention',
    'Textarea',
  ]
  const action = InputActionsType.includes(config.component) ? '输入' : '选择'
  return `请${action}${removeColon(config.label)}`
}

/** @description: 校验全部表单数据 */
const validate = () => form.value?.validate()

/** @description: 校验部分表单数据 */
const validateField = (field: string | string[]) => form.value?.validateField(field)

/** @description: 重置表单数据 */
const resetFields = (field: string | string[]) => form.value?.resetFields(field)

/** @description: 清除校验状态 */
const clearValidate = (field: string | string[]) => form.value?.clearValidate(field)

/** @description: 设置表单项的值和状态 */
const setFields = (fields: Record<string, any>) => form.value?.setFields(fields)

onMounted(() => {
  const initValue: any = {}
  /** @description: 默认值回填 */
  forEach(props.configs, (config) => {
    if (config?.defaultValue) {
      initValue[config.name] = config?.defaultValue
    }
  })
  emit('update:modelValue', initValue)
  /** @description: 依赖监听 */
  forEach(props.configs, (config) => {
    const depends = config?.depends
    if (!depends) return undefined
    const rawDeps = () => depends.keys.map((dep: any) => dataSource.value[dep])
    watch(
      rawDeps,
      (params: any) => {
        depends.handler(params)
      },
      {
        immediate: depends.immediate,
      }
    )
    return undefined
  })

  watch(
    () => props.configs,
    (configs) => {
      forEach(configs, (config) => {
        if (config.clearValueOnHidden && config.visible === false) {
          delete dataSource.value[config.name]
        }
      })
    },
    {
      deep: true,
      immediate: true,
    }
  )
})

defineExpose({
  validate,
  validateField,
  resetFields,
  clearValidate,
  setFields,
})
</script>
