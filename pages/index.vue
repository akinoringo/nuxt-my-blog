<template>
  <div>
    <div>ログイン状態: {{ $auth.loggedIn }}</div>
    <button @click="logout">ログアウト</button>
    <div>{{ test }}</div>
  </div>
</template>

<script lang="ts">
import {defineComponent, useContext, useRouter} from '@nuxtjs/composition-api'
import useTest from "@/compositions/test"

export default defineComponent({
  setup() {
    const {$auth} = useContext()
    const router = useRouter()
    const { test } = useTest();
    const logout = () => {
      try {
        $auth.logout()
        router.push('/login')
      } catch (err) {
        console.log(err)
      }
    }

    return {test, logout}
  }
})

</script>
