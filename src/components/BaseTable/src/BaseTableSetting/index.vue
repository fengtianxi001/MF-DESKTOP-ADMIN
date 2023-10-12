<template>
  <Space class="base-table-setting" :size="14">
    <TableRefresh :refresh="refresh" />
    <TableLineHeight :size="size" :onsize="onsize" />
    <TableColumn :columns="columns" />
  </Space>
</template>
<script setup lang="ts">
import { Space } from '@arco-design/web-vue'
import TableColumn from './TableColumn.vue'
import TableLineHeight from './TableLineHeight.vue'
import TableRefresh from './TableRefresh.vue'

interface PropsType {
  size: 'mini' | 'small' | 'medium' | 'large'
  columns: any[]
  refresh: (args?: Record<any, any> | undefined) => Promise<boolean | void>
}
defineProps<PropsType>()
const emit = defineEmits(['update:size', 'update:filter'])

const onsize = (value: any) => emit('update:size', value)
</script>
