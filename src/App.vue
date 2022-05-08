<template>
  <div class="container">
    <GlobalHeader :user="curretnUser" />
    <ColumnList :list="testData" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'

const curretnUser: UserProps = {
  isLogin: true,
  username: 'murphy chen',
  id: 1,
}

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

export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
  },
  setup() {
    return {
      testData,
      curretnUser,
    }
  },
})
</script>

<style></style>
