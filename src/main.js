import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/index';

// 安装axios插件
import axios from './plugins/axios';
Vue.use(axios);
// 安装jsonp插件
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp);
import qs from './plugins/qs';
Vue.use(qs);

// 轮播图插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
//iconfont矢量图标

Vue.config.productionTip = false

import '@/assets/css/base.css'; //暴露默认css
import '@/assets/js/font'; //font响应式

import loading from './components/loading'; //载入loading过渡动画
Vue.use(loading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
