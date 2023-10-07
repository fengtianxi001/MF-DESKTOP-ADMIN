<template>
  <Table
    ref="table"
    class="base-table"
    v-bind="$attrs"
    :columns="tableColumns"
    :pagination="false"
    :bordered="false"
    :rowSelection="selection"
  >
    <template v-for="(_, scopeSlotName) in $slots" #[scopeSlotName]="scope">
      <slot :name="scopeSlotName" v-bind="scope" />
    </template>
  </Table>
  <BaseTablePagination
    :pagination="pagination"
    :paginationProps="paginationProps"
  />
</template>

<script setup lang="ts">
import { Table } from '@arco-design/web-vue'
import { computed, ref } from 'vue'
import { cloneDeep, isFunction } from 'lodash'
import BaseTablePagination from './BaseTablePagination/index.vue'
import { sorters } from '../utils/sorters'
import components from '../utils/components'

interface PropsType {
  columns: any[]
  selection?: boolean
  pagination?: {
    current: number
    pageSize: number
    total: number
  } | null
  paginationProps?: any
}

const props = defineProps<PropsType>()

const table = ref()

const selection = computed<any>(() => {
  const rowSelection = {
    type: 'checkbox',
    showCheckedAll: true,
    onlyCurrent: false,
  }
  return props.selection ? rowSelection : null
})

const tableColumns = computed(() => {
  const columns = cloneDeep(props.columns)
  const filters = columns?.filter((column) => column.show !== false)
  return filters?.map((column) => {
    if (column.sort && sorters[column.sort]) {
      column.sortable = {
        sorter: sorters[column.sort](column.dataIndex),
        sortDirections: ['ascend', 'descend'],
      }
    }
    if (column.component) {
      const { name, props } = column.component
      const component = components[name]
      if (!isFunction(component)) return undefined
      if (isFunction(props)) {
        column.render = (args: any) => component(props(args))
      } else {
        column.render = () => component(props)
      }
    }
    return column
  })
})

defineExpose({
  table,
})
</script>

<style lang="scss">
.base-table {
  thead {
    user-select: none;
  }

  .arco-table-td-content:empty::before {
    display: block;
    color: var(--color-fill-4);
    content: '--';
  }
}
</style>
