<template>
  <div class="dock">
    <div class="dock-block">
      <BaseAppIcon
        class="dock-block-item"
        v-for="(dock, index) in docks"
        :key="index"
        :size="30"
        :name="dock.iconName"
        :color="dock.iconColor"
        @click="showApp(dock)"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { docks, showApp } from '@/stores/apps'
import BaseAppIcon from '@/components/BaseAppIcon/index.vue'
</script>
<style lang="scss" scoped>
$bar-height: 60px;
$bar-padding: 10px;

.dock {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: $bar-height;

  .dock-block {
    box-sizing: border-box;
    display: flex;
    grid-gap: $bar-padding;
    height: calc(#{$bar-height} - #{$bar-padding});
    padding: $bar-padding;
    background-color: #252525bb;
    box-shadow: 0 1px 2px #44444460, 0 3px 25px 1px #000000a0;
    -webkit-backdrop-filter: blur(20px) saturate(1.5);
    backdrop-filter: blur(20px) saturate(1.5);

    .dock-block-item {
      cursor: pointer;

      &:active {
        opacity: 0.5;
      }
    }
  }
}
</style>
