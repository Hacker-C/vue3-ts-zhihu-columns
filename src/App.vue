<template>
  <div class="container">
    <GlobalHeader :user="curretnUser" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalProps } from './store'
import 'bootstrap/dist/css/bootstrap.min.css'

import GlobalHeader from './components/GlobalHeader.vue'

import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Footer,
  },
  setup() {
    const store = useStore<GlobalProps>()
    const curretnUser = store.state.user
    return {
      curretnUser,
    }
  },
})
</script>

<style></style>
