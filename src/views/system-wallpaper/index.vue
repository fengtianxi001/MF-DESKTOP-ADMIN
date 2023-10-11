<template>
  <div class="system-wallpaper">
    <WallpaperItem
      v-for="(wallpaper, index) in system.wallpapers"
      :key="index"
      :image="wallpaper"
    />
  </div>
</template>
<script setup lang="ts">
import WallpaperItem from './WallpaperItem.vue'
import { system } from '@/layout/store/system'
</script>
<style lang="scss" scoped>
.system-wallpaper {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  width: 100%;
  padding: 10px;

  .wallpaper-item {
    width: 100%;
    height: 120px;
    background-color: rgb(var(--gray-1));
    border-radius: 6px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
