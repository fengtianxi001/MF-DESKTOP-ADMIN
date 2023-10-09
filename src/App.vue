<template>
  <div id="desktop">
    <div class="base-wallpaper" :style="style"></div>
    <WidgetClock />
    <BaseApp />
    <BaseDock />
  </div>
</template>
<script setup lang="ts">
import BaseApp from '@/components/BaseApp/index.vue'
import BaseDock from '@/components/BaseDock/index.vue'
import { system } from '@/stores/system'
import { computed } from 'vue'
import WidgetClock from './components/BaseWidgets/WidgetClock/index.vue'
const style = computed(() => {
  return {
    backgroundImage: `url(${system.value.wallpaper})`,
  }
})
</script>
<style lang="scss" scoped>
#desktop {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.base-wallpaper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  transition: all 0.5s ease;
}
</style>
