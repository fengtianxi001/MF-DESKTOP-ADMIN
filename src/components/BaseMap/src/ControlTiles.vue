<template>
  <ControlPanel title="瓦片控制" icon="fa-solid fa-layer-group">
    <div class="control-tiles">
      <div
        class="tile-item"
        v-for="item in bmap.tiles.value"
        :class="{ active: item.active }"
        @click="item?.onclick"
      >
        <img class="tile-thumb" :src="item.thumb" />
        <span class="tile-name">{{ item.name }}</span>
      </div>
    </div>
  </ControlPanel>
</template>
<script setup lang="ts">
import { inject } from 'vue'
import ControlPanel from './ControlPanel.vue'

const bmap: any = inject('bmap')
</script>
<style lang="scss" scoped>
.control-tiles {
  box-sizing: border-box;
  display: grid;
  flex-direction: column;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 6px;

  .tile-item {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    cursor: pointer;
    border: 2px solid var(--color-fill-2);

    .tile-thumb {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .tile-name {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 20px;
      font-size: 12px;
      line-height: 22px;
      color: #fff;
      text-align: center;
      background-color: #0003;
    }

    &.active {
      border-color: rgb(var(--primary-6));

      .tile-name {
        background-color: rgb(var(--primary-6));
      }
    }
  }
}
</style>
