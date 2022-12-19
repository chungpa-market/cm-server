import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import LoginView from '../views/LoginView';
import SellView from '../views/SellView';
import ProductDetail from '../views/ProductDetail';
import WishList from '../views/WishList';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/sell',
    name: 'sell',
    component: SellView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: ProductDetail,
  },
  {
    path: '/wish',
    name: 'WishList',
    component: WishList,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
