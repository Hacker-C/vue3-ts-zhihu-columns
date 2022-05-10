<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-3 text-center">
        <img
          :src="column?.avatar"
          :alt="column?.title"
          class="rounded-circle w-50 border"
        />
      </div>
      <div class="col-9">
        <h3>{{ column?.title }}</h3>
        <p class="text-muted">{{ column?.description }}</p>
      </div>
    </div>
  </div>
  <PostList :list="postList" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalProps } from '@/store'
import { testData, testPosts } from '@/testData'
import PostList from '@/components/post/PostList.vue'

export default defineComponent({
  name: 'ColumnDetail',
  components: {
    PostList,
  },
  setup() {
    // TODO 获取本专栏(传入columnId)的所有文章
    const route = useRoute()
    const store = useStore<GlobalProps>()
    const currentColumnId = +route.params.id
    const column = testData.find(column => column.id === currentColumnId)
    const postList = store.state.posts.filter(
      post => post.columnId === currentColumnId,
    )
    return {
      route,
      column,
      postList,
    }
  },
})
</script>

<style scoped></style>
