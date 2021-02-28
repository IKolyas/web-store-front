import {urls} from "../../api/urls";
import {fetchMethods} from "../../api/serverApi";
import Basket from "../../basket/Basket";
const state = () => ({
    state: {
        basket: new Basket()
    }
})
const getters = {
    basket({state}) {
        return state.basket.basket || []
    }
}

const actions = {
    getBasket({commit}) {
        commit('getBasketProducts')
    },
    changeBasketProduct ({commit}, item) {
        commit('changeBasket', item)
    },
    clearBasket({commit}){
        commit('clearBasket')
    }
}

const mutations = {
    changeBasket({state}, item) {
        state.basket.change(item.id, item.qut);
    },
    getBasketProducts({state}) {
        state.basket.getBasketProducts().then()
    },
    clearBasket({state}) {
        state.basket.clearBasket()
    }
}

export default {
    state,
    namespaced: true,
    getters,
    actions,
    mutations
}