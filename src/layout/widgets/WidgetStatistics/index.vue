<template>
  <div class="widget-statistics">
    <div class="statistics-item" v-for="source in sources">
      <div class="icon" :style="{ background: source.color }">
        <i :class="source.icon"></i>
      </div>
      <div class="label">{{ source.label }}</div>
      <div class="value">{{ source.value }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
// interface PropsType {}
// const props = defineProps<PropsType>()

const sources = [
  {
    icon: 'fa-solid fa-seedling',
    label: '水库座数',
    value: 5,
    color: '#2d6dff',
  },
  {
    icon: 'fa-solid fa-chart-simple',
    label: '设备数量',
    value: 5,
    color: '#00cc4c',
  },
  {
    icon: 'fa-solid fa-radiation',
    label: '异常数量',
    value: 5,
    color: '#ed1c24',
  },
  {
    icon: 'fa-solid fa-fire-flame-simple',
    label: '平均降雨量',
    value: 5,
    color: '#ff5ca1',
  },
]
</script>
<style lang="scss" scoped>
.widget-statistics {
  box-sizing: border-box;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-row: span 1;
  grid-column: span 1;
  grid-gap: 6px;
  padding: 6px;
  color: #000;
  background: #e5e6eb;
  border-radius: 6px;
  box-shadow: 0 0 5px rgb(0 0 0 / 35%);

  .statistics-item {
    box-sizing: border-box;
    display: grid;
    grid-template-rows: 14px auto;
    grid-template-columns: 42px auto;
    align-items: center;
    padding: 6px;
    background: #fff;
    border-radius: 6px;

    .icon {
      display: flex;
      grid-row: 1 / 3;
      align-items: center;
      justify-content: center;
      width: 35px;
      height: 35px;
      font-size: 16px;
      color: #fff;
      border-radius: 50%;
    }

    .label {
      font-size: 12px;
    }

    .value {
      font-size: 18px;
      font-weight: bold;
    }

    .unit {
      position: relative;
      top: 4px;
      left: 4px;
      font-size: 12px;
    }
  }
}
</style>
