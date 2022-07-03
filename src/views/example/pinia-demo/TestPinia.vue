<template>
  <div class="pinia-box">
    <h2>Test-Pinia</h2>
    {{
      `
    counter: ${counter} ——
    name: ${name} ——
    isAdmin: ${isAdmin} ——
    doubleCounter: ${doubleCounter}`
    }}
    <br />
    <button @click="counter++">counter++</button>
  </div>
  <pinia-one />
  <pinia-two />
</template>

<script setup lang="ts">
import { useStore } from '@/store/useStore'
import PiniaOne from '@/views/example/pinia-demo/PiniaOne.vue'
import PiniaTwo from '@/views/example/pinia-demo/PiniaTwo.vue'

const store = useStore()
const { counter, name, isAdmin, doubleCounter } = storeToRefs(store)

console.log(store)
</script>

<style lang="less">
.pinia-box {
  padding: 20px;
  margin: 20px;
  border: 2px dashed lightpink;
}
</style>
