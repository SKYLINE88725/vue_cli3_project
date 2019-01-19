import qs from 'qs';
import store from '@/store'
import * as types from '@/store/types';

export default{
    install:function(Vue){
        window.qs=qs; //全局暴露
    }
}