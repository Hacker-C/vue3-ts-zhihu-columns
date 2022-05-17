import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store/index'

import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import ColumnDetail from '@/components/column/ColumnDetail.vue'
import CreatePost from '@/components/post/CreatePost.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      redirectAlreadyLogin: true,
    },
  },
  {
    path: '/column/:id',
    name: 'column',
    component: ColumnDetail,
  },
  {
    path: '/post',
    name: 'post',
    component: CreatePost,
    meta: {
      requireLogin: true,
    },
  },
]

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireLogin && !store.state.user.isLogin) {
    // 用户未登录，如果访问需要登录权限的路由，则跳转到登录界面
    next({ name: 'login' })
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    // 用户已登录，再次访问登录界面，就跳转到主页
    next('/')
  } else {
    next()
  }
})

export default router
