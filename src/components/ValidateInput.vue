<template>
  <div class="validate-input-container pb-3">
    <input
      class="form-control"
      :class="{
        'is-invalid': inputRef.error,
        'is-valid': !inputRef.error && isClicked,
      }"
      @blur="validateInput"
      :value="inputRef.val"
      @input="updateValue"
      v-bind="$attrs"
    />
    <div v-if="!inputRef.error && isClicked" class="valid-feedback">
      格式正确
    </div>
    <div v-if="inputRef.error" class="invalid-feedback">
      {{ inputRef.message }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, ref } from 'vue'

interface RuleProp {
  type: 'required' | 'email'
  message: string
}
const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

export type RulesProp = RuleProp[]

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: Array as PropType<RulesProp>,
    modelValue: String,
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const isClicked = ref(false)
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: '',
    })

    const updateValue = (e: Event) => {
      const targetValue = (e.target as HTMLInputElement).value
      inputRef.val = targetValue
      context.emit('update:modelValue', targetValue)
    }

    const validateInput = () => {
      isClicked.value = true
      if (props.rules) {
        const allPassed = props.rules.every(rule => {
          let passed = true
          inputRef.message = rule.message
          switch (rule.type) {
            case 'required':
              passed = inputRef.val.trim() !== ''
              break
            case 'email':
              passed = emailReg.test(inputRef.val.trim())
              break
            default:
              break
          }
          return passed
        })
        inputRef.error = !allPassed
      }
    }

    return {
      inputRef,
      validateInput,
      isClicked,
      updateValue,
    }
  },
})
</script>

<style scoped></style>
