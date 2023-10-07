<template>
  <div class="page">
    <BaseApp />
    <BaseDock />
  </div>
</template>
<script setup lang="ts">
import BaseApp from '@/components/BaseApp/index.vue'
import BaseDock from '@/components/BaseDock/index.vue'
</script>
<style lang="scss" scoped>
.page {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #1c2233;
  background-image: url(./assets/bg-dark.png);
  background-position: center;
  background-size: cover;
}
</style>
