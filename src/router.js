import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
/* components模块 */
import imglist from '@/components/imglist.vue';


/* views路由 */
import home from '@/views/home.vue';

let routes=[
    {path:'/home',component:home}
];

export default new Router({
    routes
})
