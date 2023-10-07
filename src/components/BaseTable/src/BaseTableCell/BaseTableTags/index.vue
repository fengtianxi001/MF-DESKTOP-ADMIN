<template>
  <div class="base-table-tags">
    <Tag v-if="isEmpty(source)" size="small">暂无信息</Tag>
    <Tag v-for="{ label } in source" v-else :key="label" size="small">
      {{ label }}
    </Tag>
  </div>
</template>
<script setup lang="ts">
import { isEmpty, sortBy } from 'lodash'
import { Tag } from '@arco-design/web-vue'
import { computed } from 'vue'

interface PropsType {
  options: any[]
}
const props = defineProps<PropsType>()

const stringToColor = (string: string, caseSensitive?: boolean): string => {
  string = caseSensitive ? string : string.toLowerCase()
  let hash = 1315423911
  let index = string.length - 1
  while (index >= 0) {
    const ch = string.charCodeAt(index)
    hash ^= (hash << 5) + ch + (hash >> 2)
    index -= 1
  }
  return `#${(hash & 0x7fffffff).toString(16).slice(0, 6)}`
}

const source = computed(() =>
  sortBy(props.options).map((item) => ({
    label: item,
    color: stringToColor(item),
  }))
)
</script>
<style lang="scss" scoped>
.base-table-tags {
  display: flex;
  flex-wrap: wrap;
  grid-gap: 4px;
}
</style>
