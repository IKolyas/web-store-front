import Vue from 'vue'
import Vuex from 'vuex'
import {methods} from '../api/crud.js'
import {urls} from '../api/urls.js'
import Basket from "../basket/Basket";

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        products: [],
        product: [],
        sizesCategory: [],
        dropdownMenu: [],
        items: [],
        itemsFiltered: [],
        qItemPages: 6,

        priceFilter: {
            min: 0,
            max: 1000
        },

        basket: new Basket()

    },
    //РАЗОБРАТЬСЯ С ГЕТБАСКЕТ
    mutations: {

        productChange({state}, item) {
          this.state.basket.change(item.id, item.qut);
        },

    },
    actions: {
        getCatalog({state}, params = '') {
            let url = `${urls.catalogUrl}${params}`

            console.log(url)
            methods.get(url)
                .then(items => {
                    state.products = items;

                })
        },
        async getProductSingle({state}, id = '') {
            let productUrl = `${urls.article}${id}`
            await methods.get(productUrl)
                .then(item => {
                    state.product = item.results[0];
                })
        },
        getDropdownCategory({state}, param = '') {
            let url = urls.dropdownCategoryUrl + param
            methods.get(url)
                .then(catalog => {
                    state.dropdownMenu = catalog
                })
        },
        getSizes({state}, params = '') {
            let url = `${urls.categorySizes}${params}`

            methods.get(url)
                .then(category => {
                    state.sizesCategory = category
                })
        },
        getPagination({state}, url = '') {
            methods.get(url)
                .then(items => {
                    state.products = items;
                })
        },
        getBasket({state}) {
            this.state.basket.getBasketProducts()
        }
    },
    modules: {},
    getters: {
        filterCatalog(state) {
            return state.products.results || []
        },
        sizesCatalog(state) {
            return state.sizesCategory.results ?
                Object.values(state.sizesCategory.results).map(size => Object.values(size)) : []

        },
        basket(state) {
            return state.basket.basket || []
        }
    }
})
