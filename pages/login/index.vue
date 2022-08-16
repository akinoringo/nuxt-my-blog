<template>
  <div>
    <h1 class="text-center">login</h1>
    <div class="form">
      <input
        type="email"
        name="email"
        class="form-control"
        placeholder="Email"
        v-model="formValues.email"
        required
        autofocus>
      <input
        type="password"
        name="password"
        class="form-control"
        v-model="formValues.password"
        placeholder="パスワード">
      <br />
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="submit">login</button>
      <br />
      <a class="lead pull-right" href="/signup">signup</a>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, useContext, useRouter} from '@nuxtjs/composition-api'
import { LoginData } from '~/types/props-types'

export default defineComponent({
  setup() {
    const {$auth} = useContext()
    const router = useRouter()
    const formValues = reactive<LoginData>({
      email: '',
      password: ''
    })

    const submit = async () => {
      try {
        await $auth.loginWith('local', {data: formValues})
        router.push('/')
      } catch(err) {
        console.log(err)
      }
    }

    return {
      submit,
      formValues
    }
  }
})

</script>
