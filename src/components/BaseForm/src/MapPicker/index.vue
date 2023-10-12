<template>
  <div ref="mapPickerRef" class="map-picker">
    <MapPickerTirgger
      :value="modelValue"
      :mode="mode"
      :visible="state.visible"
      @click.self="onShow"
    />
    <Modal
      v-model:visible="state.visible"
      title="地图信息采集"
      :width="500"
      :maskClosable="false"
      :esc-to-close="false"
      :unmount-on-close="true"
    >
      <MapPickerMain
        ref="pickerRef"
        v-model:modelValue="_value"
        v-model:draw="state.draw"
        :visible="state.visible"
        :mode="mode"
      />
      <template #footer>
        <Button @click="onClear">清除数据</Button>
        <Button type="primary" @click="onDraw">{{
          state.draw.status === '未开始' ? '绘制' : '重新绘制'
        }}</Button>
        <Button type="primary" @click="onSumbit">完成</Button>
      </template>
    </Modal>
  </div>
</template>
<script setup lang="ts">
import { Modal, Button } from '@arco-design/web-vue'
import { reactive, computed, ref, onMounted } from 'vue'
import MapPickerMain from './MapPickerMain.vue'
import MapPickerTirgger from './MapPickerTirgger.vue'

interface ProsType {
  modelValue: any
  mode: 'marker' | 'rectangle'
  disabled: Boolean
}
interface EmitType {
  (e: 'update:modelValue', result: any): void
}
const props = defineProps<ProsType>()
const emit = defineEmits<EmitType>()
const state = reactive({
  visible: false,
  prevValue: null,
  draw: {
    status: '未开始' as '未开始' | '已绘制',
    data: [],
  },
})

const _value = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})

const onShow = () => {
  if (props.disabled === true) return false
  state.visible = true
  return true
}
const onClear = () => {
  emit('update:modelValue', null)
  state.visible = false
}
const pickerRef = ref()
const onDraw = () => {
  pickerRef.value.onDraw()
}
const onSumbit = () => {
  state.visible = false
  emit('update:modelValue', state.draw.data)
  state.draw.data = []
}
onMounted(() => {
  state.prevValue = props.value
})
</script>
<style lang="scss" scoped>
.map-picker {
  width: 100%;
  height: 100px;
  overflow: hidden;
  border: 1.5px solid #d9d9d9;
  border-radius: 2px;
}

.picker {
  width: 100%;
  height: 500px;
}
</style>
