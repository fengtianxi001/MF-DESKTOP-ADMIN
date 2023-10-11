<template>
  <div class="widget-calendar">
    <div class="calendar-header">
      <div class="header-left">{{ detail.date }}</div>
      <ul class="header-mid">
        <li>{{ detail.day }}</li>
        <li>{{ detail.month }}</li>
      </ul>
      <ul class="header-right">
        <i class="fa-solid fa-chevron-left" @click="changeMonth(1)"></i>
        <i class="fa-solid fa-chevron-right" @click="changeMonth(-1)"></i>
      </ul>
    </div>
    <div class="calendar-body">
      <span
        v-for="{ date, offsetx, istoday, ismonth } in calendar"
        :class="{ istoday, ismonth }"
        :style="{ gridColumn: offsetx }"
      >
        {{ date }}
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import * as dayjs from 'dayjs'
import { reactive, ref, watch } from 'vue'
dayjs.locale('zh-cn')

const offset = ref(0)
const calendar = ref([])
const detail = reactive({
  date: 0,
  day: '',
  month: '',
  year: '',
})
const generateCalendar = () => {
  const current = dayjs()

  const base = dayjs().subtract(offset.value, 'month')
  detail.date = current.date()
  detail.day = base.format('dddd')
  detail.month = base.format('MMMM')
  detail.year = base.format('YYYY')

  const startDay = base.startOf('month')
  const endDay = base.endOf('month')
  calendar.value = []
  for (let i = 0; i < endDay.date(); i++) {
    const day = startDay.add(i, 'day')
    calendar.value.push({
      date: day.date(),
      istoday: day.isSame(current, 'day'),
      ismonth: day.isSame(current, 'month'),
      offsetx: i === 0 ? startDay.day() : 0,
    })
  }
}

const changeMonth = (count) => {
  offset.value += count
}
watch(
  offset,
  () => {
    generateCalendar()
  },
  {
    immediate: true,
  }
)
</script>
<style lang="scss" scoped>
.widget-calendar {
  box-sizing: border-box;
  grid-row: span 1;
  grid-column: span 1;
  overflow: hidden;
  color: var(--color-text-1);
  background-color: var(--color-bg-2);
  border-radius: var(--border-radius-large);
  box-shadow: 0 0 5px rgb(0 0 0 / 35%);

  .calendar-header {
    box-sizing: border-box;
    display: flex;
    grid-gap: 10px;
    align-items: center;
    height: 50px;
    padding: 0 10px;
    color: var(--color-text-2);
    background-color: rgb(var(--gray-1));

    .header-left {
      font-size: 30px;
      font-weight: bold;
      color: var(--color-text-1);
    }

    .header-mid {
      flex: 1;
      font-size: 12px;
      font-weight: bold;
    }

    .header-right {
      display: flex;
      grid-gap: 4px;
      font-size: 12px;
      font-weight: bold;
      text-align: center;

      i:hover {
        cursor: pointer;
        opacity: 0.5;
      }
    }
  }

  .calendar-body {
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 2px;
    padding: 10px;
    font-size: 13px;
    font-weight: bold;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 23px;
      height: 23px;
      color: var(--color-text-3);
      text-align: right;
      border-radius: 50%;

      &.ismonth {
        color: var(--color-text-1);
      }

      &.istoday {
        color: #fff;
        background-color: rgb(var(--primary-6));
      }
    }
  }
}
</style>
