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
    path: '/products',
    name: 'products',
    component: () => import('../pages/Products.vue')
  },
  {
    path: '/product/:id',
    name: 'productDetail',
    component: () => import('../pages/ProductDetail.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../pages/Cart.vue')
  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../pages/Orders.vue')
  },
  {
    path: '/add-address',
    name: 'addaddress',
    component: () => import('../pages/AddAddress.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../pages/Checkout.vue')
  },
  {
    path: '/my-account',
    name: 'account',
    component: () => import('../pages/Account.vue')
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
  {
    path: '*',
    component: () => import('../pages/NotFound.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router