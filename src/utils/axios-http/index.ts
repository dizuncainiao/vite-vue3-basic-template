import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { CreateAxiosDefaults } from 'axios'

type ResponseDataWrapper<T = any> = {
  data: T
  rspCode: number
  rspMsg: string
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
        // config.data 作为接口的返回数据，可以根据后端接口数据的状态码继续细分 resolve reject
        return Promise.resolve(config.data)
      } else {
        return Promise.reject(`${config.statusText}: Bad Request!`)
      }
    })
  }

  post<T = any, R = ResponseDataWrapper<T>>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) {
    return new Promise<R>((resolve, reject) => {
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

  get<T = any, R = ResponseDataWrapper<T>>(
    url: string,
    params: Record<string, any> = {},
    config: AxiosRequestConfig = {}
  ) {
    config = {
      ...config,
      params
    }
    return new Promise<R>((resolve, reject) => {
      this.axiosInstance
        .get<R>(url, config)
        .then(res => {
          return resolve(res.data)
        })
        .catch(err => {
          return reject(err)
        })
    })
  }
}
