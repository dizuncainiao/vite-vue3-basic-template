<template>
  <RouterView />
</template>

<script setup lang="ts">
import { topList } from '@/utils/axios-http/example'

topList({ pageNo: 1, pageSize: 10 }).then(res => {
  console.log(res, 'topList')
})

// addTop({
//   name: '王力宏',
//   org_name: '一战队',
//   achievement: '10000'
// }).then(res => {
//   console.log(res, 'addTop')
// })
//
// login({
//   userName: ,
//   passWord: '',
//   terminaltype: 'WEB',
//   auto: 0
// }).then(res => {
//   console.log(res.data, 'login')
// })

// switchSeat({
//   cdId: '31017',
//   companyId: '9',
//   currentId: '1624058289024442368',
//   newId: '1624058289024442368',
//   profileId: '67098'
// }).then(res => {
//   console.log(res, 'switch')
// })
</script>
