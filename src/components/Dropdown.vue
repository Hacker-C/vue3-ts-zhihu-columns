<template>
  <div class="dropdown" ref="dropdownRef">
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
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'

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

    // FEAT 点击下拉菜单以外的地方关闭
    const dropdownRef = ref<null | HTMLElement>(null)
    const handler = (e: MouseEvent) => {
      /*
       * e.target 返回的是当前响应事件的元素
       * 1、dropdown 节点包含 e.target，说明是在下拉菜单里面点的
       * 2、dropdown 节点不含 e.target ，说明在外面点击的，就关闭下拉菜单
       */
      if (dropdownRef.value) {
        if (
          !dropdownRef.value.contains(e.target as HTMLElement) &&
          isOpen.value
        ) {
          isOpen.value = false
        }
      }
    }
    onMounted(() => {
      document.addEventListener('click', handler)
    })
    onUnmounted(() => {
      document.removeEventListener('click', handler)
    })

    return {
      isOpen,
      onToggle,
      dropdownRef,
    }
  },
})
</script>
