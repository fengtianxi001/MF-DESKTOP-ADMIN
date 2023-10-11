<template>
  <div class="widget-map" ref="container"></div>
</template>
<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'
import { onMounted, ref, shallowRef, nextTick, createVNode, defineComponent, h, render } from 'vue'
import Marker from './Marker.vue'

const container = ref()
const map = shallowRef()

const addMarker = (coord?: any) => {
  const center = coord || [26.07, 119.2]
  const component = defineComponent({ render: () => h(Marker, {}) })
  const instance = createVNode(component)
  render(instance, document.createElement('div'))
  const icon = L.divIcon({
    html: instance.el,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  })
  const marker = L.marker(center, { icon })
  marker.addTo(map.value)
}

const initMap = () => {
  const center = [26.07, 119.2]
  const tileUrl = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
  map.value = L.map(container.value, {
    center,
    zoom: 15,
    minZoom: 9,
    maxZoom: 18,
    zoomControl: false,
    attributionControl: false,
  })
  L.tileLayer(tileUrl).addTo(map.value)
}

onMounted(() => {
  nextTick(() => {
    initMap()
    addMarker()
  })
})
</script>
<style lang="scss" scoped>
.widget-map {
  box-sizing: border-box;
  grid-row: span 1;
  grid-column: span 1;
  overflow: hidden;
  color: var(--color-text-1);
  background-color: var(--color-bg-2);
  border-radius: var(--border-radius-large);
  box-shadow: 0 0 5px rgb(0 0 0 / 35%);
}
</style>
