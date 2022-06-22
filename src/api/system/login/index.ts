import { request } from '@/utils/http'

export const login = (params?: any) =>
  request.post({ url: 'main/login.do', params })
