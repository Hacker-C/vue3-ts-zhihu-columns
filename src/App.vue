<template>
  <div class="container">
    <GlobalHeader :user="curretnUser" />
    <router-link to="/home">主页</router-link>
    <router-link to="/login">登录</router-link>
    <router-link to="/column">专栏</router-link>
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'

import Footer from './components/Footer.vue'

const curretnUser: UserProps = {
  isLogin: true,
  username: 'murphy chen',
  id: 1,
}

export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    Footer,
  },
  setup() {
    return {
      curretnUser,
    }
  },
})
</script>

<style></style>
