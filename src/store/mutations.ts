import { LOGIN, LOGOUT } from './mutations-types'
import { GlobalProps } from './index'
export default {
  [LOGIN](state: GlobalProps): void {
    state.user = { ...state.user, isLogin: true, name: 'murphychen' }
  },
  [LOGOUT](state: GlobalProps): void {
    state.user.isLogin = false
  },
}
