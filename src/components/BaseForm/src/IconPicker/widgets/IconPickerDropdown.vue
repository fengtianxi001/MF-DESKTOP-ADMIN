<template>
  <div class="icon-picker-dropdown">
    <Tabs class="icon-picker-dropdown-tabs" lazy-load>
      <TabPane
        v-for="(icons, title) in ICON_RECORDS"
        :key="title"
        :title="title"
      >
        <div class="icon-picker-dropdown-icons">
          <div
            v-for="icon in icons"
            :key="icon"
            :class="className(icon)"
            @click="onconfirm(icon)"
          ></div>
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>
<script setup lang="ts">
import { Tabs, TabPane } from '@arco-design/web-vue'
// import { computed, onMounted, nextTick, watchEffect, watch } from 'vue'
import { ICON_RECORDS } from '../configs'

interface PropsType {
  modelValue: any
}

const props = defineProps<PropsType>()
const emit = defineEmits(['update:modelValue'])
const className = (icon: string) => {
  let base = `icon-picker-dropdown-icon mfr mf-${icon}`
  base += props.modelValue === icon ? ' active' : ''
  return base
}

const onconfirm = (icon: any) => {
  emit('update:modelValue', icon)
}
</script>
<style lang="scss">
.icon-picker-dropdown {
  width: 625px;

  .icon-picker-dropdown-tabs {
    .arco-tabs-content {
      padding-top: unset;
    }

    .arco-tabs-nav-type-line .arco-tabs-tab {
      margin: 0 10px;
    }
  }

  .icon-picker-dropdown-icons {
    display: grid;
    grid-template-rows: repeat(auto-fill, 40px);
    grid-template-columns: repeat(auto-fill, 40px);
    grid-gap: 10px;
    max-height: 400px;
    padding: 10px;
    overflow: auto;
  }

  .icon-picker-dropdown-icon {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    font-size: 18px;
    cursor: pointer;
    background-color: var(--color-fill-2);
    border-radius: var(--border-radius-small);
    transition: color 0.1s cubic-bezier(0, 0, 1, 1),
      border-color 0.1s cubic-bezier(0, 0, 1, 1), background-color 0.1s;

    &:hover {
      background-color: var(--color-fill-3);
    }

    &.active {
      color: #fff;
      background-color: rgb(var(--primary-6));
    }
  }
}
</style>
