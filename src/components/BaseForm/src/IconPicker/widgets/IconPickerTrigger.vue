<template>
  <div class="icon-picker-trigger" @click="ontrigger">
    <!-- <div v-show="!modelValue" class="icon-picker-trigger-empty">
      {{ placeholder }}
    </div> -->
    <div class="icon-picker-trigger-main" :class="'mfr mf-' + modelValue">
      <IconClose
        v-if="modelValue"
        class="icon-picker-trigger-close"
        @click.stop="onclear"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { IconClose } from '@arco-design/web-vue/es/icon'

interface PropsType {
  placeholder?: string
  modelValue: any
}

defineProps<PropsType>()
const emit = defineEmits(['update:modelValue', 'trigger'])

const ontrigger = () => emit('trigger')
const onclear = () => emit('update:modelValue', '')
</script>
<style lang="scss" scoped>
.icon-picker-trigger {
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  .icon-picker-trigger-empty {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    height: 32px;
    padding-left: 12px;
    font-size: 14px;
    color: #888;
    cursor: pointer;
    background-color: var(--color-fill-2);
    border-radius: var(--border-radius-small);
    transition: color 0.1s cubic-bezier(0, 0, 1, 1),
      border-color 0.1s cubic-bezier(0, 0, 1, 1), background-color 0.1s;

    &:hover {
      background-color: var(--color-fill-3);
    }
  }

  .icon-picker-trigger-main {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 32px;
    font-size: 14px;
    cursor: pointer;
    background-color: var(--color-fill-2);
    border-radius: var(--border-radius-small);
    transition: color 0.1s cubic-bezier(0, 0, 1, 1),
      border-color 0.1s cubic-bezier(0, 0, 1, 1), background-color 0.1s,
      width 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

    &:hover {
      box-sizing: border-box;
      width: 70px;
      padding-right: 20px;
      background-color: var(--color-fill-3);

      .icon-picker-trigger-close {
        display: block;
      }
    }

    /* stylelint-disable-next-line no-descending-specificity */
    .icon-picker-trigger-close {
      position: absolute;
      right: 10px;
      box-sizing: border-box;
      display: none;
      width: 20px;
      height: 20px;
      padding: 3px;
      font-size: 12px;
      color: var(--color-text-2);
      border-radius: 50%;

      &:hover {
        background-color: var(--color-fill-4);
      }
    }
  }
}
</style>
<style lang="scss">
.arco-form-item-status-error {
  .icon-picker-trigger-main {
    background-color: var(--color-danger-light-1) !important;

    &:hover {
      background-color: var(--color-danger-light-2) !important;
    }
  }
}
</style>
