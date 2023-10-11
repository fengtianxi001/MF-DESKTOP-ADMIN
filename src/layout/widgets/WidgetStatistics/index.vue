<template>
  <div class="widget-statistics">
    <div class="statistics-item" v-for="source in sources">
      <div class="icon" :style="{ background: source.color }">
        <i :class="source.icon"></i>
      </div>
      <div class="detail">
        <div class="cn">{{ source.label }}</div>
        <div class="en">{{ source.label }}</div>
      </div>
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
  // {
  //   icon: 'fa-solid fa-fire-flame-simple',
  //   label: '年降雨量',
  //   value: 5,
  //   color: '#ff5ca1',
  // },
  // {
  //   icon: 'fa-solid fa-radiation',
  //   label: '异常数量',
  //   value: 5,
  //   color: '#ed1c24',
  // },
  // {
  //   icon: 'fa-solid fa-fire-flame-simple',
  //   label: '年降雨量',
  //   value: 5,
  //   color: '#ff5ca1',
  // },
]
</script>
<style lang="scss" scoped>
.widget-statistics {
  box-sizing: border-box;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(1, 1fr);
  grid-row: span 1;
  grid-column: span 1;
  grid-gap: 8px;
  padding: 8px;
  background-color: var(--color-bg-1);
  border-radius: 6px;
  box-shadow: 0 0 5px rgb(0 0 0 / 35%);

  .statistics-item {
    box-sizing: border-box;
    display: flex;
    grid-gap: 6px;
    align-items: center;
    padding: 6px;
    background-color: rgb(var(--gray-2));
    border: 1px solid var(--color-border);
    border-radius: 6px;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      font-size: 18px;
      color: #fff;
      border-radius: 50%;
    }

    .detail {
      flex: 1;
      color: var(--color-text-1);

      .cn {
        font-size: 14px;
      }

      .en {
        margin-top: 2px;
        font-size: 12px;
        color: rgb(var(--gray-8));
      }
    }

    .value {
      margin-right: 4px;
      font-size: 20px;
      font-weight: bold;
      color: var(--color-text-1);
    }
  }
}
</style>
