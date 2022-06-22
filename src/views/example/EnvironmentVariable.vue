<template>
  <div>
    {{ msg }}
    <hr />
    {{ msg2 }}
    <hr />
    {{ version }}
  </div>
</template>

<script setup lang="ts">
import { login } from '@/api/system/login'

const msg = process.env.TEST_VARIABLE
const msg2 = import.meta.env
const { version } = __APP_VERSION__
const result = await login({
  userName: 18156224704,
  passWord: 'wangbo153/',
  terminaltype: 'WEB',
  auto: 0,
}).catch((err) => {
  console.log('result_err', err)
})
console.log('result', result)
</script>

<script lang="ts">
export default {
  name: 'EnvironmentVariable',
}
</script>

<style scoped></style>
