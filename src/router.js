import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// Views - Lazy loaded for better performance
const Home = () => import('@/views/Home.vue');
const Classify = () => import('@/views/classify.vue');
const Carlist = () => import('@/views/carlist.vue');
const Detail = () => import('@/views/detail.vue');
const User = () => import('@/views/user.vue');
const ErrorPage = () => import('@/views/error.vue');

const routes = [
  { path: '/home', component: Home, name: 'home' },
  { path: '/classify', component: Classify, name: 'classify' },
  { path: '/carlist', component: Carlist, name: 'carlist' },
  { path: '/detail', component: Detail, name: 'detail' },
  { path: '/user', component: User, name: 'user' },
  { path: '/', redirect: '/home' },
  { path: '*', redirect: '/error' }
];

export default new Router({
  mode: 'history',
  routes
});
