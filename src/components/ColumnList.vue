<template>
  <div class="row">
    <div class="col-3 mb-3" v-for="column in finalColumnList" :key="column.id">
      <div class="card h-100 shadow-sm">
        <div class="text-center">
          <img
            :src="column.avatar"
            :alt="column.title"
            class="rounded-circle border w-25 my-3"
          />
        </div>
        <div class="card-body text-center">
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text text-left">
            {{ column.description }}
          </p>
          <a href="#" class="btn btn-outline-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

export interface ColumnProps {
  id: number
  title: string
  avatar?: string
  description: string
}

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
    },
  },
  setup(props) {
    const finalColumnList = computed(() => {
      return props.list?.map(column => {
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
