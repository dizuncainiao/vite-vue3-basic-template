import AxiosHttp from '@/utils/axios-http/index'

const http = new AxiosHttp({
  baseURL: '',
  timeout: 60 * 1000
})

type CallList = {
  records: any[]
  page: number
  total: number
  pageSize: number
}

type Params = {
  pageNo: number
  pageSize: number
}

export const topList = (params: Params) =>
  http.get<CallList>('/v1/system/top/top_list', params)

export const addTop = (params: any) =>
  http.post('/v1/system/top/create_top', params)

export const login = (params: any) =>
  http.postForm<CallList>('/bdsaas/ajax/main/login.do', params)

export const switchSeat = (params: any) =>
  http.postJson('/bdsaas/ajax/seat/state/setting/switchSeat.do', params, {
    params: {
      token:
        'eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJiZHNhYXMiLCJzdWIiOiI2NzA5OCIsImV4cCI6MTY4MDc5ODg5MX0.JsLYktNNYWDOes342tmOvMnIM2SNySxAGUuzGf7A9ZfEprMJJ_udQPdiZb9bixfYAeHjPBzKwOeuyJaVHbk1jg',
      COMPANYID: 9
    }
  })
