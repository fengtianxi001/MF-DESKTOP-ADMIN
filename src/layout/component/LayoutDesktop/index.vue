<template>
  <div class="layout-desktop">
    <Desktop />
    <Dock />
  </div>
</template>
<script setup lang="ts">
import Desktop from './Desktop.vue'
import Dock from './Dock.vue'
</script>
<style lang="scss" scoped>
.layout-desktop {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
