<template>
  <BaseModalForm
    ref="form"
    v-model="dataSource"
    width="500px"
    title="生成监测报告"
    :configs="configs"
    :loading="loading"
    :onBeforeConfirm="onBeforeConfirm"
    ok-text="生成"
  />
</template>
<script setup lang="ts">
import { computed, watch, ref, watchEffect } from 'vue'
import { BaseModalForm, useModalForm } from '@/components/BaseModal'
import { damOption, monitorReportCreate } from '@/apis/MsrDam'
import { useOptions } from '@/options'
import { MonitorReportType } from '@/constants'
import { Message } from '@arco-design/web-vue'

const { form, dataSource, loading, validate } = useModalForm()

// 机构列表获取
const projectOptions = useOptions(damOption, {
  value: 'id',
  label: 'projectName',
})

const pickerName = ref('')

const configs = computed(() => [
  {
    name: 'projectId',
    component: 'Select',
    label: '生成工程',
    required: true,
    props: {
      options: projectOptions.value,
    },
  },
  {
    name: 'type',
    component: 'Select',
    label: '报告类型',
    required: true,
    props: {
      options: [
        { label: '大坝整体安全监测日报', value: 1 },
        { label: '大坝整体安全监测月报', value: 2 },
        { label: '大坝整体安全监测年报', value: 4 },
      ],
    },
  },
  {
    name: 'date',
    component: pickerName.value,
    label: '报告日期',
    required: true,
    visible: Boolean(dataSource.value.type),
    props: {
      style: {
        width: '100%',
      },
    },
    depends: {
      keys: ['type'],
      immediate: false,
      handler: async ([type]: any) => {
        if (type === 1) {
          pickerName.value = 'DatePicker'
        } else if (type === 2) {
          pickerName.value = 'MonthPicker'
        } else if (type === 4) {
          pickerName.value = 'YearPicker'
        }
      },
    },
  },
])

// 表单提交前的校验
const onBeforeConfirm = async () => {
  const errorMsg = await validate()
  if (errorMsg) return false
  if (dataSource.value.type === 4)
    dataSource.value.date = `${dataSource.value.date}-01-01`
  if (dataSource.value.type === 2)
    dataSource.value.date = `${dataSource.value.date}-01`
  await monitorReportCreate(dataSource.value)
  Message.success('操作成功')
  return true
}
</script>
