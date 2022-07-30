import { $axios } from "@/plugins/api"
import {ref, onBeforeMount} from '@nuxtjs/composition-api'
import { testLink } from "./useUrls"
import { TestData } from "~/types/props-types"

export default function useTest() {
  const getTest = () => {
    return $axios.$get<TestData>(testLink)
  }

  const tests = ref<TestData>();

  onBeforeMount(async () => {
    try {
      tests.value = await getTest()
    } catch (error) {
      console.log(error)
    }
  })

  return {tests}

}