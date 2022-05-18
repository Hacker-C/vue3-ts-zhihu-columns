<template>
  <div class="row">
    <ClolumnItem v-for="item in columns" :column="item" :key="item.id" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import store from '@/store'
import ClolumnItem from './ClolumnItem.vue'
import { computed } from '@vue/reactivity'

export default defineComponent({
  name: 'ColumnList',
  components: {
    ClolumnItem,
  },
  setup() {
    // FEAT 分发 action ，触发网络请求
    onMounted(() => {
      store.dispatch('getAllColumns')
    })
    // TIP 从 state 中获取数据
    const columns = computed(() => store.state.columns)
    return {
      columns,
    }
  },
})
</script>

<style scoped></style>
