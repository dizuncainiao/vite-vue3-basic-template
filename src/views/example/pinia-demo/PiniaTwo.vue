<template>
  <div class="pinia-box">
    <h2>Pinia-Two</h2>
    {{
      `
    counter: ${counter} ——
    name: ${name} ——
    isAdmin: ${isAdmin} ——
    doubleCounter: ${doubleCounter}`
    }}
    <br />
    <label style="display: inline-flex; align-items: center"
      >管理员姓名：
      <input v-model="name" type="text" />
    </label>
    <br />
    <label style="display: inline-flex; align-items: center"
      >名字前缀：
      <input v-model="prefix" type="text" />
      {{ prettifyName(prefix) }}
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useStore } from '@/store/useStore'

const prefix = ref('')
const store = useStore()
const { counter, name, isAdmin, doubleCounter, prettifyName } =
  storeToRefs(store)
</script>

<script lang="ts">
export default {
  name: 'PiniaTwo',
}
</script>

<style scoped></style>
