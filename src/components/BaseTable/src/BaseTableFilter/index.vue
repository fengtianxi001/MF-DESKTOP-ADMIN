<template>
  <div class="base-table-filter">
    <BaseForm
      v-bind="$attrs"
      v-model="dataSource"
      class="table-filter"
      layout="inline"
      label-align="left"
      :configs="configs"
      :style="filterStyle"
    />
    <div class="table-operate" :style="btnStyle">
      <Button
        type="primary"
        :loading="searchLoading"
        :disabled="resetLoading"
        @click="onQuery"
      >
        <template #icon>
          <IconSearch />
        </template>
        <template #default>筛选</template>
      </Button>
      <Button
        :loading="resetLoading"
        :disabled="searchLoading"
        @click="onReset"
      >
        <template #icon>
          <IconRefresh />
        </template>
        <template #default>重置</template>
      </Button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { isFunction, forEach } from 'lodash'
import { computed, ref, type StyleValue } from 'vue'
import { IconSearch, IconRefresh } from '@arco-design/web-vue/es/icon'
import { Button } from '@arco-design/web-vue'
import { BaseForm, type BaseFormConfigType } from '@/components/BaseForm'
import { useLoading } from '@/hooks/useLoading'
import { awaitWrapper } from '@/utils/common'
import { onMounted, watch } from 'vue'

interface PropsType {
  modelValue: any
  configs: BaseFormConfigType[]
  grid?: number
  query: (params: any) => Promise<any>
}

const props = defineProps<PropsType>()
const emit = defineEmits(['update:modelValue'])

const initValue = ref({})

const dataSource = ref({})

const btnStyle = computed<StyleValue>(() => {
  const grid = props.grid || 3
  return props.configs.length > grid ? { flexDirection: 'column' } : {}
})

const filterStyle = computed<StyleValue>(() => {
  const grid = props.grid || 3
  return {
    gridTemplateColumns: `repeat(${grid}, 1fr)`,
  }
})

const {
  loading: searchLoading,
  openLoading: openSearchLoading,
  closeLoading: closeSearchLoading,
} = useLoading(false, 500)

const {
  loading: resetLoading,
  openLoading: openResetLoading,
  closeLoading: closeResetLoading,
} = useLoading(false, 500)

const onQuery = async () => {
  emit('update:modelValue', { ...dataSource.value })
  if (!isFunction(props.query)) return undefined
  openSearchLoading()
  await awaitWrapper(props.query({ current: 1 }))
  closeSearchLoading()
  return undefined
}

const onReset = async () => {
  const cache: any = {}
  forEach(props.configs, (config) => {
    if (config?.defaultValue) {
      cache[config.name] = config?.defaultValue
    }
  })
  dataSource.value = { ...initValue.value, ...cache }
  emit('update:modelValue', { ...dataSource.value })
  if (!isFunction(props.query)) return undefined
  openResetLoading()
  await awaitWrapper(props.query({ current: 1 }))
  closeResetLoading()
  return undefined
}

onMounted(() => {
  const cache: any = {}
  forEach(props.configs, (config) => {
    if (config?.defaultValue) {
      cache[config.name] = config?.defaultValue
    }
  })
  initValue.value = { ...cache, ...props.modelValue }
  emit('update:modelValue', { ...dataSource.value })
  watch(
    () => props.modelValue,
    () => {
      const cache: any = {}
      forEach(props.configs, (config) => {
        if (config?.defaultValue) {
          cache[config.name] = config?.defaultValue
        }
      })
      dataSource.value = { ...cache, ...props.modelValue }
      // emit('update:modelValue', { ...dataSource.value })
    },
    { immediate: true, deep: true }
  )
})
</script>
<style lang="scss" scoped>
.base-table-filter {
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-neutral-2);

  :deep(.arco-form-layout-inline .arco-form-item) {
    margin: 0;
  }

  :deep(.arco-picker-size-medium) {
    width: 100%;
  }
}

.table-filter {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 12px 24px;
  overflow: hidden;
  transition: all 0.35s ease-in-out;
}

.table-operate {
  display: flex;
  grid-gap: 12px;
  padding-left: 12px;
  margin-left: 12px;
  border-left: 1px solid var(--color-neutral-2);
}
</style>
