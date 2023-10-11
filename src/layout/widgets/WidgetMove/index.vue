<template>
  <div class="widget-move">
    <div class="move-main">
      <div class="move-date">
        <span>11</span>
        <span>10月 / 周三</span>
      </div>
      <div class="move-detail">
        <span>芬奇</span>
        <span>豆瓣8.4</span>
        <span>
          在世界末日后的地球上，一个为保护造物主的爱犬而生的机器人，学习生活、爱情、友谊以及作为人类意味着什么。
        </span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.widget-move {
  position: relative;
  box-sizing: border-box;
  grid-row: span 1;
  grid-column: span 1;
  overflow: hidden;
  background-image: url(./assets/cover.webp);
  background-size: cover;
  border-radius: var(--border-radius-large);
  box-shadow: 0 0 5px rgb(0 0 0 / 35%);

  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    content: '';
    background: linear-gradient(0deg, rgb(76, 61, 45), rgba(0, 0, 0, 0%));
  }

  .move-main {
    position: absolute;
    z-index: 9;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: transparent;

    .move-date {
      position: absolute;
      top: 0;
      right: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      color: #fff;

      span:first-child {
        font-size: 40px;
        font-weight: bold;
      }

      span:last-child {
        font-size: 12px;
        font-weight: bold;
      }
    }

    .move-detail {
      position: absolute;
      bottom: 10px;
      grid-gap: 4px;
      color: #fff;

      span:nth-child(1) {
        display: block;
        font-size: 14px;
        font-weight: bold;
      }

      span:nth-child(2) {
        display: inline-block;
        padding: 3px 10px;
        margin-top: 6px;
        font-size: 12px;
        color: #4f0e03;
        background-color: #ffac2d;
        border-radius: 10px;
      }

      span:nth-child(3) {
        display: block;
        margin-top: 6px;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
}
</style>
