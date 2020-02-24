import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
/* eslint no-unused-vars: "off" */
import Counter from '@/components/Counter.vue'
import RandomNumber from '@/components/RandomNumber.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import(/* webpackChunkName: "counter" */ '@/components/Counter.vue'),
  },
  {
    path: '/random',
    name: 'RandomNumber',
    component: () => import(/* webpackChunkName: "randomNumber" */ '@/components/RandomNumber.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
