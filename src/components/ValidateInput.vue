<template>
  <div class="validate-input-container pb-3">
    <input
      type="text"
      class="form-control"
      :class="{
        'is-invalid': inputRef.error,
        'is-valid': !inputRef.error && isClicked,
      }"
      v-model="inputRef.val"
      @blur="validateInput"
    />
    <div v-if="!inputRef.error && isClicked" class="valid-feedback">
      Looks good!
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
    rules: {
      type: Array as PropType<RulesProp>,
    },
  },
  setup(props) {
    const isClicked = ref(false)
    const inputRef = reactive({
      val: '',
      error: false,
      message: '',
    })
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
    }
  },
})
</script>

<style scoped></style>
