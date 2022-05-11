import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import ColumnDetail from '@/components/column/ColumnDetail.vue'
import CreatePost from '@/components/post/CreatePost.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/column/:id', name: 'column', component: ColumnDetail },
  { path: '/post', name: 'post', component: CreatePost },
]

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: routes,
})

export default router
