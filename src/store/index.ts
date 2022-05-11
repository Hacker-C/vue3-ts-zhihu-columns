import { createStore } from 'vuex'
import { testData, testPosts, PostProps, ColumnProps } from '@/testData'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
}

export interface GlobalProps {
  columns: ColumnProps[]
  posts: PostProps[]
  user: UserProps
}

//TIP 传入泛型参数获得属性提示
const store = createStore<GlobalProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: true, name: 'murphy chen' },
  },
  mutations,
  getters,
  actions,
})

export default store
