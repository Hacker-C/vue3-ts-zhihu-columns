<template>
  <div class="row">
    <ClolumnItem
      v-for="item in finalColumnList"
      :column="item"
      :key="item.id"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import ClolumnItem from './ClolumnItem.vue'

export interface ColumnProps {
  id: number
  title: string
  avatar?: string
  description: string
}

export default defineComponent({
  name: 'ColumnList',
  components: {
    ClolumnItem,
  },
  setup() {
    const testData: ColumnProps[] = [
      {
        id: 1,
        title: '专栏测试test1',
        description: '这是test1专栏，介绍vue3的的各种特性，非常有意思',
        avatar:
          'https://cdn.jsdelivr.net/gh/Hacker-C/Picture-Bed@main/icons/vuejs.png',
      },
      {
        id: 2,
        title: '专栏测试test1',
        description: '这是test1专栏，介绍vue3的的各种特性，非常有意思',
        avatar:
          'https://cdn.jsdelivr.net/gh/Hacker-C/Picture-Bed@main/icons/vuejs.png',
      },
      {
        id: 3,
        title: '专栏测试test1',
        description: '这是test1专栏，介绍vue3的的各种特性，非常有意思',
        avatar:
          'https://cdn.jsdelivr.net/gh/Hacker-C/Picture-Bed@main/icons/vuejs.png',
      },
      {
        id: 4,
        title: '专栏测试test1',
        description: '这是test1专栏，介绍vue3的的各种特性，非常有意思',
      },
    ]
    const finalColumnList = computed(() => {
      return testData?.map(column => {
        if (!column.avatar) {
          column.avatar = require('@/assets/column.png')
        }
        return column
      })
    })
    return {
      finalColumnList,
    }
  },
})
</script>

<style scoped></style>
