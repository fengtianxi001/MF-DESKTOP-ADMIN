<template>
  <div class="dock">
    <div class="dock-block">
      <BaseAppIcon
        class="dock-block-item"
        v-for="(dock, index) in docks"
        :key="index"
        :size="30"
        :name="dock.iconName"
        :color="dock.iconColor"
        @click="showApp(dock)"
      />
      <BaseAppIcon
        class="dock-block-item"
        :size="30"
        :name="theme.name"
        :color="theme.color"
        @click="onToggleTheme"
      />
      <BaseAppIcon class="dock-block-item" :size="30" name="fa-image" color="#8855ff" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { docks, showApp } from '@/stores/apps'
import BaseAppIcon from '@/components/BaseAppIcon/index.vue'

const theme = reactive({
  value: 'light',
  name: 'fa-sun',
  color: '#ffaa00',
})

const onToggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  theme.name = theme.value === 'light' ? 'fa-sun' : 'fa-moon'
  theme.color = theme.value === 'light' ? '#ffaa00' : '#1e2f50'
  document.body.setAttribute('arco-theme', theme.value)
}
</script>
<style lang="scss" scoped>
$bar-height: 60px;
$bar-padding: 10px;

.dock {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: $bar-height;

  .dock-block {
    box-sizing: border-box;
    display: flex;
    grid-gap: $bar-padding;
    height: calc(#{$bar-height} - #{$bar-padding});
    padding: $bar-padding;
    background-color: rgba(var(--gray-1), 0.3);
    border-radius: 6px;

    .dock-block-item {
      cursor: pointer;

      &:active {
        opacity: 0.5;
      }
    }
  }
}
</style>
