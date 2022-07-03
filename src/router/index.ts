import { createRouter, createWebHashHistory } from 'vue-router'

import NProgress from 'nprogress'
import type { RouteRecordRaw } from 'vue-router'
import 'nprogress/nprogress.css'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/hello-world'
  },
  {
    path: '/testPinia',
    name: 'TestPinia',
    component: () => import('@/views/example/pinia-demo/TestPinia.vue')
  },
  {
    path: '/hello-world',
    name: 'HelloWorld',
    component: () => import('@/components/HelloWorld.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
