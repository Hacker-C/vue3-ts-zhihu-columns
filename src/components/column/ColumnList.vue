<template>
  <div class="row">
    <ClolumnItem v-for="item in columns" :column="item" :key="item.id" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref, onBeforeMount } from 'vue'
import { getAllColumns } from '@/apis/columns'

import ClolumnItem from './ClolumnItem.vue'
import { ColumnProps } from '@/dtypes'

// export interface ColumnProps {
//   id: number
//   title: string
//   avatar?: string
//   description: string
// }

export default defineComponent({
  name: 'ColumnList',
  components: {
    ClolumnItem,
  },
  setup() {
    // TODO 请求数据
    const columns: Ref<ColumnProps[]> = ref([])
    onBeforeMount(async () => {
      const res = await getAllColumns()
      res.data.forEach(obj => {
        if (!obj.avatar || obj.avatar?.length === 0) {
          obj.avatar = require('@/assets/column.png')
        }
      })
      columns.value = res.data
    })
    return {
      columns,
    }
  },
})
</script>

<style scoped></style>
