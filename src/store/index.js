import Vue from 'vue'
import Vuex from 'vuex'

import products from "./modules/products";
import basket from "./modules/basket";
import user from "./modules/user";

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        loadItemsShow: {
            itemBasket: false,
            itemLogin:false,
            itemLogout:false,
        },
    },
    mutations: {
        changeLoadItem(state, item) {
            state.loadItemsShow[item] = !state.loadItemsShow[item];
        }
    },
    actions: {},
    getters: {
        loadItemShow(state) {
            return state.loadItemsShow
        }
    },
    modules: {
        products,
        basket,
        user
    },
})
