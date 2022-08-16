import { $axios } from "@/plugins/api"
import {ref, onBeforeMount} from '@nuxtjs/composition-api'
import { testLink } from "./useUrls"
import { TestData } from "~/types/props-types"

export default function useTest() {
  const getTest = () => {
    return $axios.$get<TestData>(testLink)
  }

  const test = ref<TestData>();

  onBeforeMount(async () => {
    try {
      test.value = await getTest()
    } catch (error) {
      console.log(error)
    }
  })

  return {test}

}