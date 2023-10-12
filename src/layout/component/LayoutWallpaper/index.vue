<template>
  <div class="layout-wallpaper"></div>
</template>
<script setup lang="ts">
import { systemStore } from '@/layout/store/system'
import { computed } from 'vue'

const background = computed(() => `url(./${systemStore.value.wallpaper})`)
</script>
<style lang="scss" scoped>
$background: v-bind(background);

.layout-wallpaper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-image: $background;
  background-position: center;
  background-size: cover;
  transition: all 0.5s ease;
}
</style>
