<template>
  <div class="widget-calendar">
    <div class="calendar-header">{{ current.month() + 1 }}月</div>
    <div class="calendar-body">
      <span>日</span>
      <span>一</span>
      <span>二</span>
      <span>三</span>
      <span>四</span>
      <span>五</span>
      <span>六</span>
      <span v-for="{ date, isToday } in calendar" :class="{ active: isToday }">{{ date }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as dayjs from 'dayjs'

const current = dayjs()
const startDay = current.startOf('month')
const endDay = current.endOf('month')
const calendar = new Array(startDay.date() - 1)

for (let i = 0; i < endDay.date(); i++) {
  const day = startDay.add(i, 'day')
  calendar.push({
    date: day.date(),
    isToday: day.isSame(current, 'day'),
    isCurrentMonth: day.isSame(current, 'month'),
  })
}
</script>
<style lang="scss" scoped>
.widget-calendar {
  box-sizing: border-box;
  grid-row: span 1;
  grid-column: span 1;
  padding: 10px;
  color: var(--color-text-1);
  background-color: var(--color-bg-2);
  border-radius: 6px;
  box-shadow: 0 0 5px rgb(0 0 0 / 35%);

  .calendar-header {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bolder;
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
