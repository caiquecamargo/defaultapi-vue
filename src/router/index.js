import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/products/Products.vue'
import Product from '../views/products/Product.vue'
import User from '../views/user/User.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home',
    redirect: { name: 'Home' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/products/:category',
    name: 'Products',
    component: Products,
    props: true
  },
  {
    path: '/products',
    redirect: '/products/#'
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    props: true
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return window.scrollTo({ top: 0, behavior: "smooth" });
  }
})

export default router
