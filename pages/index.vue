<template>
  <div>
    <div v-for="test in tests" :key="test.id">
      <p>id: {{ test.id }}</p>
      <p>name: {{ test.name }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref, onBeforeMount} from '@nuxtjs/composition-api'
import useTest from "@/compositions/test"

export default defineComponent({
  setup() {
    const { tests } = useTest();

    return {tests}
  }
})

</script>
