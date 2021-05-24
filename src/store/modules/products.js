
import {FilterSerializer} from "@/utils/FilterSerializer";
import {urls} from "@/api/urls";
import {fetchMethods} from "@/api/serverApi";

const state = () => ({
    state: {
        navigationCategory: [],    //категории и подкатегории для навигации
        productsCatalog: [],       //каталог продуктов
        singleProduct: [],         //продукт для страницы просмотра товара
        sizesCategory: [],         //размеры категории(подкатегории)

        filters: {                  //фильтры каталога продуктов
            limit: 4,               //
            category: '',
            subcategory: '',
            price_min: 0,
            price_max: 30000,
            order_by: '',
            offset: '',

            // productSearch: '',
        },
    }
})

const getters = {
    //список продуктов
    filterProducts({state}) {
        return state.productsCatalog.results || []
    },
    //список категорий и подкатегорий
    dropdownCategory({state}) {
      return state.navigationCategory || []
    },
    sizesCatalog({state}) {
        return state.sizesCategory.results ?
            Object.values(state.sizesCategory.results).map((size) => Object.values(size)) : []
    },

    singleProduct({state}) {
      return state.singleProduct
    },

    filters({state}) {
        return state.filters
    },

    paginationLinks({state}) {
        return {'next': state.productsCatalog.next, 'previous': state.productsCatalog.previous}
    },
    paginationList({state}) {
        let pagList = []
        let count = state.productsCatalog.count;
        let limit = state.filters.limit;
        let numberList = ((count - count % limit) / count) + 1
        for (let i = 0; i < numberList; i++) {
            pagList.push(i * limit)
        }
        return pagList
    },
}

const actions = {
    // каталог продуктов
    async getCatalog({commit, getters}) {
        commit('setProducts')
        let params = new FilterSerializer().getFilterParams(getters.filters);
        await fetchMethods.get(`${urls.products}?${params}`)
            .then(products => commit('setProducts', products))
            .then(() => commit('setSizes'));
    },
    clearCatalog({commit}) {
        commit('clearCatalog');
    },
    // получить продукт
    async getProductSingle({commit}, id) {
        let productUrl = `${urls.article}${id}`
        await fetchMethods.get(productUrl)
            .then(product => commit('setSingleProduct', product));
    },
    // получить категории и подкатегории
    async getNavigationCategory({commit}) {
        await fetchMethods.get(urls.navigationCategory)
            .then((category) => commit('setNavCategory', category));
    },
    // запись параметров в фильтр
    setFilter({commit}, params) {
        commit('updateFilter', params)

    },
    // ссылки для пагинации
    linkPagination({getters, commit}, page = null) {
        let link = getters.paginationLinks.next !== null ? getters.paginationLinks.next : getters.paginationLinks.previous;
        const regex = /offset=\d/gm;
        let regLinkOffset = regex.exec(link)
        if (!(page === null)) {
            commit('linkPagination', page)
        } else if (regLinkOffset) {
            regLinkOffset = regLinkOffset[0].split('=')[1]
            commit('linkPagination', regLinkOffset)
        } else {
            commit('linkPagination')
        }
    },
    // getAll pagination
    getAllProductsOffset ({commit}) {
        commit('linkPagination');
        commit('updateFilter', {'limit': ''})
    },
}

const mutations = {
    setProducts({state}, products = []) {
        state.productsCatalog = products;
    },
    setSingleProduct({state}, product) {
        state.singleProduct = product.results[0];
    },
    setNavCategory({state}, category) {
        state.navigationCategory = category
    },
    setSizes({state}) {
        state.sizesCategory = state.productsCatalog.results
            .filter((elem, index, array) => array.indexOf(elem) === 'size')
    },
    linkPagination({state}, page) {
        state.filters.offset = page ? page : '';
    },
    updateFilter({state}, params) {
        Object.keys(params).forEach((key) => {
            state.filters[key] = params[key]
        })
    },
    clearCatalog({state}) {
        state.productsCatalog = [];
    }

}

export default {
    state,
    namespaced: true,
    getters,
    actions,
    mutations
}