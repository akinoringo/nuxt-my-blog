<template>
  <div>
    <div class="mt-4 mb-4">ログイン状態: {{ $auth.loggedIn }}</div>
    <div class="form">
      <input
        type="text"
        name="title"
        class="form-control mb-2"
        placeholder="Title"
        v-model="formValues.title"
        required
        autofocus
      />
      <textarea
        name="content"
        cols="30"
        rows="10"
        class="form-control"
        placeholder="Content"
        v-model="formValues.content"
        required
        autofocus
      />
      <br />
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="submit">create</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, useRouter} from '@nuxtjs/composition-api'
import { FormArticle } from '~/types/props-types'
import { $axios } from "@/plugins/api"
import { createArticleLink } from "@/compositions/useUrls"

export default defineComponent({
  setup() {
    const router = useRouter()
    const formValues = reactive<FormArticle>({
      title: '',
      content: ''
    })
    const postArticle = (inputData: FormArticle) => {
      return $axios.$post<FormArticle>(createArticleLink, inputData)
    }

    const submit = async () => {
      try {
        const article = await postArticle(formValues)
        console.log(article)
        router.push('/')
      } catch(err) {
        console.log(err)
      }
    }

    return {submit, formValues}
  }
})

</script>
