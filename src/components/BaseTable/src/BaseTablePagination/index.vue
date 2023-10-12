<template>
  <Pagination
    v-if="page"
    v-model:current="page.current"
    v-model:page-size="page.pageSize"
    class="base-table-pagination"
    :total="page.total"
    :show-total="false"
    show-page-size
    v-bind="{ ...paginationProps }"
  />
</template>
<script setup lang="ts">
import { Pagination } from '@arco-design/web-vue'
import { computed } from 'vue'

interface PropsType {
  pagination?: {
    current: number
    pageSize: number
    total: number
  } | null
  paginationProps?: any
}
const props = defineProps<PropsType>()
const emit = defineEmits(['update:pagination'])
const page = computed({
  get: () => props.pagination,
  set: (value) => emit('update:pagination', value),
})
</script>
<style lang="scss" scoped>
.base-table-pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
