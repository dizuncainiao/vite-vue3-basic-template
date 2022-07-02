import { request } from '@/utils/http'

interface LoginParams {
  userName: number | string
  passWord: number | string
  auto: number
  terminaltype: 'WEB'
}

interface LoginResultModel {
  auth: {
    accessToken: string
    refreshToken: string
  }
  authList: string[]
  companyCode: string
  companyId: number
  companyImage: string
  realNameInCompany: string
  userInfo: {
    profileId: string
    realName: string
    companyName: string
  }
}

export const login = (params: LoginParams) =>
  request.post<LoginResultModel>({ url: 'main/login.do', params })

export const logout = (params: Token) =>
  request.post<null>({ url: 'main/logout.do', params })

interface LogisticsSchedulesParams {
  page: number
  pageSize: number
  token: string
  COMPANYID: number | null
}

export type Token = Omit<LogisticsSchedulesParams, 'page' | 'pageSize'>

export const getLogisticsSchedules = (params: LogisticsSchedulesParams) =>
  request.get<Array<Record<string, any>>>({
    url: 'logistics/logisticsScheduling/getLogisticsSchedules.do',
    params
  })
