import { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'

export interface HttpAxiosConfig<
  RequestData = any,
  ResponseData = any,
  R = AxiosRequestConfig<RequestData>
> {
  config: R
  interceptors: {
    request: {
      onFulfilled: (config: AxiosRequestConfig<RequestData>) => void
      onRejected: (error: any) => void
    }
    response: {
      onFulfilled: (config: AxiosResponse<ResponseData, RequestData>) => void
      onRejected: (error: any) => void
    }
  }
}

export type InterceptorsType = 'request' | 'response'
