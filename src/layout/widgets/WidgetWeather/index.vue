<template>
  <div class="widget-weather">
    <div class="widget-main">
      <img :src="thunder" />
      <span>27°</span>
      <span>福州 | 雷雨</span>
    </div>
    <div class="widget-detail">
      <div class="widget-detail-item" v-for="item in source">
        <i :class="item.icon"></i>
        <span>{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import thunder from './assets/thunder.png'

const source = [
  {
    icon: 'fa-solid fa-wind',
    value: '36km/h',
  },
  {
    icon: 'fa-solid fa-cloud',
    value: '80%',
  },
  {
    icon: 'fa-solid fa-umbrella',
    value: '30%',
  },
]
</script>
<style lang="scss" scoped>
.widget-weather {
  position: relative;
  box-sizing: border-box;
  grid-row: span 1;
  grid-column: span 1;
  padding: 10px;
  color: #fff;
  background-color: #202e52;
  border-radius: var(--border-radius-large);
  box-shadow: 0 0 5px rgb(0 0 0 / 35%);

  .widget-main {
    position: relative;
    display: grid;
    grid-template-rows: 50px 30px;
    grid-template-columns: 80px auto;
    grid-column-gap: 6px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;

    &::after {
      position: absolute;
      bottom: 0;
      left: 50px;
      width: 80px;
      height: 1px;
      content: '';
      background-color: #8597c945;
    }

    img {
      grid-row: 1/3;
      width: 80px;
      height: 80px;
    }

    span:nth-child(2) {
      display: flex;
      align-items: flex-end;
      font-size: 38px;
      font-weight: bolder;
    }

    span:nth-child(3) {
      font-size: 12px;
      font-weight: bolder;
      color: #8597c9;
    }
  }

  .widget-detail {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    height: calc(100% - 100px);

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      i:nth-child(1) {
        margin-bottom: 8px;
        font-size: 16px;
      }

      span:nth-child(2) {
        font-size: 12px;
        color: #8597c9;
      }
    }
  }
}
</style>
