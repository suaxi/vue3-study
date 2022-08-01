import { createStore } from "vuex";
import { App } from 'vue'

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
            menus: [
                {
                    "id": 26,
                    "parentId": 21,
                    "createTime": "2021-10-10T06:12:26.000+00:00",
                    "title": "分配角色",
                    "level": 1,
                    "sort": 0,
                    "name": "allocRole",
                    "icon": "",
                    "hidden": 1
                },
                {
                    "id": 11,
                    "parentId": 7,
                    "createTime": "2020-02-02T08:59:40.000+00:00",
                    "title": "退货原因设置",
                    "level": 1,
                    "sort": 0,
                    "name": "returnReason",
                    "icon": "order-return-reason",
                    "hidden": 0
                },
                {
                    "id": 10,
                    "parentId": 7,
                    "createTime": "2020-02-02T08:57:39.000+00:00",
                    "title": "退货申请处理",
                    "level": 1,
                    "sort": 0,
                    "name": "returnApply",
                    "icon": "order-return",
                    "hidden": 0
                },
                {
                    "id": 1,
                    "parentId": 0,
                    "createTime": "2020-02-02T06:50:36.000+00:00",
                    "title": "商品",
                    "level": 0,
                    "sort": 0,
                    "name": "pms",
                    "icon": "product",
                    "hidden": 0
                },
                {
                    "id": 2,
                    "parentId": 1,
                    "createTime": "2020-02-02T06:51:50.000+00:00",
                    "title": "商品列表",
                    "level": 1,
                    "sort": 0,
                    "name": "product",
                    "icon": "product-list",
                    "hidden": 0
                },
                {
                    "id": 3,
                    "parentId": 1,
                    "createTime": "2020-02-02T06:52:44.000+00:00",
                    "title": "添加商品",
                    "level": 1,
                    "sort": 0,
                    "name": "addProduct",
                    "icon": "product-add",
                    "hidden": 0
                },
                {
                    "id": 4,
                    "parentId": 1,
                    "createTime": "2020-02-02T06:53:51.000+00:00",
                    "title": "商品分类",
                    "level": 1,
                    "sort": 0,
                    "name": "productCate",
                    "icon": "product-cate",
                    "hidden": 0
                },
                {
                    "id": 5,
                    "parentId": 1,
                    "createTime": "2020-02-02T06:54:51.000+00:00",
                    "title": "商品类型",
                    "level": 1,
                    "sort": 0,
                    "name": "productAttr",
                    "icon": "product-attr",
                    "hidden": 0
                },
                {
                    "id": 6,
                    "parentId": 1,
                    "createTime": "2020-02-02T06:56:29.000+00:00",
                    "title": "品牌管理",
                    "level": 1,
                    "sort": 0,
                    "name": "brand",
                    "icon": "product-brand",
                    "hidden": 0
                },
                {
                    "id": 7,
                    "parentId": 0,
                    "createTime": "2020-02-02T08:54:07.000+00:00",
                    "title": "订单",
                    "level": 0,
                    "sort": 0,
                    "name": "oms",
                    "icon": "order",
                    "hidden": 0
                },
                {
                    "id": 8,
                    "parentId": 7,
                    "createTime": "2020-02-02T08:55:18.000+00:00",
                    "title": "订单列表",
                    "level": 1,
                    "sort": 0,
                    "name": "order",
                    "icon": "product-list",
                    "hidden": 0
                },
                {
                    "id": 9,
                    "parentId": 7,
                    "createTime": "2020-02-02T08:56:46.000+00:00",
                    "title": "订单设置",
                    "level": 1,
                    "sort": 0,
                    "name": "orderSetting",
                    "icon": "order-setting",
                    "hidden": 0
                },
                {
                    "id": 12,
                    "parentId": 0,
                    "createTime": "2020-02-04T08:18:00.000+00:00",
                    "title": "营销",
                    "level": 0,
                    "sort": 0,
                    "name": "sms",
                    "icon": "sms",
                    "hidden": 0
                },
                {
                    "id": 13,
                    "parentId": 12,
                    "createTime": "2020-02-04T08:19:22.000+00:00",
                    "title": "秒杀活动列表",
                    "level": 1,
                    "sort": 0,
                    "name": "flash",
                    "icon": "sms-flash",
                    "hidden": 0
                },
                {
                    "id": 14,
                    "parentId": 12,
                    "createTime": "2020-02-04T08:20:16.000+00:00",
                    "title": "优惠券列表",
                    "level": 1,
                    "sort": 0,
                    "name": "coupon",
                    "icon": "sms-coupon",
                    "hidden": 0
                },
                {
                    "id": 16,
                    "parentId": 12,
                    "createTime": "2020-02-07T08:22:38.000+00:00",
                    "title": "品牌推荐",
                    "level": 1,
                    "sort": 0,
                    "name": "homeBrand",
                    "icon": "product-brand",
                    "hidden": 0
                },
                {
                    "id": 20,
                    "parentId": 12,
                    "createTime": "2020-02-07T08:28:42.000+00:00",
                    "title": "广告列表",
                    "level": 1,
                    "sort": 0,
                    "name": "homeAdvertise",
                    "icon": "sms-ad",
                    "hidden": 0
                },
                {
                    "id": 21,
                    "parentId": 0,
                    "createTime": "2020-02-07T08:29:13.000+00:00",
                    "title": "权限",
                    "level": 0,
                    "sort": 0,
                    "name": "ums",
                    "icon": "ums",
                    "hidden": 0
                },
                {
                    "id": 22,
                    "parentId": 21,
                    "createTime": "2020-02-07T08:29:51.000+00:00",
                    "title": "用户列表",
                    "level": 1,
                    "sort": 0,
                    "name": "admin",
                    "icon": "ums-admin",
                    "hidden": 0
                },
                {
                    "id": 23,
                    "parentId": 21,
                    "createTime": "2020-02-07T08:30:13.000+00:00",
                    "title": "角色列表",
                    "level": 1,
                    "sort": 0,
                    "name": "role",
                    "icon": "ums-role",
                    "hidden": 0
                },
                {
                    "id": 24,
                    "parentId": 21,
                    "createTime": "2020-02-07T08:30:53.000+00:00",
                    "title": "菜单列表",
                    "level": 1,
                    "sort": 0,
                    "name": "menu",
                    "icon": "ums-menu",
                    "hidden": 0
                },
                {
                    "id": 25,
                    "parentId": 21,
                    "createTime": "2020-02-07T08:31:13.000+00:00",
                    "title": "资源列表",
                    "level": 1,
                    "sort": 0,
                    "name": "resource",
                    "icon": "ums-resource",
                    "hidden": 0
                },
                {
                    "id": 27,
                    "parentId": 21,
                    "createTime": "2021-10-10T06:14:59.000+00:00",
                    "title": "编辑角色",
                    "level": 1,
                    "sort": 0,
                    "name": "editUser",
                    "icon": "editUser",
                    "hidden": 1
                },
                {
                    "id": 28,
                    "parentId": 21,
                    "createTime": "2021-10-10T06:16:02.000+00:00",
                    "title": "添加菜单",
                    "level": 1,
                    "sort": 0,
                    "name": "addMenu",
                    "icon": "addMenu",
                    "hidden": 1
                },
                {
                    "id": 30,
                    "parentId": 21,
                    "createTime": "2021-10-10T07:33:14.000+00:00",
                    "title": "分配资源",
                    "level": 1,
                    "sort": 0,
                    "name": "allocResource",
                    "icon": "allocResource",
                    "hidden": 1
                },
                {
                    "id": 100,
                    "parentId": 1,
                    "createTime": "2022-03-22T07:41:51.000+00:00",
                    "title": "商品分类编辑",
                    "level": 1,
                    "sort": 0,
                    "name": "updateProductCate",
                    "icon": null,
                    "hidden": 1
                },
                {
                    "id": 102,
                    "parentId": 1,
                    "createTime": "2022-03-22T07:45:18.000+00:00",
                    "title": "商品编辑",
                    "level": 1,
                    "sort": 0,
                    "name": "addProduct",
                    "icon": null,
                    "hidden": 1
                },
                {
                    "id": 103,
                    "parentId": 1,
                    "createTime": "2022-03-22T07:46:08.000+00:00",
                    "title": "商品属性列表",
                    "level": 1,
                    "sort": 0,
                    "name": "productAttrList",
                    "icon": null,
                    "hidden": 1
                },
                {
                    "id": 104,
                    "parentId": 1,
                    "createTime": "2022-03-22T07:47:10.000+00:00",
                    "title": "商品属性列表",
                    "level": 1,
                    "sort": 0,
                    "name": "addProductAttr",
                    "icon": null,
                    "hidden": 1
                },
                {
                    "id": 105,
                    "parentId": 1,
                    "createTime": "2022-03-22T07:48:07.000+00:00",
                    "title": "品牌编辑",
                    "level": 1,
                    "sort": 0,
                    "name": "updateBrand",
                    "icon": null,
                    "hidden": 1
                },
                {
                    "id": 106,
                    "parentId": 7,
                    "createTime": "2022-03-22T07:49:10.000+00:00",
                    "title": "订单详情",
                    "level": 1,
                    "sort": 0,
                    "name": "orderDetail",
                    "icon": null,
                    "hidden": 1
                },
                {
                    "id": 107,
                    "parentId": 7,
                    "createTime": "2022-03-22T07:49:54.000+00:00",
                    "title": "订单详情",
                    "level": 1,
                    "sort": 0,
                    "name": "returnApplyDetail",
                    "icon": null,
                    "hidden": 1
                },
                {
                    "id": 108,
                    "parentId": 12,
                    "createTime": "2022-03-22T07:51:00.000+00:00",
                    "title": "时段",
                    "level": 1,
                    "sort": 0,
                    "name": "flashSession",
                    "icon": null,
                    "hidden": 1
                },
                {
                    "id": 109,
                    "parentId": 12,
                    "createTime": "2022-03-22T07:51:39.000+00:00",
                    "title": "设置商品",
                    "level": 1,
                    "sort": 0,
                    "name": "selectSession",
                    "icon": null,
                    "hidden": 1
                },
                {
                    "id": 110,
                    "parentId": 12,
                    "createTime": "2022-03-22T07:52:09.000+00:00",
                    "title": "设置商品",
                    "level": 1,
                    "sort": 0,
                    "name": "flashProductRelation",
                    "icon": null,
                    "hidden": 1
                },
                {
                    "id": 111,
                    "parentId": 12,
                    "createTime": "2022-03-22T07:52:47.000+00:00",
                    "title": "设置商品",
                    "level": 1,
                    "sort": 0,
                    "name": "addCoupon",
                    "icon": null,
                    "hidden": 1
                },
                {
                    "id": 112,
                    "parentId": 12,
                    "createTime": "2022-03-22T07:53:17.000+00:00",
                    "title": "设置商品",
                    "level": 1,
                    "sort": 0,
                    "name": "couponHistory",
                    "icon": null,
                    "hidden": 1
                },
                {
                    "id": 113,
                    "parentId": 12,
                    "createTime": "2022-03-22T07:53:41.000+00:00",
                    "title": "设置商品",
                    "level": 1,
                    "sort": 0,
                    "name": "updateCoupon",
                    "icon": null,
                    "hidden": 1
                },
                {
                    "id": 114,
                    "parentId": 12,
                    "createTime": "2022-03-22T07:54:21.000+00:00",
                    "title": "设置商品",
                    "level": 1,
                    "sort": 0,
                    "name": "updateAdvertise",
                    "icon": null,
                    "hidden": 1
                },
                {
                    "id": 115,
                    "parentId": 12,
                    "createTime": "2022-03-22T07:54:55.000+00:00",
                    "title": "设置商品",
                    "level": 1,
                    "sort": 0,
                    "name": "addAdvertise",
                    "icon": null,
                    "hidden": 1
                }
            ]
        }
    },
    getters: {
        getNewMenus(state) {
            //原菜单数据
            const menus = state.menus;

            //新菜单
            const newMenus: NewMenus = {};
            for (let menu of menus) {
                if (menu.parentId === 0) {
                    //一级菜单
                    //解决引用地址导致孩子节点重复的问题
                    newMenus[menu.id] = {...menu};
                } else {
                    //二级菜单
                    let parentId = menu.parentId;
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
    actions: {},
    modules: {}
});

export const initStore = (app: App<Element>) => {
    app.use(store)
}