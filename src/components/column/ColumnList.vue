<template>
  <div class="row">
    <ClolumnItem v-for="item in columns" :column="item" :key="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onBeforeMount } from 'vue'
import { getAllColumns, getColumnById } from '@/apis/columns'

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
    // TODO 请求数据
    const columns = ref([])
    onBeforeMount(async () => {
      const res = await getAllColumns()
      columns.value = res.data
    })

    return {
      columns,
    }
  },
})
</script>

<style scoped></style>
