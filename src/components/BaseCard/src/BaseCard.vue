<template>
  <Spin :loading="loading" style="width: 100%; height: 100%">
    <Card class="base-card" v-bind="$attrs">
      <template #title>
        <slot name="title">{{ title }}</slot>
      </template>

      <template #extra>
        <slot name="extra"></slot>
      </template>

      <Empty v-show="isEmpty">
        <template #image>
          <IconExclamationCircleFill />
        </template>
        <span>暂无数据</span>
      </Empty>
      <div v-show="!isEmpty" class="base-card-container">
        <slot></slot>
      </div>
    </Card>
  </Spin>
</template>
<script setup lang="ts">
import { Card, Spin, Empty } from '@arco-design/web-vue'
import { computed } from 'vue'
import { IconExclamationCircleFill } from '@arco-design/web-vue/es/icon'

interface PropsType {
  title?: string
  loading?: boolean
  empty?: boolean
}
const props = defineProps<PropsType>()
const isEmpty = computed(() => props.empty === true)
</script>
<style lang="scss" scoped>
.base-card {
  border: none;
  border-radius: 0;

  .base-card-container {
    display: grid;
    grid-gap: 12px;
    width: 100%;
    height: 100%;
  }

  :deep(.arco-card-header) {
    display: flex;
    align-items: center;
    height: auto;
    padding: 14px 20px 18px;
    border: none;
  }

  :deep(.arco-card-body) {
    height: calc(100% - 77px);
    padding: 0 20px 20px;
  }
}
</style>
