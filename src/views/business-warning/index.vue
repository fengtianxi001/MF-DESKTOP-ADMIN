<template>
  <div class="page">
    <BaseTablePro
      ref="table"
      title="预警记录"
      :service="service"
      :table-columns="tableColumns"
      :table-filter="tableFilter"
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
        pointName: '测点一',
        itemName: '项目一',
        warnVal: 59.5,
        state: 0,
        ruleName: '指标一',
        createdTime: '2022/09/01 12:00:00',
        updatedTime: '2022/09/01 12:00:00',
      },
      {
        pointName: '测点二',
        itemName: '项目二',
        warnVal: 75.2,
        state: 1,
        ruleName: '指标二',
        createdTime: '2022/09/02 09:30:00',
        updatedTime: '2022/09/02 09:30:00',
      },
      {
        pointName: '测点三',
        itemName: '项目三',
        warnVal: 42.8,
        state: 1,
        ruleName: '指标三',
        createdTime: '2022/09/03 15:45:00',
        updatedTime: '2022/09/03 15:45:00',
      },
      {
        pointName: '测点四',
        itemName: '项目四',
        warnVal: 88.9,
        state: 0,
        ruleName: '指标四',
        createdTime: '2022/09/04 18:20:00',
        updatedTime: '2022/09/04 18:20:00',
      },
      {
        pointName: '测点五',
        itemName: '项目五',
        warnVal: 65.3,
        state: 0,
        ruleName: '指标五',
        createdTime: '2022/09/05 10:10:00',
        updatedTime: '2022/09/05 10:10:00',
      },
      {
        pointName: '测点六',
        itemName: '项目六',
        warnVal: 52.1,
        state: 1,
        ruleName: '指标六',
        createdTime: '2022/09/06 14:55:00',
        updatedTime: '2022/09/06 14:55:00',
      },
      {
        pointName: '测点七',
        itemName: '项目七',
        warnVal: 70.6,
        state: 0,
        ruleName: '指标七',
        createdTime: '2022/09/07 11:45:00',
        updatedTime: '2022/09/07 11:45:00',
      },
      {
        pointName: '测点八',
        itemName: '项目八',
        warnVal: 48.9,
        state: 0,
        ruleName: '指标八',
        createdTime: '2022/09/08 17:30:00',
        updatedTime: '2022/09/08 17:30:00',
      },
      {
        pointName: '测点九',
        itemName: '项目九',
        warnVal: 55.2,
        state: 1,
        ruleName: '指标九',
        createdTime: '2022/09/09 13:20:00',
        updatedTime: '2022/09/09 13:20:00',
      },
      {
        pointName: '测点十',
        itemName: '项目十',
        warnVal: 63.7,
        state: 1,
        ruleName: '指标十',
        createdTime: '2022/09/10 16:40:00',
        updatedTime: '2022/09/10 16:40:00',
      },
    ],
    total: 40,
    pageSize: 10,
    current: 1,
  })
}

const tableFilter = computed(() => [
  {
    name: 'pointName',
    component: 'Input',
    label: '测站名称',
  },
  {
    name: 'state',
    component: 'Select',
    label: '当前状态',
    props: {
      options: [
        {
          value: 0,
          label: '告警中',
        },
        {
          value: 1,
          label: '已解除',
        },
      ],
    },
  },
  {
    name: 'date',
    component: 'RangePicker',
    label: '告警时间',
    props: {
      format: 'YYYY-MM-DD',
      placeholder: ['起始时间', '结束时间'],
    },
  },
])

const tableColumns = [
  {
    title: '测站名称',
    dataIndex: 'pointName',
    align: 'left',
    width: 200,
  },
  {
    title: '监测项目',
    dataIndex: 'itemName',
    align: 'center',
  },
  {
    title: '告警测值',
    dataIndex: 'warnVal',
    align: 'center',
  },
  {
    title: '当前状态',
    dataIndex: 'state',
    align: 'center',
    render: ({ record }: any) => {
      const text = record.state ? '告警中' : '已解除'
      const state = record.state ? 'danger' : 'success'
      return <Badge status={state} text={text} />
    },
  },
  {
    title: '预警指标',
    dataIndex: 'ruleName',
    align: 'center',
  },
  {
    title: '告警时间',
    dataIndex: 'createdTime',
    align: 'center',
  },
  {
    title: '解除时间',
    dataIndex: 'updatedTime',
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
