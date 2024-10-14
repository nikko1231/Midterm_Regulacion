import { createRouter, createWebHistory } from 'vue-router';
import ProductsPage from '@/views/ProductsPage.vue';
import HomePage from '@/views/HomePage.vue';

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/',
    redirect: '/home' // Redirect root to the home page
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
