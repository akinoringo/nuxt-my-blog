import { $axios } from "@/plugins/api"
import {ref} from '@nuxtjs/composition-api'
import { SignupData } from "~/types/props-types"
import { signupLink } from "~/compositions/useUrls";

export default async function useSignup(inputData: SignupData) {
  const user = ref<SignupData>();
  const createAccount = (data: SignupData) => {
    return $axios.$post(signupLink, data)
  }

  try {
    user.value = await createAccount(inputData)
  } catch (error) {
    console.log(error)
  }

  return {user};
}