<template>
  <Space :size="8">
    <template v-for="(item, index) in options" :key="index">
      <Link v-if="item.visible !== false" v-bind="item">{{ item.text }}</Link>
    </template>
  </Space>
</template>
<script setup lang="ts">
import { Space, Link } from '@arco-design/web-vue'

interface PropsType {
  options: any[]
}
defineProps<PropsType>()
</script>
<!-- <style lang="scss" scoped></style> -->
