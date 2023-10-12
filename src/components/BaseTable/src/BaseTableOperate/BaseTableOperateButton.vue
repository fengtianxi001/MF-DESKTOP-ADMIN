<template>
  <Button :loading="loading" v-bind="{ ...attr }">
    {{ attr.text }}
  </Button>
</template>
<script setup lang="ts">
import { awaitWrapper } from '../../utils/common'
import { Button } from '@arco-design/web-vue'
import { computed, ref } from 'vue'

interface PropsType {
  data: any
}

const props = defineProps<PropsType>()

const loading = ref(false)

const attr = computed(() => {
  const cache = { ...props.data }
  const click = cache.onClick
  cache.onClick = async () => {
    loading.value = true
    await awaitWrapper(click())
    loading.value = false
  }
  return cache
})
</script>
