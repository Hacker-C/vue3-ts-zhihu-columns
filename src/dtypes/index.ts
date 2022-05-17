import { AxiosResponse } from 'axios'

export type R<T> = Promise<AxiosResponse<T>>

export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
}

export interface GlobalProps {
  // columns: ColumnProps[]
  posts: PostProps[]
  user: UserProps
}

export interface ColumnProps {
  id: number
  title: string
  avatar?: string
  description: string
}

export interface PostProps {
  id: number
  title: string
  content: string
  image?: string
  createdAt: string
  columnId: number
}
