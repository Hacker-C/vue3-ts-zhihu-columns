<template>
  <div
    v-if="pgValue <= 100"
    class="progress"
    style="height: 3px; width: 100%; z-index: 99; position: fixed; top: 0"
  >
    <div
      class="progress-bar progress-bar-striped progress-bar-animated bg-info"
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      :style="{ width: pgValue + '%' }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import store from '@/store'

export default defineComponent({
  name: 'Progress',
  setup() {
    const pgValue = computed(() => store.state.progressValue)
    return {
      pgValue,
    }
  },
})
</script>

<style scoped></style>
