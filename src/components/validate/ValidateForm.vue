<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm">
      <slot name="submit">
        <button type="button" class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'

type validateFunc = () => boolean
type Events = {
  // 事件类型: 方法参数
  'form-item-created': validateFunc
}
export const emitter = mitt<Events>()

export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup(props, context) {
    // FEAT 点击提交验证是否通过格式验证
    const submitForm = () => {
      let res = validateArr.map(func => func()).every(Boolean)
      context.emit('form-submit', res)
    }

    // FEAT 组件通信，传送各个表单字段是否验证通过
    let validateArr: validateFunc[] = []
    // 把带着验证结果的函数存到数组中
    const callback = (e: validateFunc) => {
      validateArr.push(e)
    }
    emitter.on('form-item-created', callback)
    onUnmounted(() => {
      emitter.off('form-item-created', callback)
    })
    return {
      submitForm,
    }
  },
})
</script>

<style scoped></style>
