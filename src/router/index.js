import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import ProductView from '../views/ProductView.vue'
import { auth } from '../firebase'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/dress',
    name: 'Dress',
    component: () => import('../views/category/DressView.vue')
  },
  {
    path: '/pants',
    name: 'Pants',
    component: () => import('../views/category/PantsView.vue')
  },
  {
    path: '/tops',
    name: 'Tops',
    component: () => import('../views/category/TopsView.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/products/:productId',
    name: 'product',
    component: ProductView,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/') // redirect to home
    return; // stop the rest from running
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next(); //else (doesn't match any of if)
})

export default router
