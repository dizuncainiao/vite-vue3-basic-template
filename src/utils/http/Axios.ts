import axios from 'axios'
// import qs from 'qs'
import { notification, message } from 'ant-design-vue'
import { RspCode, StatusCode } from './EnumAxios'
import type {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
  AxiosError
} from 'axios'
import type { ResponseResult } from '#/axios'

export default class VAxios {
  private axiosInstance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config)
    this.initInterceptors()
  }

  initInterceptors() {
    this.axiosInstance.interceptors.request.use(config => {
      config.headers = {
        ...config.headers
        // ...
      }
      // console.log(config, 'config')
      return config
    })

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse<ResponseResult>) => {
        console.log(response, 'response')
        try {
          if (response.status === StatusCode.SUCCESS) {
            if (response.data?.rspCode === RspCode.SUCCESS) {
              response.data?.rspMsg && message.info(response.data.rspMsg)
              return Promise.resolve(response.data)
            } else {
              return Promise.reject(response.data)
            }
          } else {
            return Promise.reject('ERROR')
          }
        } catch (e) {
          return Promise.reject(e)
        }
      },
      (err: AxiosError) => {
        console.log('onRejected', err)
        const { message, code } = err
        // 请求失败（400~）
        notification['error']({
          message: code,
          description: message
        })

        return Promise.reject(err.message)
      }
    )
  }

  request<T = any>(config: AxiosRequestConfig): Promise<ResponseResult<T>> {
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<ResponseResult<T>>(config)
        .then((res: AxiosResponse<ResponseResult>) => {
          try {
            resolve(res as any)
          } catch (err) {
            reject(err || new Error('request error!'))
          }
        })
        .catch((err: Error | AxiosError) => {
          reject(err)
        })
    })
  }

  post<T = any>(config: AxiosRequestConfig): Promise<ResponseResult<T>> {
    return this.request({
      ...config,
      method: 'POST'
    })
  }

  get<T = any>(config: AxiosRequestConfig): Promise<ResponseResult<T>> {
    return this.request({
      ...config,
      method: 'GET'
    })
  }
}
