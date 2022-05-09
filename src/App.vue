<template>
  <div class="container">
    <GlobalHeader :user="curretnUser" />
    <!-- <ColumnList :list="testData" /> -->
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <ValidateInput :rules="emailRules" />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">邮箱地址</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="emailRef.val"
          @blur="validateEmail"
        />
        <div class="form-text" v-if="emailRef.error">
          {{ emailRef.message }}
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">密码</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'

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

    const emailRef = reactive({
      val: '',
      error: false,
      message: '',
    })

    const validateEmail = () => {
      console.log(emailReg.test(emailRef.val.trim()))
      if (emailRef.val.trim() === '') {
        emailRef.error = true
        emailRef.message = 'can not be empty'
      } else if (!emailReg.test(emailRef.val.trim())) {
        emailRef.error = true
        emailRef.message = 'should be a valid value'
      }
    }

    return {
      testData,
      curretnUser,
      emailRef,
      validateEmail,
      emailRules,
    }
  },
})
</script>

<style></style>
