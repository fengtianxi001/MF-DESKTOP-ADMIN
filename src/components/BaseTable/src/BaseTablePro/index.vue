<template>
  <div ref="wrap">
    <component :is="container" :title="title">
      <BaseTableFilter
        v-if="tableFilter"
        v-model="search"
        label-width="70px"
        :configs="tableFilter"
        :query="run"
        :loading="loading"
        :grid="grid"
        v-bind="filerOptions"
      />
      <div v-if="tableOperates" class="base-table-middle">
        <BaseTableOperate :data="tableOperates" />
        <BaseTableSetting
          v-if="setting"
          v-model:size="size"
          v-model:columns="columnFilter"
          :refresh="run"
        />
      </div>
      <BaseTable
        :loading="loading"
        :columns="columns"
        :data="dataSource"
        :pagination="pagination"
        v-bind="{ ...tabelProps, ...$attrs }"
        :size="size"
      />
    </component>
  </div>
</template>
<script setup lang="ts">
import BaseCard from '../BaseCard/index.vue'
import { computed, h, ref, watchEffect } from 'vue'
import { useEventListener } from '../../hooks/useEventListener'
import { isArray } from 'lodash'
import BaseTableFilter from '../BaseTableFilter/index.vue'
import BaseTable from '../BaseTable.vue'
import BaseTableOperate from '../BaseTableOperate/index.vue'
import BaseTableSetting from '../BaseTableSetting/index.vue'
import useTable from '../../hooks/useTable'

interface PropsType {
  title?: string
  card?: boolean
  service: any
  setting?: boolean
  tableColumns: any
  tableFilter?: any
  tableOperates?: any
  filerOptions?: any
  tabelProps?: any
  manual?: boolean
  defaultSearchValue?: any
}

const props = withDefaults(defineProps<PropsType>(), {
  card: true,
  title: '',
  setting: true,
  tableFilter: false,
  tableOperates: false,
  filerOptions: {},
  tabelProps: {},
  manual: false,
  defaultSearchValue: {},
})

const grid = ref(3)
const wrap = ref<HTMLElement>()
const container = computed(() =>
  props.card === false ? h('div', { class: 'base-table-pro-div' }) : BaseCard
)
const { loading, dataSource, search, pagination, run } = useTable(props.service, {
  manual: true,
  defaultSearchValue: props.defaultSearchValue,
})

const initDefaultValue = () => {
  if (props.tableFilter && isArray(props.tableFilter)) {
    props.tableFilter.forEach((config: any) => {
      if (config.defaultValue) {
        search.value[config.name] = config.defaultValue
      }
    })
  }
  if (!props.manual) {
    run()
  }
}
initDefaultValue()
const size = ref<'mini' | 'small' | 'medium' | 'large'>('large')

const columnFilter = ref([])

const columns = computed(() => columnFilter.value.filter((item: any) => item.visible))

const resetFilterGrid = () => {
  const clientWidth = wrap.value?.clientWidth as number
  if (clientWidth > 1400) {
    grid.value = 3
  } else if (clientWidth > 1000) {
    grid.value = 3
  } else if (clientWidth > 700) {
    grid.value = 2
  } else {
    grid.value = 1
  }
}

useEventListener('resize', resetFilterGrid, {
  target: window,
  immediate: true,
})

watchEffect(() => {
  columnFilter.value = props.tableColumns.map((item: any) => ({
    ...item,
    visible: true,
  }))
})

defineExpose({
  search,
  refresh: (params?: any) => run(params),
})
</script>

<style lang="scss" scoped>
.base-table-middle {
  display: flex;
  justify-content: space-between;
}
</style>
<style lang="scss">
.base-table-pro-div {
  display: flex;
  flex-direction: column;
  grid-gap: 10px;
}
</style>
