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
import { useStore } from 'vuex'

import ClolumnItem from './ClolumnItem.vue'
import { GlobalProps } from '@/store'

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
    const store = useStore<GlobalProps>()
    const testData = store.state.columns
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
