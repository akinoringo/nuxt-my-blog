<template>
  <div>
    <div>ログイン状態: {{ $auth.loggedIn }}</div>
    <button @click="logout">ログアウト</button>
    <div v-for="test in tests" :key="test.id">
      <p>{{ test.id }}</p>
      <p>{{ test.title }}</p>
      <p>{{ test.content }}</p>
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

    return {tests, logout}
  }
})

</script>
