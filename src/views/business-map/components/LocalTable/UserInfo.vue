<template>
  <div class="user-info">
    <div class="info-avatar" :style="{ backgroundColor: avatar.bgc }">{{ avatar.content }}</div>
    <div class="info-detail">
      <div class="info-name">{{ name }}</div>
      <div class="info-title">{{ title }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

interface PropsType {
  name: string
  title: string
}
const props = defineProps<PropsType>()

const generateColorCode = (inputString) => {
  let hash = 0
  for (let i = 0; i < inputString.length; i++) {
    hash = inputString.charCodeAt(i) + ((hash << 5) - hash)
    hash = hash & hash // 将哈希值转换为32位有符号整数
  }

  let colorCode = '#'
  for (let j = 0; j < 3; j++) {
    let value = (hash >> (j * 8)) & 0xff // 从哈希值中提取每个字节的值
    colorCode += value.toString(16).padStart(2, '0') // 转换为十六进制，并填充两位
  }

  return colorCode
}

const avatar = computed(() => {
  const bgc = generateColorCode(props.name)
  console.log('bgc', bgc)
  const content = props.name.slice(0, 1)
  return {
    bgc,
    content,
  }
})
</script>
<style lang="scss" scoped>
.user-info {
  display: flex;
  grid-gap: 8px;
  align-items: center;

  .info-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    border-radius: 50%;
  }

  .info-detail {
    display: flex;
    flex-direction: column;

    .info-title {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>
