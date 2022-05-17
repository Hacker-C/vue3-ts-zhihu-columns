import { createStore } from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import { GlobalProps } from '@/dtypes'

//TIP 传入泛型参数获得属性提示
const store = createStore<GlobalProps>({
  state: {
    posts: [],
    user: { isLogin: true, name: 'murphy chen' },
  },
  mutations,
  getters,
  actions,
})

export default store
