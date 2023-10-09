<template>
  <div class="widget-weather">
    <div class="address">福州大学</div>
    <div class="tem">22°</div>
    <div class="weather">阵雨</div>
    <div class="detail">
      <span>最高</span>
      <span>24° </span>
      <span>最低</span>
      <span>14° </span>
    </div>
  </div>
</template>
<script setup lang="ts">
// interface PropsType {}
// const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.widget-weather {
  position: relative;
  box-sizing: border-box;
  grid-row: span 2;
  grid-column: span 3;
  padding: 10px;
  color: #fff;
  background-image: linear-gradient(35deg, #191a2e 30%, #4c5f7f);
  border-radius: 6px;
  box-shadow: 0 0 5px rgb(0 0 0 / 35%);

  .address {
    font-size: 18px;
  }

  .tem {
    font-size: 30px;
  }

  .weather {
    margin-top: 10px;
    font-size: 12px;
  }

  .detail {
    margin-top: 4px;
    font-size: 12px;
  }
}
</style>
