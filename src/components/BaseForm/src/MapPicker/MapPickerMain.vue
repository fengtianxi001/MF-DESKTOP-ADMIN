<template>
  <div ref="containerRef" class="map-picker-main"></div>
</template>
<script setup lang="ts">
import { ref, toRefs, watch } from 'vue'
import { useMapPicker } from './useMapPicker'

interface ProsType {
  modelValue: any
  draw: any
  mode: 'marker' | 'rectangle'
  visible: boolean
}
interface EmitType {
  (e: 'update:modelValue', result: any): void
  (e: 'update:draw', result: any): void
}
const props = defineProps<ProsType>()
const emit = defineEmits<EmitType>()
const containerRef = ref()
const { modelValue } = toRefs(props)
const { draw, onInitialize } = useMapPicker(
  containerRef,
  modelValue,
  props.mode,
  false
)
const onDraw = async () => {
  const data = await draw()
  emit('update:draw', {
    data,
    status: '已绘制',
  })
}
watch(
  () => props.visible,
  () => {
    if (props.visible) {
      onInitialize()
    }
  }
)
defineExpose({
  onDraw,
})
</script>
<style lang="scss" scoped>
.map-picker-main {
  height: 500px;
  background-color: #fff;
}
</style>
