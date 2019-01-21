import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
/* components模块 */
import imglist from '@/components/imglist.vue';


/* views路由 */
import home from '@/views/home.vue';
import classify from '@/views/classify.vue';
import carlist from '@/views/carlist.vue';
import detail from '@/views/detail.vue';
import error from '@/views/error.vue';

let routes=[
    {path:'/home',component:home},
    {path:'/classify',component:classify},
    {path:'/carlist',component:carlist},
    {path:'/detail',component:detail},



    {path:'/',redirect:'/home'},
    {path:'*',redrect:error},
];

export default new Router({
    routes
})
