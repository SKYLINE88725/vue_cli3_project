import qs from 'qs';

export default {
  install(Vue) {
    Vue.prototype.$qs = qs;
    window.qs = qs;
  }
};
