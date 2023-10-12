<template>
  <div class="page">
    <BaseTablePro
      title="设备管理列表"
      :service="service"
      :table-filter="tableFilter"
      :table-columns="tableColumns"
    />
  </div>
</template>
<script setup lang="tsx">
import { BaseTablePro } from '@/components/BaseTable'
import { computed } from 'vue'
import { Badge } from '@arco-design/web-vue'

const service = (params: any) => {
  return Promise.resolve({
    records: [
      {
        name: '设备1',
        sn: 'SN001',
        type: '类型1',
        category: '类别1',
        state: '正常',
        createTime: '2022-01-01',
      },
      {
        name: '设备2',
        sn: 'SN002',
        type: '类型2',
        category: '类别2',
        state: '正常',
        createTime: '2022-02-01',
      },
      {
        name: '设备3',
        sn: 'SN003',
        type: '类型1',
        category: '类别1',
        state: '故障',
        createTime: '2022-03-01',
      },
      {
        name: '设备4',
        sn: 'SN004',
        type: '类型2',
        category: '类别2',
        state: '正常',
        createTime: '2022-04-01',
      },
      {
        name: '设备5',
        sn: 'SN005',
        type: '类型1',
        category: '类别1',
        state: '正常',
        createTime: '2022-05-01',
      },
      {
        name: '设备6',
        sn: 'SN006',
        type: '类型2',
        category: '类别2',
        state: '正常',
        createTime: '2022-06-01',
      },
      {
        name: '设备7',
        sn: 'SN007',
        type: '类型1',
        category: '类别1',
        state: '故障',
        createTime: '2022-07-01',
      },
      {
        name: '设备8',
        sn: 'SN008',
        type: '类型2',
        category: '类别2',
        state: '正常',
        createTime: '2022-08-01',
      },
      {
        name: '设备9',
        sn: 'SN009',
        type: '类型1',
        category: '类别1',
        state: '正常',
        createTime: '2022-09-01',
      },
      {
        name: '设备10',
        sn: 'SN010',
        type: '类型2',
        category: '类别2',
        state: '正常',
        createTime: '2022-10-01',
      },
    ],
    total: 40,
    pageSize: 10,
    current: 1,
  })
}

const tableFilter = computed(() => [
  {
    name: 'name',
    component: 'Input',
    label: '设备名称',
  },
  {
    name: 'state',
    component: 'Select',
    label: '在线情况',
    props: {
      options: [
        {
          label: '未启用',
          value: 'notActive',
        },
        {
          label: '离线',
          value: 'offline',
        },
        {
          label: '在线',
          value: 'online',
        },
      ],
    },
  },
])

const tableColumns = [
  {
    title: '设备名称',
    dataIndex: 'name',
    align: 'left',
  },
  {
    title: '设备SN号',
    dataIndex: 'sn',
    align: 'center',
  },

  {
    title: '设备类型',
    dataIndex: 'type',
    align: 'center',
  },
  {
    title: '设备类别',
    dataIndex: 'category',
    align: 'center',
  },
  {
    title: '在线情况',
    dataIndex: 'state',
    align: 'center',
    render: ({ record }: any) => {
      const state = record.state === '正常' ? 'success' : 'danger'
      return <Badge status={state} text={record.state} />
    },
  },
  {
    title: '入库时间',
    dataIndex: 'createTime',
    align: 'center',
  },
]
</script>
<style lang="scss" scoped>
.page {
  height: 100%;
  padding: 10px;
  overflow: auto;
}
</style>
