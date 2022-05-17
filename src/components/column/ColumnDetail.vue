<template>
  <div class="column-detail-page w-75 mx-auto">
    <div class="column-info row mb-4 border-bottom pb-4 align-items-center">
      <div class="col-3 text-center">
        <img
          :src="column ? column.avatar : ''"
          :alt="column ? column.title : ''"
          class="rounded-circle w-50 border"
        />
      </div>
      <div class="col-9">
        <h3>{{ column && column.title }}</h3>
        <p class="text-muted">{{ column && column.description }}</p>
      </div>
    </div>
  </div>
  <PostList :list="postList" />
</template>

<script lang="ts">
import { defineComponent, onMounted, computed, ref, Ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalProps } from '@/dtypes'
import PostList from '@/components/post/PostList.vue'
import { getColumnById } from '@/apis/columns'
import { ColumnProps } from '@/dtypes'

export interface PostProps {
  id: number
  title: string
  content: string
  image?: string
  createdAt: string
  columnId: number
}

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
    const column: Ref<ColumnProps | null> = ref(null)
    // const postList: Ref<PostProps[]> = ref([])
    // TIP 使用计算数学获取 getters
    onMounted(async () => {
      const columnResult = await getColumnById(currentColumnId)
      column.value = columnResult.data
      store.dispatch('getPosts', currentColumnId)
    })
    console.log(11)
    const postList = computed(() => store.state.posts)
    return {
      route,
      column,
      postList,
    }
  },
})
</script>
