<template>
  <div class="marker">
    <div class="marker-avatar" :style="{ backgroundColor: avatar.bgc }">{{ avatar.content }}</div>
    <div class="marker-dot"></div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
interface PropsType {
  name: string
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
  const content = props.name.slice(0, 1)
  return {
    bgc,
    content,
  }
})
</script>
<style lang="scss" scoped>
.marker {
  position: relative;
  display: flex;
  grid-gap: 4px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;

  .marker-avatar {
    position: absolute;
    top: -25px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 35%);
  }

  .marker-dot {
    width: 10px;
    height: 10px;
    background-color: rgb(var(--primary-6));
    border: 2px solid #fff;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 35%);
  }
}
</style>
