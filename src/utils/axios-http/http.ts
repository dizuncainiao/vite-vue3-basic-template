import axios, { AxiosRequestConfig, AxiosInstance } from 'axios'
import { CreateAxiosDefaults } from 'axios'
import qs from 'qs'

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

  post<T = any>(
    url: string,
    data: Record<string, any> = {},
    config: AxiosRequestConfig = {}
  ) {
    config = {
      url,
      data,
      method: 'POST',
      // 使外部调用传入的 config 优先级最高
      ...config
    }
    return this.request<T>(config)
  }

  postForm<T = any>(
    url: string,
    data: Record<string, any> = {},
    config: AxiosRequestConfig = {}
  ) {
    config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      url,
      data,
      method: 'POST',
      ...config
    }
    return this.request<T>(config)
  }

  postJson<T = any>(
    url: string,
    data: Record<string, any> = {},
    config: AxiosRequestConfig = {}
  ) {
    config = {
      headers: {
        'Content-Type': 'application/json'
      },
      url,
      data,
      method: 'POST',
      ...config
    }
    return this.request<T>(config)
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
      ...config,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }

    const data = { [fieldName]: file }
    return this.post(url, data, config)
  }
}
