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
  request.get<LoginResultModel>({ url: 'main/login.do', params })
