<template>
  <div class="row text-center">
    <div class="align-items-center">
      <img class="w-50" src="@/assets/write.png" alt="" />
    </div>
    <h5>随心写作，自由表达</h5>
  </div>
  <div class="text-center mb-4">
    <button class="btn btn-primary" @click="post">开始写文章</button>
  </div>
  <h5 class="text-center">发现精彩</h5>
  <ColumnList />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ColumnList from './column/ColumnList.vue'

export default defineComponent({
  name: 'Home',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const post = () => {
      router.push('/post')
    }
    return {
      route,
      post,
    }
  },
  components: {
    ColumnList,
  },
})
</script>

<style scoped></style>
