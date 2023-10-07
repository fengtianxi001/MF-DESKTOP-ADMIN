import { isFunction } from 'lodash'
import { ref, watch, type WatchStopHandle } from 'vue'
import { awaitWrapper } from '@/utils/common'
import { useLoading } from '@/hooks/useLoading'

interface OptionsType {
  defaultValue?: any
  formmatter?: (data: any) => any
  manual?: boolean
  defaultSearchValue?: Record<string, any>
  defaultPaginationValue?: Record<string, any>
}
function useTable<DataType>(service: any, options?: OptionsType) {
  const table = ref<any>()
  const { loading, openLoading, closeLoading } = useLoading(false, 500)
  const selected = ref<string[]>([])
  const pagination = ref(
    options?.defaultPaginationValue ?? {
      current: 1,
      pageSize: 10,
      total: 0,
    }
  )
  const dataSource = ref<DataType[]>([])
  const search = ref<any>({ ...(options?.defaultSearchValue || {}) })
  let pagatioWatch: WatchStopHandle | undefined
  const run = async (args?: Record<any, any>) => {
    openLoading()
    const params = {
      ...pagination.value,
      ...search.value,
      ...args,
    }
    if (isFunction(service)) {
      const { data: response, error } = await awaitWrapper(service(params))
      closeLoading()
      if (error) return false
      if (options && isFunction(options?.formmatter)) {
        const formatResult = options.formmatter(response)
        // console.log('formatResult', formatResult)
        dataSource.value = formatResult.data
        pagination.value = formatResult.pagination
      } else {
        // 客制化部分
        dataSource.value = response.records
        pagination.value = {
          current: response.current || 1,
          pageSize: response.size || 10,
          total: response.total || 1,
        }
      }

      if (pagatioWatch) pagatioWatch()
      // 开始监听分页变化
      pagatioWatch = watch(pagination, () => run(), {
        deep: true,
      })
      return true
    }
    return closeLoading()
  }
  if (!options?.manual) {
    run()
  }
  return {
    table,
    selected,
    loading,
    pagination,
    dataSource,
    search,
    run,
  }
}

export default useTable
