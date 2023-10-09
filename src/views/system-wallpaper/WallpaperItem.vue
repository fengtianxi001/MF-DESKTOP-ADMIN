<template>
  <div class="wallpaper-item">
    <img :src="image" alt="" />
    <div class="wallpaper-item-circle" @click="setSystemWallpaper(image)">
      <i class="fa-solid fa-check"></i>
    </div>
  </div>
</template>
<script setup lang="ts">
import { setSystemWallpaper } from '../../stores/system'
interface PropsType {
  image: string
}
const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.wallpaper-item {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 120px;
  overflow: hidden;
  background-color: rgb(var(--gray-1));
  border: 1px solid var(--color-border);
  border-radius: 6px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.3s ease-in-out;
  }

  .wallpaper-item-circle {
    position: absolute;
    z-index: 9;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    background-color: rgba(var(--gray-1), 0.5);
    border-radius: 50%;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: rgb(var(--primary-6));
    }
  }

  &:hover {
    img {
      transform: scale(1.2);
    }

    .wallpaper-item-circle {
      display: flex;
    }
  }
}
</style>
