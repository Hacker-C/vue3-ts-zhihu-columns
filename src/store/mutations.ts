import types from './mutations-types'
import { GlobalProps } from '@/dtypes'
import { PostProps } from '@/dtypes'
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
}
