<template>
  <Collapse
    :default-active-key="[1]"
    expand-icon-position="right"
    class="control-container"
    style="user-select: none"
    @mousedown.stop="() => {}"
    @mouseup.stop="() => {}"
    @wheel.stop="() => {}"
    @dblclick.stop="() => {}"
    @click.stop="() => {}"
    @mouseenter.stop="() => {}"
    @mouseleave.stop="() => {}"
  >
    <CollapseItem :key="1">
      <template #header>
        <span class="title"> {{ title }}</span>
      </template>
      <div class="container">
        <slot />
      </div>
    </CollapseItem>
  </Collapse>
</template>
<script setup lang="ts">
import { Collapse, CollapseItem, Empty } from '@arco-design/web-vue'
import { computed } from 'vue'

interface PropsType {
  title: string
  icon?: string
  width?: number
}
const props = withDefaults(defineProps<PropsType>(), {
  empty: false,
  title: '',
  icon: null,
  width: 150,
})

const width = computed(() => {
  return props.width + 'px'
})
</script>
<style lang="scss" scoped>
$width: v-bind(width);

.control-container {
  box-sizing: border-box;
  width: $width;
  color: var(--color-text-1);
  border: unset;

  // border: 1px solid var(--color-border);
  border-radius: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 35%);

  :deep(.arco-collapse-item) {
    .arco-collapse-item-header {
      padding-bottom: 6px;

      .title {
        position: relative;
        margin-left: 4px;

        &::before {
          position: absolute;
          top: 2px;
          left: -9px;
          width: 3px;
          height: 14px;
          content: '';
          background-color: rgb(var(--primary-6));
        }
      }

      background-color: var(--color-bg-2);
      border: unset;

      .arco-collapse-item-header-title {
        font-weight: bold;
      }

      .arco-collapse-item-expand-icon {
        color: var(--color-text-1);
      }
    }

    .arco-collapse-item-content {
      padding: 0;
      background-color: var(--color-bg-2);

      .arco-collapse-item-content-box {
        padding: 0;
      }
    }
  }

  .container {
    padding: 0 10px 10px;
    cursor: default;
  }
}
</style>
