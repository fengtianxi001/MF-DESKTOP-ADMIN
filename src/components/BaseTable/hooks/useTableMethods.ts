import { computed, ref, watch } from 'vue'

export function useTableMethods() {
  const table = ref()
  const selected = ref<string[]>([])
  const isEmptySelected = computed(() => selected.value.length === 0)
  const refresh = () => {
    table.value?.refresh()
  }
  const search = computed(() => table.value?.search)

  return {
    table,
    search,
    selected,
    isEmptySelected,
    refresh,
  }
}

export default useTableMethods
