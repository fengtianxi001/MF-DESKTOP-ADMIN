<template>
  <ControlPanel title="人员定位" :width="320">
    <Table
      :columns="columns"
      :data="data"
      :pagination="false"
      size="small"
      :bordered="false"
      @row-click="rowClick"
    />
  </ControlPanel>
</template>
<script setup lang="tsx">
import { Table, Badge } from '@arco-design/web-vue'
import ControlPanel from '@/components/BaseMap/src/ControlPanel.vue'
import UserInfo from './UserInfo.vue'
import { inject } from 'vue'

const bmap: any = inject('bmap')
const columns: any = [
  {
    title: '基本信息',
    render: ({ record }) => <UserInfo name={record.name} title={record.title}></UserInfo>,
  },
  {
    title: '所属部门',
    dataIndex: 'department',
  },
  {
    title: '状态',
    align: 'center',
    dataIndex: 'status',
    render: ({ record }) => {
      const status = record.status ? 'success' : 'normal'
      const text = record.status ? '在线' : '离线'
      return <Badge status={status} text={text}></Badge>
    },
  },
]
const data = [
  {
    name: '张三',
    department: '销售部',
    status: 0,
    title: '销售经理',
    coordinate: ['26.075885', '119.197068'],
  },
  {
    name: '李四',
    department: '市场部',
    status: 1,
    title: '市场专员',
    coordinate: ['26.074188', '119.198699'],
  },
  {
    name: '王五',
    department: '财务部',
    status: 1,
    title: '财务分析师',
    coordinate: ['26.072415', '119.197240'],
  },
  {
    name: '赵六',
    department: '人资部',
    status: 0,
    title: '人资协调员',
    coordinate: ['26.070064', '119.199514'],
  },
  {
    name: '刘七',
    department: '运营部',
    status: 1,
    title: '运营经理',
    coordinate: ['26.068869', '119.202905'],
  },
  {
    name: '陈八',
    department: 'IT部门',
    status: 0,
    title: 'IT工程师',
    coordinate: ['26.073610', '119.200330'],
  },
  {
    name: '周九',
    department: '工程部',
    status: 1,
    title: '高级工程师',
    coordinate: ['26.073957', '119.202476'],
  },
  {
    name: '吴十',
    department: '服务部',
    status: 0,
    title: '客户服务代表',
    coordinate: ['26.075538', '119.205008'],
  },
  {
    name: '郑十一',
    department: '质量部',
    status: 1,
    title: '质量保证专员',
    coordinate: ['26.077234', '119.203076'],
  },
  {
    name: '孙十二',
    department: '研发部',
    status: 0,
    title: '研究科学家',
    coordinate: ['26.078660', '119.199944'],
  },
]
const rowClick = (record: any) => {
  bmap.map?.value?.flyTo(record.coordinate, 18)
}
</script>
