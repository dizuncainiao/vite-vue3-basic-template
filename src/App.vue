<template>
  <RouterView />
</template>

<script setup lang="ts">
import { topList } from '@/utils/axios-http/example'

topList({ pageNo: 1, pageSize: 10 }).then(res => {
  console.log(res)
})
</script>
