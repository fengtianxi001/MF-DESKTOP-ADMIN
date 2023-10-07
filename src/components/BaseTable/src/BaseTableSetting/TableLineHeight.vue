<template>
  <Dropdown position="bl" @select="onsize">
    <div class="container">
      <IconLineHeight />
    </div>
    <template #content>
      <Doption
        v-for="{ label, value, active } in sizes"
        :key="label"
        :value="value"
        :class="{ active }"
      >
        {{ label }}
      </Doption>
    </template>
  </Dropdown>
</template>
<script setup lang="ts">
import { Dropdown, Doption } from '@arco-design/web-vue'
import { computed } from 'vue'

interface PropsType {
  size: 'mini' | 'small' | 'medium' | 'large'
  onsize: (size: any) => void
}
const props = defineProps<PropsType>()

const sizes = computed(() => {
  const list = [
    {
      label: '紧凑',
      value: 'small',
    },
    {
      label: '中等',
      value: 'medium',
    },
    {
      label: '宽松',
      value: 'large',
    },
  ]
  return list.map((item) => ({
    ...item,
    active: item.value === props.size,
  }))
})
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

.active {
  color: rgb(var(--primary-6));
}
</style>
