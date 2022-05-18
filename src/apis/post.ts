import request from './request'
import { PostProps } from '@/dtypes'
import { R } from '@/dtypes'

const getPostsById = async (coloumnId: number): R<PostProps[]> => {
  const results = await request({
    url: `columns/${coloumnId}/posts`,
    method: 'GET',
  })
  return results
}

const getAllPosts = async (): R<PostProps[]> => {
  const posts = await request({
    url: '/posts',
    method: 'GET',
  })
  return posts
}

export { getPostsById, getAllPosts }
