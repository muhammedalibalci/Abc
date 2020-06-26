import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/product/:id',
    name: 'productDetail',
    component: () => import('../pages/ProductDetail.vue')
  },
  {
    path: '/basket',
    name: 'basket',
    component: () => import('../pages/Basket.vue')
  },
  {
    path: '/address',
    name: 'address',
    component: () => import('../pages/AddressSection.vue')
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../pages/Order.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../pages/Register.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router