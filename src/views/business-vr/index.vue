<template>
  <div class="business-vr" ref="container"></div>
</template>
<script setup lang="tsx">
import { Viewer } from 'photo-sphere-viewer'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
import 'photo-sphere-viewer/dist/plugins/markers.css'
import 'photo-sphere-viewer/dist/plugins/gallery.css'
import { onMounted, ref } from 'vue'

const container = ref()

onMounted(() => {
  const viewer = new Viewer({
    container: container.value,
    panorama: '/vr/141784.jpg',
  })
})
</script>
<style lang="scss" scoped>
.business-vr {
  width: 100%;
  height: 100%;
}
</style>
