import types from './mutations-types'
import { GlobalProps } from '.'
import { ActionContext } from 'vuex'
import { PostProps } from '@/testData'

type g = GlobalProps

export default {
  newPost(context: ActionContext<g, g>, post: PostProps): void {
    context.commit(types.POST, post)
  },
}
