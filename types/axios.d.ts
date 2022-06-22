export interface Result<T = any> {
  rspCode: number
  rspMsg: string
  data: T
}
