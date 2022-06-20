import { requset } from '@/utils/http'

export const login = requset.post({ url: 'main/login.do' })
