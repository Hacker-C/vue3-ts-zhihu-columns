import axios, { AxiosPromise } from 'axios'
import { AxiosRequestConfig } from 'axios'

export default function request(option: AxiosRequestConfig): AxiosPromise {
  const instance = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 5000,
  })

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
