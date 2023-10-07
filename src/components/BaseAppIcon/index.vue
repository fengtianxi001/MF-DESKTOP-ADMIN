<template>
  <div class="base-app-icon" :style="style">
    <i class="fa-solid" :class="name"></i>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

interface PropsType {
  size: number
  color: string
  name: string
}

const props = defineProps<PropsType>()

const style = computed(() => {
  const size = props.size
  const color = props.color
  return {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: `${size / 4}px`,
    background: color,
    fontSize: `${size / 2}px`,
    boxShadow: `0 0 2px 0 ${color}ad`,
  }
})
</script>
<style lang="scss" scoped>
.base-app-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
</style>
