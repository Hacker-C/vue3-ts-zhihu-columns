<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4">
    <div class="container-fluid">
      <router-link class="navbar-brand" href="javascript:;" to="/"
        >知乎专栏</router-link
      >
      <ul v-if="!user.isLogin" class="list-inline mb-0">
        <li class="list-inline-item">
          <a class="btn btn-outline-light" @click="login">登录</a>
        </li>
        <li class="list-inline-item">
          <a href="#" class="btn btn-outline-light">注册</a>
        </li>
      </ul>
      <ul v-else class="list-inline mb-0">
        <li class="list-inline-item">
          <Dropdown :title="`你好，${user.name}`">
            <DropdownItem>
              <a class="dropdown-item" href="#" @click="post">新建文章</a>
            </DropdownItem>
            <DropdownItem disabled>
              <a class="dropdown-item" href="#">编辑资料</a>
            </DropdownItem>
            <DropdownItem>
              <a class="dropdown-item" href="#" @click="logout">退出登录</a>
            </DropdownItem>
          </Dropdown>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import types from '@/store/mutations-types'
import Dropdown from './daropdown/Dropdown.vue'
import DropdownItem from './daropdown/DropdownItem.vue'

export interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
}

export default defineComponent({
  name: 'GlobalHeader',
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  components: {
    Dropdown,
    DropdownItem,
  },
  setup() {
    const router = useRouter()
    const login = () => {
      router.push('/login')
    }
    const store = useStore()
    const logout = () => {
      store.commit(types.LOGOUT)
    }
    const post = () => {
      router.push('/post')
    }
    return {
      login,
      logout,
      post,
    }
  },
})
</script>
