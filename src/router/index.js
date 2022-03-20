import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import SingleProductView from '../views/SingleProductView.vue'
import SigninView from '../views/SigninView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  },
  {
    path: '/:productId',
    name: 'single_product',
    component: SingleProductView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SigninView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
