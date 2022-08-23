<template>
  <div>
    <div>ログイン状態: {{ $auth.loggedIn }}</div>
    <button @click="logout">ログアウト</button>
    <div v-for="test in tests" :key="test.id" class="mb-2">
      <p>{{ test.id }}</p>
      <p>{{ test.title }}</p>
      <p>{{ test.content }}</p>
      <button
        type="button"
        class="btn btn-sm btn-secondary"
        @click="loadEdit(test.id)"
      >編集</button>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, useContext, useRouter} from '@nuxtjs/composition-api'
import useTest from "@/compositions/test"

export default defineComponent({
  setup() {
    const {$auth} = useContext()
    const router = useRouter()
    const { tests } = useTest();
    const logout = () => {
      try {
        $auth.logout()
        router.push('/login')
      } catch (err) {
        console.log(err)
      }
    }

    const loadEdit = (id: number) => {
      try {
        router.push(`/articles/${id}`)
      } catch (err) {
        console.log(err)
      }
    }

    return {tests, logout, loadEdit}
  }
})

</script>
