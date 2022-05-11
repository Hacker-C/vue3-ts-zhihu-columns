<template>
  <div class="create-post-page">
    <h4>新建文章</h4>
    <ValidateForm @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="mb-3">文章标题：</label>
        <ValidateInput
          :rules="titleRules"
          placeholder="请输入文章标题"
          type="text"
          v-model="titleVal"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">文章详情</label>
        <ValidateInput
          tag="textarea"
          type="text"
          placeholder="请输入文章详情"
          :rules="contentRules"
          v-model="contentVal"
        />
      </div>
      <template #submit>
        <button class="btn btn-primary btn-large">发表文章</button>
      </template>
    </ValidateForm>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import { RulesProp } from '../validate/ValidateInput.vue'
import { PostProps } from '@/testData'
import ValidateForm from '../validate/ValidateForm.vue'
import ValidateInput from '../validate/ValidateInput.vue'
import router from '@/router'

export default defineComponent({
  name: 'CreatePost',
  components: {
    ValidateForm,
    ValidateInput,
  },
  setup() {
    // FEAT 表达验证规则
    const titleRules: RulesProp = [
      { type: 'required', message: '标题不能为空！' },
    ]
    const contentRules: RulesProp = [
      { type: 'required', message: '内容不能为空！' },
    ]
    // TODO 发表文章，需要 userId(暂且不写)，columnId，创建新的 postId
    const titleVal = ref('')
    const contentVal = ref('')

    // TIP 提交文章表单
    const store = useStore()
    const onFormSubmit = (result: boolean) => {
      if (result) {
        const newPost: PostProps = {
          id: Math.random(),
          title: titleVal.value,
          content: contentVal.value,
          createdAt: new Date().toLocaleString(),
          columnId: 1, // TODO 暂时给死数据
        }
        store.dispatch('newPost', newPost)
        router.push('/column/1')
      }
    }
    return {
      titleRules,
      contentRules,
      contentVal,
      titleVal,
      onFormSubmit,
    }
  },
})
</script>
