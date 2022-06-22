import axios from 'axios'
// import qs from 'qs'
import { RspCode, StatusCode } from './EnumAxios'
import type {
  AxiosRequestConfig,
  AxiosInstance,
  AxiosResponse,
  AxiosError,
} from 'axios'
import type { Result } from '#/axios'

export default class VAxios {
  private axiosInstance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.axiosInstance = axios.create(config)
    this.initInterceptors()
  }

  initInterceptors() {
    this.axiosInstance.interceptors.request.use((config) => {
      config.headers = {
        ...config.headers,
        // ...
      }
      // console.log(config, 'config')
      return config
    })

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse<Result>) => {
        console.log(response, 'response')
        try {
          if (response.status === StatusCode.SUCCESS) {
            if (response.data?.rspCode === RspCode.SUCCESS) {
              return Promise.resolve(response.data.data)
            } else {
              return Promise.reject('ERROR')
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
        return Promise.reject(err.message)
      }
    )
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<Result<T>>(config)
        .then((res: AxiosResponse<Result>) => {
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

  post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({
      ...config,
      method: 'POST',
    })
  }

  get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return this.request({
      ...config,
      method: 'GET',
    })
  }
}
