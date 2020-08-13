/* 
  路由器对象模块
*/

import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from '../pages/home/Home.vue'
import Order from '../pages/order/Order.vue'
import Profile from '../pages/profile/Profile.vue'
import Search from '../pages/search/Search.vue'
import Login from '../pages/login/Login.vue'

//声明使用插件
Vue.use(VueRouter)
export default new VueRouter({ //构造函数类型
    //所有路由
    routes: [{
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                showFooter: true
            }
        },
        {
            path: '/login',
            component: Login
        }
    ]
})