<template>
  <div class="container">
    <GlobalHeader :user="curretnUser" />
    <!-- <ColumnList :list="testData" /> -->
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
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
import ValidateForm from './components/ValidateForm.vue'

const curretnUser: UserProps = {
  isLogin: true,
  username: 'murphy chen',
  id: 1,
}

const testData: ColumnProps[] = [
  {
    id: 1,
    title: '专栏测试test1',
    description: '这是test1专栏，介绍vue3的的各种特性，非常有意思',
    avatar:
      'https://cdn.jsdelivr.net/gh/Hacker-C/Picture-Bed@main/icons/vuejs.png',
  },
  {
    id: 2,
    title: '专栏测试test1',
    description: '这是test1专栏，介绍vue3的的各种特性，非常有意思',
    avatar:
      'https://cdn.jsdelivr.net/gh/Hacker-C/Picture-Bed@main/icons/vuejs.png',
  },
  {
    id: 3,
    title: '专栏测试test1',
    description: '这是test1专栏，介绍vue3的的各种特性，非常有意思',
    avatar:
      'https://cdn.jsdelivr.net/gh/Hacker-C/Picture-Bed@main/icons/vuejs.png',
  },
  {
    id: 4,
    title: '专栏测试test1',
    description: '这是test1专栏，介绍vue3的的各种特性，非常有意思',
  },
]

const emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/

export default defineComponent({
  name: 'App',
  components: {
    // ColumnList,
    GlobalHeader,
    ValidateInput,
    ValidateForm,
  },
  setup() {
    const emailRules: RulesProp = [
      {
        type: 'required',
        message: '电子邮箱不能为空',
      },
      {
        type: 'email',
        message: '请输入正确的电子邮箱格式',
      },
    ]

    const passwordRules: RulesProp = [
      {
        type: 'required',
        message: '密码不能为空',
      },
    ]

    const emailRef = reactive({
      val: '',
      error: false,
      message: '',
    })

    const emailValue = ref('')

    const validateEmail = () => {
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not be empty'
      } else if (!emailReg.test(emailRef.val.trim())) {
        emailRef.error = true
        emailRef.message = 'should be a valid value'
      }
    }

    const inputRef = ref<any>()
    const onFormSubmit = (result: boolean) => {
      // console.log(inputRef.value.validateInput())
      console.log(result)
    }

    return {
      testData,
      curretnUser,
      emailRef,
      validateEmail,
      emailRules,
      passwordRules,
      emailValue,
      onFormSubmit,
      inputRef,
    }
  },
})
</script>

<style></style>
