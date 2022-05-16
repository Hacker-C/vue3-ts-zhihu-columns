import axios from 'axios'
import { Method, AxiosRequestConfig, AxiosResponse } from 'axios'

export default function request(option: AxiosRequestConfig) {
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
