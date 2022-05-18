<template>
  <Progress />
  <div class="container">
    <GlobalHeader :user="curretnUser" />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { GlobalProps } from '@/store'
import 'bootstrap/dist/css/bootstrap.min.css'

import GlobalHeader from './components/GlobalHeader.vue'
import Progress from './components/common/Progress.vue'
import Footer from './components/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    GlobalHeader,
    Progress,
    Footer,
  },
  setup() {
    const store = useStore<GlobalProps>()
    const curretnUser = computed(() => store.state.user)
    const isLoading = computed(() => store.state.loading)
    return {
      curretnUser,
      isLoading,
    }
  },
})
</script>
