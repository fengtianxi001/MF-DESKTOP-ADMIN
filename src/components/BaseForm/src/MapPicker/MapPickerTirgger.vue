<template>
  <div ref="containerRef" class="marp-picker-trigger"></div>
</template>
<script setup lang="ts">
import { ref, toRefs, onMounted } from 'vue'
import { useMapPicker } from './useMapPicker'

interface ProsType {
  value: any
  mode: 'marker' | 'rectangle'
}
const props = defineProps<ProsType>()
const containerRef = ref()
const { value } = toRefs(props)
const { map } = useMapPicker(containerRef, value, props.mode, true)

onMounted(() => {
  if (map.value) {
    map.value.dragging.disable()
    map.value.doubleClickZoom.enable()
    map.value.scrollWheelZoom.disable()
  }
})
</script>
<style lang="scss" scoped>
.marp-picker-trigger {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
</style>
