<template>
  <div>
    <h1 class="text-center">signup</h1>
    <div class="form">
      <input
        type="name"
        name="name"
        class="form-control"
        placeholder="Name"
        v-model="formValues.username"
        required
        autofocus
      >
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
      <button class="btn btn-lg btn-primary btn-block" type="submit" @click="submit">signup</button>
      <br />
      <a class="lead pull-right" href="/login">ログイン</a>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from '@nuxtjs/composition-api'
import useSignup from '~/compositions/pages/signup/usePostSignupForm'
import { SignupData } from '~/types/props-types'

export default defineComponent({
  setup() {
    const formValues = reactive<SignupData>({
      username: '',
      email: '',
      password: ''
    })

    const submit = async () => {
      const { user } = await useSignup(formValues)
      console.log(user)
    }

    return {
      submit,
      formValues
    }
  }
})

</script>
