<template>
  <div class="base-table-profile">
    <Image
      v-if="image"
      :src="image"
      :width="imageSize"
      :height="imageSize"
      fit="cover"
    />
    <div class="base-table-profile-info" :class="infoClassName">
      <div v-if="title" class="base-table-profile-info-title">{{ title }}</div>
      <div v-if="desc" class="base-table-profile-info-desc">{{ desc }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Image } from '@arco-design/web-vue'
import { computed } from 'vue'

interface PropsType {
  image?: string
  title?: string
  desc?: string
}
const props = defineProps<PropsType>()

const imageSize = computed(() => {
  const { title, desc } = props
  return title && desc ? 36 : 30
})
const infoClassName = computed(() => {
  const { title, desc } = props
  if (title && desc) return 'both'
  if (title || desc) return 'single'
  return 'empty'
})
</script>
<style lang="scss" scoped>
.base-table-profile {
  display: flex;

  :deep(.arco-image-error-alt) {
    display: none;
  }

  &-info {
    &.both {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 6px;
    }

    &.single {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 6px;
    }

    &-title {
      font-size: 13px;
      color: var(--color-text-1);
    }

    &-desc {
      display: -webkit-box;
      overflow: hidden;
      font-size: 12px;
      color: var(--color-text-2);
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
  }
}
</style>
