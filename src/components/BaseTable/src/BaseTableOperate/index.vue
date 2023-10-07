<template>
  <Space nowrap>
    <BaseTableOperateButton
      v-for="(item, index) in attrs"
      :key="index"
      :data="item"
    />
  </Space>
</template>
<script setup lang="ts">
import { awaitWrapper } from '@/utils/common'
import { Space } from '@arco-design/web-vue'
import { map } from 'lodash'
import { computed, ref } from 'vue'
import BaseTableOperateButton from './BaseTableOperateButton.vue'

interface PropsType {
  data: any[]
}

const props = defineProps<PropsType>()

const loading = ref(false)

const attrs = computed(() =>
  map(props.data, (item) => {
    const cache = { ...item }
    const click = cache.onClick
    cache.onClick = async () => {
      loading.value = true
      await awaitWrapper(click())
      loading.value = false
    }
    return cache
  })
)
</script>
