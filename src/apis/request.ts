import axios, { AxiosPromise, AxiosRequestConfig } from 'axios'
import store from '@/store'
import types from '@/store/mutations-types'

export default function request(option: AxiosRequestConfig): AxiosPromise {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 5000,
  })

  // TIP 请求拦截器
  instance.interceptors.request.use(config => {
    store.state.progressValue = 0
    const timer = setInterval(() => {
      store.commit(types.ADD_LOADING, 8)
      if (store.state.progressValue > 100) {
        clearInterval(timer)
      }
    }, 100)
    return config
  })

  // TIP 响应拦截器
  instance.interceptors.response.use(
    response => {
      return response.data
    },
    error => {
      console.log(error)
    },
  )

  return instance(option)
}
