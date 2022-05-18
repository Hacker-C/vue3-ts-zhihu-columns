import types from './mutations-types'
import { GlobalProps } from '@/dtypes'
import { ActionContext } from 'vuex'
import { PostProps } from '@/dtypes'
import { getAllPosts, getPostsById } from '@/apis/post'
import { getAllColumns } from '@/apis/columns'

type g = GlobalProps

export default {
  async getPosts(
    context: ActionContext<g, g>,
    coloumnId: number,
  ): Promise<void> {
    try {
      const posts = await getPostsById(coloumnId)
      posts.data &&
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

  async getAllColumns(context: ActionContext<g, g>): Promise<void> {
    const results = await getAllColumns()
    results.data.forEach(obj => {
      if (!obj.avatar || obj.avatar?.length === 0) {
        obj.avatar = require('@/assets/column.png')
      }
    })
    if (results.data?.length) {
      context.commit(types.GET_COLUMNS, results.data)
    }
  },

  async getAllPosts(context: ActionContext<g, g>): Promise<void> {
    const posts = await getAllPosts()
    context.commit(types.GET_POSTS, posts)
  },
}
