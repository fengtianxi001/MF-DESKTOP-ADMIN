<template>
  <div class="page">
    <div id="map" ref="container"></div>
  </div>
</template>
<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import { onMounted, ref, nextTick } from 'vue'

const container = ref()
onMounted(() => {
  nextTick(() => {
    var map = L.map(container.value, {
      center: [26.07, 119.2],
      zoom: 11,
      minZoom: 9,
      maxZoom: 18,
      zoomControl: false,
      attributionControl: false,
    })
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)
  })
})
</script>
<style lang="scss" scoped>
.page {
  width: 100%;
  height: 100%;
  background: red;

  #map {
    width: 100%;
    height: 100%;
  }
}
</style>
