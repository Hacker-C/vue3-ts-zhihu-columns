<template>
  <div class="post-list w-75 mx-auto">
    <article
      v-for="post in finalPostList"
      :key="post.id"
      class="card-body mb-3 shadow-sm border"
    >
      <h4>{{ post.title }}</h4>
      <div class="row my-3 align-items-center">
        <div class="col-3" v-if="post.image">
          <img :src="post.image" :alt="post.title" class="rounded-lg w-25" />
        </div>
        <p :class="{ 'col-9': post.image }">{{ post.content }}</p>
      </div>
      <span class="text-muted">{{ post.createdAt }}</span>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { PostProps } from '@/testData'

export default defineComponent({
  name: 'PostList',
  props: {
    list: Array as PropType<PostProps[]>,
  },
  setup(props) {
    const finalPostList: PostProps[] | undefined = props.list?.map(item => {
      if (!item.image) {
        item.image = require('@/assets/post.png')
      }
      return item
    })
    return {
      finalPostList,
    }
  },
})
</script>
