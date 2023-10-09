<template>
  <div class="widget-calendar">
    <div class="calendar-header">十月</div>
    <div class="calendar-body">
      <span>日</span>
      <span>一</span>
      <span>二</span>
      <span>三</span>
      <span>四</span>
      <span>五</span>
      <span>六</span>
      <span v-for="item in 31" :class="{ active: item === 9 }">{{ item }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
// interface PropsType {}
// const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.widget-calendar {
  box-sizing: border-box;
  grid-row: span 3;
  grid-column: span 3;
  padding: 10px;
  color: #000;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0 5px rgb(0 0 0 / 35%);

  .calendar-header {
    margin-bottom: 10px;
    font-weight: bold;
    color: #eb4e3d;
  }

  .calendar-body {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 2px;
    font-size: 10px;
    text-align: center;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 22px;
      height: 22px;
      border-radius: 50%;

      &.active {
        color: #fff;
        background-color: #eb4e3d;
      }

      &:nth-child(7n + 1),
      &:nth-child(7n + 7) {
        color: #777;
      }
    }
  }
}
</style>
