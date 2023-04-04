import { HttpAxiosConfig } from './types'

export function defineConfig<T, U>(
  config: HttpAxiosConfig<T, U>
): HttpAxiosConfig<T, U> {
  return config
}
