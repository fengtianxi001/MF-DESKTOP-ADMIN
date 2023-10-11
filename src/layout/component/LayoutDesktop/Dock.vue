<template>
  <div class="layout-dock">
    <BaseAppIcon v-for="item in source" v-bind="{ ...item }" class="dock-item" />
  </div>
</template>
<script setup lang="ts">
import BaseAppIcon from '@/components/BaseAppIcon/index.vue'
import { dockStore, showApp } from '@/layout/store/apps'
import { computed, reactive } from 'vue'

const theme = reactive({
  value: 'light',
  name: 'fa-sun',
  color: '#ffaa00',
  onclick: () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    theme.name = theme.value === 'light' ? 'fa-sun' : 'fa-moon'
    theme.color = theme.value === 'light' ? '#ffaa00' : '#1e2f50'
    document.body.setAttribute('arco-theme', theme.value)
  },
})

const source = computed(() => {
  return [
    ...dockStore.value.map((dock) => ({
      size: 30,
      name: dock.iconName,
      color: dock.iconColor,
      onclick: () => showApp(dock),
    })),
    {
      size: 30,
      name: theme.name,
      color: theme.color,
      onclick: theme.onclick,
    },
  ]
})
</script>
<style lang="scss" scoped>
$dock-gap: 10px;

.layout-dock {
  position: absolute;
  bottom: $dock-gap;
  box-sizing: border-box;
  display: flex;
  grid-gap: $dock-gap;
  align-items: center;
  justify-content: center;
  padding: $dock-gap;
  margin: 0 auto;
  background-color: rgba(var(--gray-1), 0.3);
  border-radius: var(--border-radius-large);
}
</style>
