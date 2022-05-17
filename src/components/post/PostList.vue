<template>
  <div class="post-list w-75 mx-auto">
    <article
      v-for="post in list"
      :key="post.id"
      class="card-body mb-3 shadow-sm border"
    >
      <h4>{{ post.title }}</h4>
      <div class="row my-3 align-items-center">
        <div class="col-3 text-center" v-if="post.image">
          <img :src="post.image" :alt="post.title" class="rounded-lg w-50" />
        </div>
        <p :class="{ 'col-9': post.image }">{{ post.content }}</p>
      </div>
      <span class="text-muted">{{ post.createdAt.slice(0, 10) }}</span>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PostProps } from '@/dtypes'

export default defineComponent({
  name: 'PostList',
  props: {
    list: Array as PropType<PostProps[]>,
  },
})
</script>
