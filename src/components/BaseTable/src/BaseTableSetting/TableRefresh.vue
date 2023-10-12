<template>
  <div class="container">
    <IconRefresh :spin="spin" @click="onRefresh" />
  </div>
</template>
<script setup lang="ts">
import { awaitWrapper } from '@/utils/common'
import { IconRefresh } from '@arco-design/web-vue/es/icon'
import { ref } from 'vue'

interface PropsType {
  refresh: (args?: Record<any, any> | undefined) => Promise<boolean | void>
}
const props = defineProps<PropsType>()

const spin = ref(false)

const onRefresh = async () => {
  spin.value = true
  await awaitWrapper(props.refresh())
  spin.value = false
}
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
</style>
