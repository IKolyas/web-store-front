import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index'

const Index = () => import('@/views/Index.vue');
const Products = () => import('@/views/Products.vue');
const SinglePage = () => import('@/views/SinglePage.vue');
const CheckOutOrder = () => import('@/views/CheckOutOrder.vue');
const ShoppingCart = () => import('@/views/ShoppingCart.vue');
const Account = () => import('@/views/Account.vue');
const Login = () => import('@/views/Login');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    props: true,
  },
  {
    path: '/products/:category?/:subcategory?',
    name: 'Products',
    component: Products,
    props: true,
  },
  {
    path: '/single-page/:id?',
    name: 'SinglePage',
    component: SinglePage,
    props: true,
  },
  {
    path: '/check-out-order',
    name: 'CheckOutOrder',
    component: CheckOutOrder,
    props: true,
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCart,
    props: true,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true,
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
    props: true,
    meta: {
      requiresAuth: true
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters['user/isAuth']) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})




export default router
