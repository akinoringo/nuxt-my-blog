<template>
  <div>
    <p>id: {{ $route.params.id }}</p>
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
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="submit($route.params.id)">update</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, onBeforeMount, ref, useContext} from '@nuxtjs/composition-api'
import { GetArticle, FormArticle } from '~/types/props-types'
import { $axios } from "@/plugins/api"
import { getArticleLink, updateArticleLink } from "@/compositions/useUrls"

export default defineComponent({
  setup() {
    const context = useContext()
    const id = Number(context.params.value.id)
    const getArticle = async (id: number) => $axios.$get(getArticleLink(id))

    const article = ref<GetArticle>();
    const formValues = reactive<FormArticle>({
          title: "",
          content: "",
        })

    onBeforeMount(async () => {
      try {
        article.value = await getArticle(id)
        formValues.title = article.value?.title
        formValues.content = article.value?.content
      } catch (error) {
        console.log(error)
      }
    })

    const updateArticle = (id: number, inputData: FormArticle) => {
      return $axios.$post<FormArticle>(updateArticleLink(id), inputData)
    }

    const submit = async (id: number) => {
      try {
        const articleOfUpdated = await updateArticle(id, formValues)
        console.log(articleOfUpdated)
      } catch(err) {
        console.log(err)
      }
    }

    return {submit, formValues}
  }
})

</script>
