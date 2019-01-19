import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store/index';

// 安装axios插件
import axios from './plugins/axios';
Vue.use(axios);
import qs from './plugins/qs';
Vue.use(qs);

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
