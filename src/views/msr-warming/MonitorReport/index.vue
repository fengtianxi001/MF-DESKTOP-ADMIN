<template>
  <div class="page">
    <BaseTablePro
      ref="table"
      title="监测报告记录"
      :service="service"
      :defaultSearchValue="{ reportType: 0 }"
      :table-filter="tableFilter"
      :table-operates="tableOperates"
      :table-columns="tableColumns"
    />
  </div>
</template>
<script setup lang="ts">
import { Message, Badge } from '@arco-design/web-vue'
import { BaseTablePro, useTableMethods } from '@/components/BaseTable'
import { computed } from 'vue'
// import { monitorReportPage, monitorReportOption } from '@/apis/MsrDam'
// import { fileDownFile } from '@/apis/SysSystem'
// import { getMonitorTypeLabelByValue, getReportStatusLabelByValue } from '@/constants'
// import { saveAs } from 'file-saver'
// import { useOptions } from '@/options'
// import { createBaseModal } from '@/components/BaseModal'
// import MonitorReportEditor from './components/MonitorReportEditor.vue'

const { table, refresh } = useTableMethods()

const service = () => {}

const actions = {
  onCreate: async () => {
    // const result = await createBaseModal(MonitorReportEditor)
    // result && refresh()
  },
  ondownload: async (record: any) => {
    // if (record.status === 0) {
    //   Message.warning('暂无文件')
    //   return
    // }
    // if (record.status === 1) {
    //   Message.warning('文件生成中')
    //   return
    // }
    // const result = await fileDownFile(record.fileId)
    // const fileName = decodeURIComponent(
    //   result.headers['content-disposition'].replace(/attachment;filename=/, '')
    // )
    // const blob = new Blob([result.data], {
    //   type: 'application/x-download;charset=utf-8',
    // })
    // saveAs(blob, fileName)
    // result && refresh()
  },
}

const tableFilter = computed(() => [
  {
    name: 'name',
    component: 'Input',
    label: '报告名称',
  },
  {
    name: 'type',
    component: 'Select',
    label: '报告类型',
    props: {
      // options: typeOtions.value,
    },
  },
  {
    name: 'status',
    component: 'Select',
    label: '报告状态',
    props: {
      options: [
        { label: '生成失败', value: 0 },
        { label: '生成中', value: 1 },
        { label: '已生成', value: 2 },
      ],
    },
  },
])

const tableOperates = computed(() => [
  {
    type: 'primary',
    text: '生成监测报告',
    onClick: () => actions.onCreate(),
  },
])

const tableColumns = [
  {
    title: '水库名称',
    dataIndex: 'projectName',
    align: 'left',
    sort: 'string',
  },
  {
    title: '监测报告名称',
    dataIndex: 'name',
    align: 'left',
  },
  {
    title: '报告类型',
    dataIndex: 'type',
    align: 'center',
    // render: ({ record }: any) => getMonitorTypeLabelByValue(record.type),
  },
  {
    title: '报告状态',
    dataIndex: 'status',
    align: 'center',
  },
  {
    title: '生成时间',
    dataIndex: 'createdTime',
    align: 'left',
  },
  {
    title: '操作',
    align: 'center',
    component: {
      name: 'Buttons',
      props: ({ record }: any) => ({
        options: [
          {
            disabled: record.status !== 2,
            text: '下载',
            onClick: () => actions.ondownload(record),
          },
        ],
      }),
    },
  },
]
</script>
