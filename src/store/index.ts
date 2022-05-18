import { createStore, Store } from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import { PostProps, UserProps, ColumnProps } from '@/dtypes'

export interface GlobalProps {
  progressValue: number
  loading: boolean
  posts: PostProps[]
  user: UserProps
  columns: ColumnProps[]
}

//TIP 传入泛型参数获得属性提示
const store: Store<GlobalProps> = createStore<GlobalProps>({
  state: {
    progressValue: 0,
    loading: false,
    posts: [],
    columns: [],
    user: { isLogin: true, name: 'murphy chen' },
  },
  mutations,
  getters,
  actions,
})

export default store
