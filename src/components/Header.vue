<template>
    <header class="container">
        <div class="row d-flex align-items-center justify-content-center mb-3 mt-5 mt-sm-0 pt-2">
            <router-link
                to="/"
                class="logo col-7 col-sm-4 col-lg-2 d-flex justify-content-center pl-5">
                Bran
                <span>d</span>
            </router-link>
            <div class="input-group search__browse col-sm-8 col-lg-5 pr-sm-5 mb-1">
                <div class="input-group-prepend">
                    <button
                        class="btn btn-outline-secondary dropdown-toggle d-flex align-items-center justify-content-center"
                        type="button" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">Поиск
                    </button>
                    <div class="dropdown-menu dr__menu__left">
                        <a class="dropdown-item left__link__h pl-4" href="#">WOMAN</a>
                        <div role="separator" class="dropdown-divider m-0"></div>
                        <a class="dropdown-item left__link" href="#">Dresses</a>
                        <a class="dropdown-item left__link" href="#">Tops</a>
                        <a class="dropdown-item left__link" href="#">Sweaters/Knits</a>
                        <a class="dropdown-item left__link" href="#">Jackets/Coats</a>
                        <a class="dropdown-item left__link" href="#">Blazers</a>
                        <a class="dropdown-item left__link" href="#">Denim</a>
                        <a class="dropdown-item left__link" href="#">Leggings/Pants</a>
                        <a class="dropdown-item left__link" href="#">Skirts/Shorts</a>
                        <a class="dropdown-item left__link" href="#">Accessories</a>
                        <a class="dropdown-item left__link__h pl-4" href="#">MEN</a>
                        <div role="separator" class="dropdown-divider m-0"></div>
                        <a class="dropdown-item left__link" href="#">Tees/Tank tops</a>
                        <a class="dropdown-item left__link" href="#">Shirts/Polos</a>
                        <a class="dropdown-item left__link" href="#">Sweaters</a>
                        <a class="dropdown-item left__link" href="#">Sweatshirts/Hoodies</a>
                        <a class="dropdown-item left__link" href="#">Blazers</a>
                        <a class="dropdown-item left__link" href="#">Jackets/vests</a>
                    </div>
                </div>
                <input type="text" class="form-control" aria-label="Text input with dropdown button"
                       placeholder="Поиск по наименованию ..."
                       v-model="search"
                       @change="searchProduct()"

                >
                <button type="button" aria-label="search"><i class="fas fa-search"></i></button>
            </div>
            <div
                class="rTop d-none d-sm-flex col-lg-3 ml-lg-auto justify-content-center justify-content-lg-end p-0 align-items-center">
                <div class="basket__block mx-3" id="basket">
                    <i class="fa fa-shopping-cart my__cart"
                       id="basketButton"
                       aria-hidden="true"
                       @click="showBasket = !showBasket"
                    ><span>({{ quantityBasketProduct }})</span></i>

                    <!-- BASKET -->
                    <transition name="basket-show">
                        <basket v-show="showBasket" ref="basket"/>
                    </transition>
                </div>

                <div v-if="user" class="d-flex align-items-center">
                    <b-avatar class="mr-3 hover_pointer" variant="success" @click="$router.push('/account')"></b-avatar>
                    <b-button-group>
                        <b-button @click="$router.push('/account')">{{ user.username }}</b-button>
                        <b-overlay
                            :show="$store.getters['loadItemShow'].itemLogout"
                            rounded="sm"
                            variant="danger"
                            opacity="0.6"
                            spinner-small
                            spinner-variant="primary"
                            class="d-inline-block"
                        >
                            <b-button @click="logout()"><i class="fa fa-sign-out" aria-hidden="true"></i></b-button>
                        </b-overlay>
                    </b-button-group>
                </div>

                <div v-else class="d-flex align-items-center">
                    <b-avatar class="mr-3"></b-avatar>
                    <b-btn class="mr-auto" @click="$route.path !== '/login' ? $router.push('/login') : null">
                        Войти
                    </b-btn>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

const Basket = () => import('./Basket.vue');

export default {
    name: "Header",
    components: {
        Basket,

    },

    data() {
        return {
            showBasket: false,

            filters: {
                limit: 12,
                category: '',
                subcategory: '',
                price: {min: 0, max: 10000},
                sizes: [],
            },
            sort: [],
            clickPage: [],
            search: '',

            // filterProducts: () => new FilterSerializer(),

        }
    },


    computed: {
        quantityBasketProduct() {
            return this.$store.getters["basket/basket"].length
        },
        authStatus() {
            return this.$store.getters['user/authStatus']
        },
        user() {
            return this.$store.getters['user/user']
        }
    },
    methods: {
        makeToastLogOut(append = false, variant = 'default') {
            this.$bvToast.toast(`Вы покинули личный кабинет`, {
                title: 'Выход из личного кабинета!',
                variant: variant,
                autoHideDelay: 4000,
                appendToast: append
            })
        },
        logout() {
            this.$store.commit('changeLoadItem', 'itemLogout')
            this.$store.dispatch('user/logoutUser').then(() => {
                this.$store.commit('changeLoadItem', 'itemLogout');
                this.makeToastLogOut(true, 'danger');
                if (this.$route.path !== '/') this.$router.push({name: 'Index'})
            })
        },

        searchProduct() {
            // this.$store.dispatch('getCatalog', this.filterProducts().getSearch(this.search));
        },

        updateCatalog(params) {
            // this.filters.category = params.category || '';
            // this.filters.subcategory = params.subcategory || '';
            // this.$store.dispatch('getCatalog', this.filterProducts().getProductsParams(this.filters))
            // .then(() => {
            //     this.$store.dispatch('getSizes', this.filterProducts().getSizes(this.filters))
            //         .then(() => {
            //             let path = `/products/${this.filters.category}`;
            //             if (this.filters.subcategory) {
            //                 path += `/${this.filters.subcategory}`;
            //             }
            //             if (this.$route.path !== path) {
            //                 this.$router.push({path: path})
            //             }
            //         })
            // })
        },
        userAuth() {
            if (!!this.$store.getters['user/token']) {
                this.$store.dispatch('user/getUser', this.$store.getters['user/user_id']);
            }
        }
    },
    mounted() {
        this.userAuth();
    },
    created() {

    }
}
</script>

<style scoped lang="scss">
.hover_pointer {
    &:hover {
        cursor: pointer;
    }
}
</style>
