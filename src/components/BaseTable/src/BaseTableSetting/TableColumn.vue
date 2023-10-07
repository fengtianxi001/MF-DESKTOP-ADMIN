<template>
  <Dropdown position="bl" :popup-max-height="500">
    <div class="container">
      <IconSettings />
    </div>
    <template #content>
      <div class="table-column">
        <Checkbox
          v-for="column in columns"
          :key="column.title"
          v-model="column.visible"
          :disabled="isLast && column.visible"
        >
          {{ column.title }}
        </Checkbox>
      </div>
    </template>
  </Dropdown>
</template>
<script setup lang="ts">
import { Dropdown, Checkbox } from '@arco-design/web-vue'
import { computed } from 'vue'

interface PropsType {
  columns: any[]
}
const props = defineProps<PropsType>()
const isLast = computed(
  () => props.columns.filter((column: any) => column.visible).length === 1
)
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  font-size: 18px;
  font-weight: normal;
  cursor: pointer;
  background-color: var(--color-secondary);
  border-radius: var(--border-radius-small);
  transition: all 0.1s cubic-bezier(0, 0, 1, 1);

  &:hover {
    color: var(--color-text-2);
    background-color: var(--color-secondary-hover);
  }
}

.table-column {
  display: flex;
  flex-direction: column;
  padding: 5px 15px 5px 5px;

  .arco-checkbox {
    height: 30px;
  }
}
</style>
