import { ref, onMounted, onUnmounted, Ref } from 'vue'

// TIP 传入一个 Node/HTMLElement 不行，在 setup 中无法监控到，也就失去了响应式
// TIP 所以传入的参数应该是一个 Ref 的类型
export default function useClickOutside(
  elmentRef: Ref<null | HTMLElement>,
): Ref {
  const isClickOutside = ref(false)
  // TIP 点击回调事件
  const handler = (e: MouseEvent) => {
    /* 核心原理
     * e.target 返回的是当前响应事件的元素
     * 1、dropdown 节点包含 e.target，说明是在下拉菜单里面点的
     * 2、dropdown 节点不含 e.target ，说明在外面点击的，就关闭下拉菜单
     */
    if (elmentRef.value) {
      // 类型不吻合，这里需要 as 断言
      if (!elmentRef.value.contains(e.target as HTMLElement)) {
        isClickOutside.value = false
      } else {
        isClickOutside.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
  // TIP 最后返回这个 ref<boolean>
  return isClickOutside
}
