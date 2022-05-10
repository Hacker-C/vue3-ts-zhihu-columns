import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import ColumnList from '../components/column/ColumnList.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'home', component: Home },
  { path: '/login', name: 'login', component: Login },
  { path: '/column', name: 'column', component: ColumnList },
]

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: routes,
})

export default router
