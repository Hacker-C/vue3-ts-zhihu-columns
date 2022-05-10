<template>
  <div class="col-3 mb-3" :key="column.id">
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
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { ColumnProps } from './ColumnList.vue'

export default defineComponent({
  name: 'ClolumnItem',
  props: {
    column: {
      type: Object as PropType<ColumnProps>,
      required: true,
    },
  },
})
</script>
