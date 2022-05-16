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
import { defineComponent, computed, onBeforeMount, ref, Ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { GlobalProps } from '@/store'
import PostList from '@/components/post/PostList.vue'
import { getColumnById } from '@/apis/columns'
import { ColumnProps } from '@/testData'

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
    // TIP 使用计算数学获取 getters
    onBeforeMount(async () => {
      const result = await getColumnById(currentColumnId)
      console.log(result)
      column.value = result.data
    })
    const postList = computed(() => store.getters.getPostById(currentColumnId))
    return {
      route,
      column,
      postList,
    }
  },
})
</script>

<style scoped></style>
