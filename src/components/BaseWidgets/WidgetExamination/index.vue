<template>
  <div class="widget-hotpoints">
    <div class="header">体检热力图</div>
    <div class="body">
      <div class="hotpoint" v-for="source in sources" :style="source"></div>
    </div>
  </div>
</template>
<script setup lang="ts">
// interface PropsType {}
// const props = defineProps<PropsType>()

const sources = new Array(60).fill(0).map(() => {
  const opacity = Math.random() * 1
  return { opacity }
})
</script>
<style lang="scss" scoped>
.widget-hotpoints {
  box-sizing: border-box;
  grid-row: span 2;
  grid-column: span 3;
  padding: 10px;
  color: #000;
  background: #fff;
  border-radius: 6px;
  box-shadow: 0 0 5px rgb(0 0 0 / 35%);

  .header {
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: bolder;
    color: #000;

    // color: #555;
  }

  .body {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 4px;

    .hotpoint {
      width: 100%;
      height: 12px;
      background: #9bcb43;
    }
  }
}
</style>
