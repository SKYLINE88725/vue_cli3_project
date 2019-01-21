import axios from 'axios';
import Vue from 'vue';
import store from '@/store'
import * as types from '@/store/types';


export default{
    install:function(Vue){
        Vue.prototype.$http=axios;
        window.axios=axios; //全局暴露
    }
}