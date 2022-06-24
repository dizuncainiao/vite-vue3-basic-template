<template>
  <div>
    {{ msg }}
    <a-divider style="height: 1px; background-color: #7cb305" />
    {{ msg2 }}
    <a-divider style="height: 1px; background-color: #7cb305" />
    {{ version }}
  </div>
  <a-divider style="height: 1px; background-color: #7cb305" />
  <a-space>
    <a-button type="primary" @click="loginHandler">
      <play-circle-outlined />
      登录
    </a-button>
    <a-button type="primary" @click="getList">
      <play-circle-outlined />
      获取列表
    </a-button>
    <a-button type="primary" @click="logoutHandler">
      <play-circle-outlined />
      退出
    </a-button>
  </a-space>
</template>

<script setup lang="ts">
import { message } from 'ant-design-vue'
import type { Token } from '@/api/system/login'
import { getLogisticsSchedules, login, logout } from '@/api/system/login'

const msg = process.env.TEST_VARIABLE
const msg2 = import.meta.env
const { version } = __APP_VERSION__
const state = reactive<Token>({
  token: '',
  COMPANYID: null,
})

function loginHandler() {
  login({
    userName: 18156224704,
    passWord: 'wangbo153/',
    terminaltype: 'WEB',
    auto: 0,
  })
    .then((res) => {
      const {
        auth: { accessToken },
        companyId,
      } = res.data
      state.token = accessToken
      state.COMPANYID = companyId
      message.success('登录成功！')
      console.log('result_success', res)
    })
    .catch((err) => {
      console.log('result_err', err)
    })
}

function getList() {
  getLogisticsSchedules({
    page: 1,
    pageSize: 10,
    ...state,
  })
    .then((res) => {
      console.log(res, '获取到列表数据')
    })
    .catch((err) => {
      console.log(err, '获取列表数据错误')
    })
}

function logoutHandler() {
  logout(state).then((res) => {
    message.info('退出登录！')
    console.log(res, 'logout')
  })
}
</script>

<script lang="ts">
export default {
  name: 'EnvironmentVariable',
}
</script>

<style scoped></style>
