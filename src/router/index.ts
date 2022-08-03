import {App} from "vue";
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import store from '../store';
import Cookies from "js-cookie";

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login/login.vue')
    },
    {
        path: '/homePage',
        name: 'homePage',
        component: () => import('../views/homePage/homePage.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

//前置路由导航守卫
router.beforeEach((to, from, next) => {
    //1.token vuex中的menus为空时
    const token = Cookies.get('token');
    if (token && store.state.menus.length === 0) {
        store.dispatch('getUserInfo');
    }
    next();
})

export const initRouter = (app: App<Element>) => {
    app.use(router)
}

//export default router