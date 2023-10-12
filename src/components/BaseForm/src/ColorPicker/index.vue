<template>
  <div class="color-picker">
    <div class="color-picker-input" :style="style" @click="onClick">
      <span v-if="isEmpty">{{ placeholder }}</span>
    </div>
    <span v-if="!isEmpty" class="color-picker-empty" @click="onEmpty">
      <icon-close />
    </span>
    <input ref="inputRef" v-model="color" type="color" />
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { IconClose } from '@arco-design/web-vue/es/icon'

interface PropsType {
  modelValue: any
}
const props = defineProps<PropsType>()
const emit = defineEmits(['update:modelValue'])
const inputRef = ref()
const color = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
})
const onClick = () => {
  inputRef.value.click()
  inputRef.value.focus()
}
const style = computed(() => ({
  backgroundColor: color.value || 'transparent',
}))
const placeholder = computed(() => (color.value ? '' : '请选择颜色'))
const isEmpty = computed(() => !color.value)
const onEmpty = () => {
  color.value = undefined
}
</script>
<style lang="scss" scoped>
.color-picker {
  position: relative;
  box-sizing: border-box;
  display: flex;
  gap: 8px;
  width: 100%;
  height: 28px;
  padding: 4px;
  padding-right: 8px;
  overflow: hidden;
  cursor: pointer;
  background-color: var(--color-fill-2);
  border-color: #f2f3f5;
  border-style: solid;
  border-width: 1px;
  border-radius: var(--border-radius-small);
  transition: color 0.1s cubic-bezier(0, 0, 1, 1),
    border-color 0.1s cubic-bezier(0, 0, 1, 1), background-color 0.1s;

  &:hover {
    background-color: var(--color-fill-3);
  }

  &:has(input:focus-within) {
    border-color: rgb(var(--primary-6));
  }

  .color-picker-input {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-left: 8px;
    font-size: 14px;
    color: #8f96a1;
    border-radius: 2px;
  }

  .color-picker-empty {
    display: flex;
    align-items: center;
    justify-content: center;

    //   position: absolute;
    //   right: 4px;
    width: 20px;
    height: 20px;
    font-size: 12px;
    color: var(--color-text-2);
    border-radius: 50%;

    &:hover {
      background-color: var(--color-fill-4);
    }
  }

  input {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10px;
    height: 10px;
    opacity: 0;
  }
}

.arco-form-item-status-error {
  /* stylelint-disable-next-line no-descending-specificity */
  .color-picker {
    background-color: var(--color-danger-light-1);
  }
}
</style>
