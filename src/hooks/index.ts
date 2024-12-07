// 根据项目封装的 http 工具的返回值来
type ResponseData = {
  code: number
  msg: string
  data: {
    total: number
    records: unknown[]
  }
}

type Params = {
  pageNumber: number
  pageSize: number
  [key: string]: unknown
}

type Options = {
  api: (params: Params) => Promise<ResponseData> // 请求api
  conditionParams: () => Record<string, never> // 请求条件参数
  auto?: boolean // 是否自动请求
}
export function usePage(options: Options) {
  const { api, conditionParams, auto = true } = options
  const pagination = ref({
    pageNumber: 1,
    pageSize: 10,
    pageTotal: 0
  })
  const list = ref<unknown[]>([])

  function getList() {
    const params = {
      ...conditionParams(),
      pageNumber: pagination.value.pageNumber,
      pageSize: pagination.value.pageSize
    }
    api(params).then(res => {
      list.value = res.data?.records || []
      pagination.value.pageTotal = res.data?.total || 0
    })
  }

  const pageData = computed(() => {
    return {
      ...pagination.value,
      list
    }
  })

  if (auto) {
    getList()
  }

  return {
    getList,
    pageData,
    pageSizeChange() {},
    pageNumberChange() {}
  }
}
const api = () => {
  const data: ResponseData = {
    code: 200,
    msg: 'success',
    data: {
      total: 100,
      records: []
    }
  }

  return new Promise<ResponseData>(resolve => resolve(data))
}

const { getList, pageData, pageSizeChange, pageNumberChange } = usePage({
  api,
  conditionParams: () => ({})
})
