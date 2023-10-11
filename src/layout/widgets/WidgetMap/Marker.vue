<template>
  <div class="marker">
    <img :src="avatar" />
    <div class="dot"></div>
  </div>
</template>
<script setup lang="ts">
import avatar from './assets/avatar.webp'
</script>
<style lang="scss" scoped>
.marker {
  position: relative;
  display: flex;
  grid-gap: 4px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  img {
    position: absolute;
    top: -35px;
    width: 40px;
    height: 40px;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  .dot {
    width: 10px;
    height: 10px;
    background-color: rgb(var(--primary-6));
    border: 2px solid #fff;
    border-radius: 50%;
  }
}
</style>
