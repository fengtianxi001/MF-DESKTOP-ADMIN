<template>
  <div class="widget-polling">
    <div class="polling-header">巡检数据</div>
    <div class="polling-body">
      <div class="polling-item" v-for="item in 3">
        <div class="polling-item-top">
          <span>18</span>
          <span>次</span>
        </div>
        <div class="polling-item-bottom">巡检完成率</div>
      </div>
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
.widget-polling {
  box-sizing: border-box;
  grid-row: span 1;
  grid-column: span 1;
  grid-gap: 6px;
  padding: 10px;
  color: #000;
  background: #fff;
  background-image: red;
  border-radius: 6px;
  box-shadow: 0 0 5px rgb(0 0 0 / 35%);

  .polling-header {
    font-size: 14px;
    font-weight: bold;
    color: #00cb4c;
  }

  .polling-body {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    height: calc(100% - 20px);
  }

  .polling-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .polling-item-top {
      span:first-child {
        font-size: 28px;
        font-weight: bold;
      }
    }

    .polling-item-bottom {
      margin-top: 6px;
      font-size: 12px;
      color: #888;
    }
  }
}
</style>
