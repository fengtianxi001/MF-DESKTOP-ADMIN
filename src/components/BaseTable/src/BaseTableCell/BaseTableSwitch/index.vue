<template>
  <Switch
    class="base-table-switch"
    :loading="loading"
    type="round"
    v-bind="$attrs"
    @change="change"
  ></Switch>
</template>
<script setup lang="ts">
import useLoading from '@/hooks/useLoading'
import { awaitWrapper } from '@/utils/common'
import { Switch } from '@arco-design/web-vue'

interface PropsType {
  onChange: (value: any) => Promise<any>
}
const props = defineProps<PropsType>()
const { loading, openLoading, closeLoading } = useLoading(false, 500)
const change = async (value: any) => {
  openLoading()
  await awaitWrapper(props.onChange(value))
  closeLoading()
}
</script>
<style lang="scss" scoped>
.base-table-switch {
  height: 22px;
  line-height: 22px;

  :deep(.arco-switch-handle) {
    top: 3px !important;
  }

  :deep(.arco-switch-text-holder) {
    margin: 0 22px 0 9px;
  }
}
</style>
