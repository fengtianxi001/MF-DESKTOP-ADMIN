<template>
  <BaseMap class="widget-map" ref="bmap"></BaseMap>
</template>
<script setup lang="ts">
import BaseMap from '@/components/BaseMap/index.vue'
import { onMounted, ref, nextTick } from 'vue'
import Marker from './Marker.vue'

const bmap = ref()

onMounted(() => {
  nextTick(() => {
    bmap.value?.addMarker(Marker, {}, [26.07, 119.2], 'staff')
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
