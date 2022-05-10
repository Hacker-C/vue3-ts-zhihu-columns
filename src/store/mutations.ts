import { LOGIN, LOGOUT } from './mutations-types'
import { GlobalProps } from './index'
export default {
  [LOGIN](state: GlobalProps): void {
    state.user.isLogin = true
  },
  [LOGOUT](state: GlobalProps): void {
    state.user.isLogin = false
  },
}
