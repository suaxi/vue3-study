import {createStore} from "vuex";
import {App} from 'vue'
import { currentUserInfoApi } from "../request/api";

interface MenuObj {
    id: number,
    parentId: number,
    children?: MenuObj[]
}

interface State {
    menus: MenuObj[]
}

interface NewMenus {
    [key: number]: MenuObj
}

const store = createStore<State>({
    state() {
        return {
            menus: []
        }
    },
    getters: {
        getNewMenus(state) {
            //新菜单
            const newMenus: NewMenus = {};
            //原菜单数据
            const menus = state.menus;
            for (let menu of menus) {
                if (menu.parentId === 0) {
                    //一级菜单
                    //解决引用地址导致孩子节点重复的问题
                    newMenus[menu.id] = {...menu, children: newMenus[menu.id]?.children || []};
                } else {
                    //二级菜单
                    let parentId = menu.parentId;
                    //解决遍历时第一次是二级菜单导致children undefined的问题
                    newMenus[parentId] = newMenus[parentId] || {};
                    newMenus[parentId].children = newMenus[parentId].children || [];
                    newMenus[parentId].children?.push(menu);
                }
            }
            return newMenus
        }
    },
    mutations: {
        updateMenus(state, menus) {
            state.menus = menus
        }
    },
    actions: {
        getUserInfo({commit}) {
            return new Promise((resolve, reject) => {
                currentUserInfoApi().then(res => {
                    if (res.code === 200) {
                        commit('updateMenus', res.data.menus);
                        resolve(res.data)
                    } else {
                        reject(res)
                    }
                })
            })
        }
    },
    modules: {}
});

export const initStore = (app: App<Element>) => {
    app.use(store)
}

export default store;