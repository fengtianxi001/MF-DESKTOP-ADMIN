<template>
  <div class="widget-dam">
    <div class="dam-item" v-for="source in sources" :class="{ danger: source.danger }">
      <span>{{ source.name }}</span>
      <span>{{ source.danger ? '异常' : '正常' }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
const sources = [
  {
    name: '厦门南普陀市水库',
    danger: false,
  },
  {
    name: '天津解放路水库',
    danger: true,
  },
  {
    name: '重庆磁器口水库',
    danger: true,
  },
  {
    name: '内蒙梅玲生水库',
    danger: false,
  },
]
</script>
<style lang="scss" scoped>
.widget-dam {
  box-sizing: border-box;
  grid-row: span 1;
  grid-column: span 1;
  padding: 10px;
  color: var(--color-text-1);
  background-color: var(--color-bg-2);
  border-radius: 6px;
  box-shadow: 0 0 5px rgb(0 0 0 / 35%);

  .dam-item {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    font-size: 12px;
    line-height: 18px;
    border-left: 3px solid #00cc4c;

    &.danger {
      border-left: 3px solid #ed1c24;
    }

    &:not(last-child) {
      margin-bottom: 10px;
    }

    span:first-child {
      font-weight: bold;
    }

    span:last-child {
      color: rgb(var(--gray-8));
    }
  }
}
</style>
