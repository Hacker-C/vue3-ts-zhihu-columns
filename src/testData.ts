// TIP 每一个专栏
export interface ColumnProps {
  id: number
  title: string
  avatar?: string
  description: string
}

// TIP 专栏中的每篇文章
export interface PostProps {
  id: number
  title: string
  content: string
  image?: string
  createdAt: string
  columnId: number
}

export interface UserProps {
  isLogin: boolean
  username?: string
  id?: number
}

export const testData: ColumnProps[] = [
  {
    id: 1,
    title: '专栏测试test1',
    description: '这是test1专栏，介绍vue3的的各种特性，非常有意思',
    avatar:
      'https://cdn.jsdelivr.net/gh/Hacker-C/Picture-Bed@main/icons/vuejs.png',
  },
  {
    id: 2,
    title: '专栏测试test1',
    description: '这是test1专栏，介绍vue3的的各种特性，非常有意思',
    avatar:
      'https://cdn.jsdelivr.net/gh/Hacker-C/Picture-Bed@main/icons/vuejs.png',
  },
  {
    id: 3,
    title: '专栏测试test1',
    description: '这是test1专栏，介绍vue3的的各种特性，非常有意思',
    avatar:
      'https://cdn.jsdelivr.net/gh/Hacker-C/Picture-Bed@main/icons/vuejs.png',
  },
  {
    id: 4,
    title: '专栏测试test1',
    description: '这是test1专栏，介绍vue3的的各种特性，非常有意思',
  },
]

export const testPosts: PostProps[] = [
  {
    id: 1,
    title: 'vue3学习笔记',
    content:
      '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
    createdAt: '2022-5-10',
    columnId: 1,
  },
  {
    id: 2,
    title: 'vue3学习笔记',
    content:
      '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
    createdAt: '2022-5-10',
    columnId: 1,
  },
  {
    id: 3,
    title: 'vue3学习笔记',
    content:
      '测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据测试数据',
    createdAt: '2022-5-10',
    columnId: 2,
  },
]

export const curretnUser: UserProps = {
  isLogin: false,
  username: 'murphy chen',
  id: 1,
}
