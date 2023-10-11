<template>
  <div class="widget-app" @click="openApp(data)">
    <BaseAppIcon :size="44" :name="data.iconName" :color="data.iconColor" />
    <p class="widget-app-name">{{ data.name }}</p>
  </div>
</template>
<script setup lang="ts">
import { openApp } from '@/layout/store/apps'
import BaseAppIcon from '@/components/BaseAppIcon/index.vue'
interface PropsType {
  data: any
}
const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.widget-app {
  grid-row: span 1;
  grid-column: span 1;
  width: 48px;
  height: 48px;
  cursor: pointer;

  .widget-app-name {
    margin-top: 5px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    text-shadow: 2px 2px 4px #000000a0, 0 0 3px #000;
  }
}
</style>
