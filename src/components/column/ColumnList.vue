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
import { testData } from '@/testData'

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
    // TEST 测试数据
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
