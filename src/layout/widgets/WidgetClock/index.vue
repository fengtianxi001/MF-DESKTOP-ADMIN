<template>
  <div class="widget-clock">
    <div class="clock-time">17:54</div>
    <div class="clock-date">
      <span class="time-month">10月8日</span>
      <span class="time-week">星期日</span>
      <span class="time-lunar">八月廿四</span>
    </div>
  </div>
</template>
<script setup lang="ts">
// interface PropsType {}
// const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.widget-clock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 300px;
  color: #fff;

  .clock-time {
    font-size: 80px;
    font-weight: bold;
    text-align: center;
  }

  .clock-date {
    display: flex;
    grid-gap: 6px;
    justify-content: center;
    font-size: 16px;
    text-align: center;
  }
}
</style>
