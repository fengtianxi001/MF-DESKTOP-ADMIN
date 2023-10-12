<template>
  <div class="base-map" ref="container">
    <div
      class="base-map-left"
      @mousedown.stop="() => {}"
      @mouseup.stop="() => {}"
      @wheel.stop="() => {}"
      @dblclick.stop="() => {}"
      @click.stop="() => {}"
      @mouseenter.stop="() => {}"
      @mouseleave.stop="() => {}"
    >
      <slot name="left"></slot>
    </div>
    <div
      class="base-map-right"
      @mousedown.stop="() => {}"
      @mouseup.stop="() => {}"
      @wheel.stop="() => {}"
      @dblclick.stop="() => {}"
      @click.stop="() => {}"
      @mouseenter.stop="() => {}"
      @mouseleave.stop="() => {}"
    >
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { provide, defineExpose } from 'vue'
import { useMap } from './hooks/useMap'
const { container, map, tiles, groups, coordinate, scale, addMarker } = useMap()

provide('bmap', {
  container,
  map,
  tiles,
  groups,
  coordinate,
  scale,
  addMarker,
})

defineExpose({
  container,
  map,
  tiles,
  groups,
  coordinate,
  scale,
  addMarker,
})
</script>
<style lang="scss" scoped>
.base-map {
  position: relative;
  width: 100%;
  height: 100%;

  .base-map-left {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    box-sizing: border-box;
    display: grid;
    grid-gap: 10px;
    padding: 10px;
  }

  .base-map-right {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999;
    box-sizing: border-box;
    display: grid;
    grid-gap: 10px;
    padding: 10px;
  }
}
</style>
