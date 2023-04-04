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

http.get<CallList>('/login.do').then(res => {
  console.log(res.rspCode)
  console.log(res.rspMsg)
  console.log(res.data)
  console.log(res.data.records)
})
