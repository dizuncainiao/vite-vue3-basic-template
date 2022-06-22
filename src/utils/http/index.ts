import VAxios from './Axios'
import { BASE_URL } from './config'

export const request = new VAxios({
  baseURL: BASE_URL,
})
