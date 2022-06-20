import VAxios from './Axios'
import { BASE_URL } from './config'

export const requset = new VAxios({
  baseURL: BASE_URL,
})
