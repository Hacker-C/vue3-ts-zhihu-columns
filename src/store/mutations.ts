import types from './mutations-types'
import { GlobalProps } from './index'
import { ColumnProps, PostProps } from '@/dtypes'
export default {
  [types.LOGIN](state: GlobalProps): void {
    state.user = { ...state.user, isLogin: true, name: 'murphychen' }
  },
  [types.LOGOUT](state: GlobalProps): void {
    state.user.isLogin = false
  },
  [types.POST](state: GlobalProps, post: PostProps): void {
    state.posts.push(post)
  },
  [types.INIT_POSTS](state: GlobalProps, posts: PostProps[]): void {
    state.posts = posts
  },
  [types.ADD_LOADING](state: GlobalProps, v: number): void {
    if (state.progressValue <= 100) state.progressValue += v
  },
  [types.GET_COLUMNS](state: GlobalProps, columns: ColumnProps[]): void {
    state.columns = columns
  },
  [types.GET_POSTS](state: GlobalProps, posts: PostProps[]): void {
    state.posts = posts
  },
}
