<template>
  <div class="layout">
    <LayoutWallpaper />
    <LayoutDesktop />
  </div>
</template>
<script setup lang="ts">
import LayoutWallpaper from './component/LayoutWallpaper/index.vue'
import LayoutDesktop from './component/LayoutDesktop/index.vue'
</script>
<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
