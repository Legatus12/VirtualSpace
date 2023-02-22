import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Device from '../views/Device.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/device/:id',
      name: 'device',
      component: Device
    }
  ]
})

export default router
