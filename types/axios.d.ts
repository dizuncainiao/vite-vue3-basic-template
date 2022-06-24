export interface ResponseResult<T = any> {
  rspCode: number
  rspMsg: string
  data: T
}
