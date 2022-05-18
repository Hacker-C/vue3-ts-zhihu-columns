<template>
  <teleport to="#loading">
    <div
      class="d-flex justify-content-center align-items-center h-100 loading-container"
      :style="{ background: background }"
    >
      <div class="loading-content">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">{{ text }}</span>
        </div>
        <p v-if="text" class="text-primary small">{{ text }}</p>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'

export default defineComponent({
  name: 'Loader',
  props: {
    text: {
      type: String,
      default: '',
    },
    background: {
      type: String,
    },
  },
  setup() {
    // const node = document.createElement('div')
    // node.id = 'loading'
    // document.body.appendChild(node)
    onUnmounted(() => {
      // document.body.removeChild(node)
    })
  },
})
</script>

<style scoped>
.loading-container {
  /* background: rgba(255, 255, 255, 0.5); */
  z-index: 999;
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  text-align: center;
}
</style>
