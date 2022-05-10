<template>
  <ValidateForm @form-submit="onFormSubmit">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
      <ValidateInput
        type="email"
        placeholder="请输入邮箱"
        v-model="emailValue"
        :rules="emailRules"
        ref="inputRef"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">密码</label>
      <ValidateInput
        :rules="passwordRules"
        type="password"
        placeholder="请输入密码"
      />
    </div>
    <template #submit>
      <button type="submit" class="btn btn-primary">Submit</button>
    </template>
  </ValidateForm>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { LOGIN } from '@/store/mutations-types'
import ValidateInput, { RulesProp } from './validate/ValidateInput.vue'
import ValidateForm from './validate/ValidateForm.vue'

const emailRules: RulesProp = [
  { type: 'required', message: '邮箱地址不能为空！' },
  { type: 'email', message: '邮箱地址格式错误！' },
]
const passwordRules: RulesProp = [
  { type: 'required', message: '密码不能为空！' },
]

export default defineComponent({
  name: 'Login',
  components: {
    ValidateInput,
    ValidateForm,
  },
  setup() {
    const emailRef = reactive({
      val: '',
      error: false,
      message: '',
    })

    const emailValue = ref('')

    const store = useStore()
    const inputRef = ref<unknown>()
    const onFormSubmit = (result: boolean) => {
      if (result) {
        store.commit(LOGIN)
      }
    }

    return {
      emailRef,
      emailRules,
      passwordRules,
      emailValue,
      onFormSubmit,
      inputRef,
    }
  },
})
</script>

<style scoped></style>
