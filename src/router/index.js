import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/products/Products.vue'
import Product from '../views/products/Product.vue'
import User from '../views/user/User.vue'
import Userdata from '../views/user/Userdata.vue'
import UserAddress from '../views/user/UserAddress.vue'
import UserOrders from '../views/user/UserOrders.vue'
import Login from '../views/Login.vue'
import Cart from "../views/checkout/Cart.vue"

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
    component: User,
    meta: {
      logged: true
    },
    children: [
      {
        path: "",
        name: "User",
        component: Userdata
      },
      {
        path: "address",
        name: "UserAddress",
        component: UserAddress
      },
      {
        path: "orders",
        name: "UserOrders",
        component: UserOrders
      }
    ]
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  }
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.logged)) {
    if (!window.localStorage.token) {
      next({
        name: "Login"
      })
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router
