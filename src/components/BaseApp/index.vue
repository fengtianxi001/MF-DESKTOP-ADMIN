<template>
  <div class="base-apps">
    <div class="base-app-item" v-for="app in apps" @click="openApp(app)">
      <BaseAppIcon :size="44" :name="app.iconName" :color="app.iconColor" />
      <p class="base-app-item-name">{{ app.name }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { apps } from '@/stores/apps'
import { openApp } from '@/stores/apps'
import BaseAppIcon from '../BaseAppIcon/index.vue'
</script>
<style lang="scss" scoped>
.base-apps {
  box-sizing: border-box;
  display: grid;
  grid-template-rows: repeat(auto-fill, 48px);
  grid-template-columns: repeat(auto-fill, 48px);
  grid-auto-flow: dense;
  grid-gap: 24px;
  justify-content: center;
  width: 100vw;
  height: calc(100vh - 60px);
  padding-top: 2vh;
  padding-bottom: 50px;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;

  .base-app-item {
    grid-row: span 1;
    grid-column: span 1;
    width: 48px;
    height: 48px;
    cursor: pointer;

    .base-app-item-image {
      width: 100%;
      height: 100%;
    }

    .base-app-item-name {
      margin-top: 5px;
      font-size: 12px;
      color: #fff;
      text-align: center;
      text-shadow: 2px 2px 4px #000000a0, 0 0 3px #000;
    }
  }
}
</style>
