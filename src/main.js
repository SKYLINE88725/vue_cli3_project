import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';

// Axios plugin
import axios from './plugins/axios';
Vue.use(axios);

// JSONP plugin
import VueJsonp from 'vue-jsonp';
Vue.use(VueJsonp);

// QS plugin
import qs from './plugins/qs';
Vue.use(qs);

// Swiper carousel
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
Vue.use(VueAwesomeSwiper);

// Base styles
import '@/assets/css/base.css';
import '@/assets/js/font';

// Loading component
import loading from './components/loading';
Vue.use(loading);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
