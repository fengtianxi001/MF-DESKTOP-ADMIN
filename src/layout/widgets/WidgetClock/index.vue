<template>
  <div class="widget-clock">
    <div class="clock-time">{{ time }}</div>
    <div class="clock-date">
      <span class="time-month">{{ dateInfo }}</span>
      <span class="time-week">{{ weekInfo }}</span>
      <span class="time-lunar">{{ lunarInfo.lunarMonthName + lunarInfo.lunarDayName }}</span>
      <span class="time-lunar">{{
        lunarInfo.GanZhiYear + lunarInfo.GanZhiMonth + lunarInfo.GanZhiDay
      }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import dayjs from 'dayjs'
import { onMounted, ref } from 'vue'
import LunarCalendar from 'lunar-calendar'
dayjs.locale('zh-cn')

const time = ref('00:00')
const currentDate = new Date()
const lunarInfo = LunarCalendar.solarToLunar(
  currentDate.getFullYear(),
  currentDate.getMonth() + 1,
  currentDate.getDate()
)

const dateInfo = dayjs().format('MM月DD日')
const weekInfo = dayjs().format('dddd')

const updateClock = () => {
  time.value = dayjs().format('hh:mm')
}
onMounted(() => {
  setInterval(updateClock, 1000)
})
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
