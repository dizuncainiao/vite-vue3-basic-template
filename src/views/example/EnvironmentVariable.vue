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
  token: '',
})
console.log(result, 'line 19')
</script>

<script lang="ts">
export default {
  name: 'EnvironmentVariable',
}
</script>

<style scoped></style>
