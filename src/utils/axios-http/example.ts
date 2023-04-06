import AxiosHttp from '@/utils/axios-http/index'
import { defineConfig } from '@/utils/axios-http/defineConfig'

type RequestData = {
  token: string
  COMPANYID: string
}

export type ResponseDataWrapper<T = any> = {
  data: T
  rspCode: number
  rspMsg: string
}

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
