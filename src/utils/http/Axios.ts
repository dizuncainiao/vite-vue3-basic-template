import axios from 'axios'
// import qs from 'qs'
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
  }

  initInterceptors() {
    this.axiosInstance.interceptors.request.use(function () {})
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
