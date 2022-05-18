import types from './mutations-types'
import { GlobalProps } from '@/dtypes'
import { ActionContext } from 'vuex'
import { PostProps } from '@/dtypes'
import { getPostsById } from '@/apis/post'

type g = GlobalProps

export default {
  async getPosts(
    context: ActionContext<g, g>,
    coloumnId: number,
  ): Promise<void> {
    try {
      const posts = await getPostsById(coloumnId)
      posts.data.forEach(obj => {
        if (!obj.image || obj.image.length === 0) {
          obj.image = require('@/assets/post.png')
        }
      })
      context.commit(types.INIT_POSTS, posts.data)
    } catch (e) {
      console.log('404 not found')
    }
  },
  newPost(context: ActionContext<g, g>, post: PostProps): void {
    context.commit(types.POST, post)
  },
}
