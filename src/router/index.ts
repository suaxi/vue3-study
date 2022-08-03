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
    },
    // {
    //     path: '/pms',
    //     name: 'pms',
    //     component: () => import('../views/homePage/homePage.vue'),
    //     children: [
    //         {
    //             path: '/product',
    //             name: 'product',
    //             component: () => import('../views/pms/product.vue'),
    //         }
    //     ]
    // }
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
        store.dispatch('getUserInfo').then(() => {
            //动态添加路由
            const menus = store.getters.getNewMenus;
            for (let menu in menus) {
                const newRouter: RouteRecordRaw = {
                    path: '/' + menus[menu].name,
                    name: menus[menu].name,
                    component: () => import('../views/homePage/homePage.vue'),
                    children: []
                };
                for (let i = 0; i < menus[menu].children.length; i++) {
                    newRouter.children?.push({
                        path: menus[menu].children[i].name,
                        name: menus[menu].children[i].name,
                        component: () => import(`../views/${menus[menu].name}/${menus[menu].children[i].name}.vue`)
                    })
                }
                router.addRoute(newRouter)
            }
            next(to.path);
        })
    } else {
        next();
    }
})

export const initRouter = (app: App<Element>) => {
    app.use(router)
}

//export default router