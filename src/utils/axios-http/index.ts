import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { CreateAxiosDefaults } from 'axios'

type ResponseDataWrapper<T = any> = {
  data: T
  code: number
  msg: string
}

export default class AxiosHttp {
  private readonly axiosInstance: AxiosInstance

  constructor(config: CreateAxiosDefaults) {
    this.axiosInstance = axios.create(config)
    this.initInterceptors()
  }

  initInterceptors() {
    this.axiosInstance.interceptors.request.use(
      config => {
        return config
      },
      error => {
        return Promise.reject(error)
      }
    )

    this.axiosInstance.interceptors.response.use(config => {
      // 状态 200 且 data 正常有值
      if (config.status === 200 && config.data) {
        // config 作为接口的返回数据，可以根据后端接口数据的状态码继续细分 resolve reject
        return Promise.resolve(config)
      } else {
        return Promise.reject(`${config.statusText}: Bad Request!`)
      }
    })
  }

  request<T = any, R = ResponseDataWrapper<T>>(config: AxiosRequestConfig) {
    return new Promise<R>((resolve, reject) => {
      this.axiosInstance
        .request<R>(config)
        .then(res => resolve(res.data))
        .catch(err => reject(err))
    })
  }

  post<T = any>(
    url: string,
    data: Record<string, any> = {},
    config: AxiosRequestConfig = {}
  ) {
    config = {
      ...config,
      url,
      data,
      method: 'POST'
    }
    return this.request<T>(config)
  }

  postForm<T = any, R = ResponseDataWrapper<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    return new Promise<R>(() => {
      this.axiosInstance
        .postForm<R>(url, data, config)
        .then(res => {
          return res.data
        })
        .catch(err => {
          return err
        })
    })
  }

  postJson<T = any, R = ResponseDataWrapper<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    return new Promise<R>((resolve, reject) => {
      config = {
        ...config,
        headers: {
          'Content-Type': 'application/json'
        }
      }
      this.axiosInstance
        .post<R>(url, data, config)
        .then(res => {
          return resolve(res.data)
        })
        .catch(err => {
          return reject(err)
        })
    })
  }

  get<T = any>(
    url: string,
    params: Record<string, any> = {},
    config: AxiosRequestConfig = {}
  ) {
    config = {
      ...config,
      url,
      params,
      method: 'GET'
    }
    return this.request<T>(config)
  }
}
