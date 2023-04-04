import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import qs from 'qs'
import { HttpAxiosConfig, InterceptorsType } from './types'

export default class AxiosHttp {
  private readonly axiosInstance: AxiosInstance
  private _requestInterceptor: number | null = null
  private _responseInterceptor: number | null = null

  constructor(httpAxiosConfig: HttpAxiosConfig) {
    this.axiosInstance = axios.create(httpAxiosConfig.config)
    // this.initInterceptors(httpAxiosConfig.interceptors)
  }

  // initInterceptors(interceptorsConfig: HttpAxiosConfig['interceptors']) {
  //   const { request, response } = interceptorsConfig
  //
  //   this._requestInterceptor = this.axiosInstance.interceptors.request.use(
  //     request.onFulfilled,
  //     request.onRejected
  //   )
  //   this._responseInterceptor = this.axiosInstance.interceptors.response.use(
  //     response.onFulfilled,
  //     response.onRejected
  //   )
  // }

  ejectInterceptors(type: InterceptorsType) {
    this.axiosInstance.interceptors[type].eject(
      this[`_${type}Interceptor`] as number
    )
  }

  get<T = any>(url: string, config?: AxiosRequestConfig) {
    return new Promise<T>((resolve, reject) => {
      this.axiosInstance
        .get<T>(url, config)
        .then(res => {
          return resolve(res as T)
        })
        .catch(err => {
          return reject(err)
        })
    })
  }

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return new Promise<T>((resolve, reject) => {
      this.axiosInstance
        .post<T>(url, data, config)
        .then(res => {
          return resolve(res as T)
        })
        .catch(err => {
          return reject(err)
        })
    })
  }

  postForm<T = any>(url: string, data?: any, config?: AxiosRequestConfig) {
    return new Promise<T>((resolve, reject) => {
      this.axiosInstance
        .postForm<T>(url, data, config)
        .then(res => {
          return resolve(res as T)
        })
        .catch(err => {
          return reject(err)
        })
    })
  }

  download(url: string, params: Record<string, any>) {
    window.open(
      `${url}${params ? '?'.concat(qs.stringify(params)) : ''}`,
      '_blank'
    )
  }

  upload(
    url: string,
    file: File,
    fieldName = 'file',
    config?: AxiosRequestConfig
  ) {
    config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      ...config
    }

    const data = { [fieldName]: file }
    return this.post(url, data, config)
  }

  get getInstance() {
    return this.axiosInstance
  }
}
