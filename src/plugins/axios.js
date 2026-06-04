import axios from 'axios';
import Vue from 'vue';

// Axios configuration
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// Request interceptor
axios.interceptors.request.use(
  config => {
    // Add loading or token here if needed
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Response interceptor
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

export default {
  install(Vue) {
    Vue.prototype.$http = axios;
    window.axios = axios;
  }
};
