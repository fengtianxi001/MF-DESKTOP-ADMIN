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
const style = computed(() => ({
  width: `${props.size}px`,
  height: `${props.size}px`,
  borderRadius: `${props.size / 4}px`,
  background: props.color,
  fontSize: `${props.size / 2}px`,
}))
</script>
<style lang="scss" scoped>
.base-app-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 0 5px rgb(0 0 0 / 25%);
}
</style>
