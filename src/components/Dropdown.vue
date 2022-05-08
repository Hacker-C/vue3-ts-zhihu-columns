<template>
  <div class="dropdown">
    <button
      class="btn btn-primary border dropdown-toggle"
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
      @click="onToggle"
    >
      {{ title }}
    </button>
    <ul
      class="dropdown-menu"
      :style="{ display: isOpen ? 'block' : 'none' }"
      aria-labelledby="dropdownMenuButton1"
    >
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    // FEAT 点击开启关闭下拉菜单
    const isOpen = ref(false)
    const onToggle = () => {
      isOpen.value = !isOpen.value
    }
    return {
      isOpen,
      onToggle,
    }
  },
})
</script>
