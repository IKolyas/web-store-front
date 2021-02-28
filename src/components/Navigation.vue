<template>
    <nav class="container" v-show="$store.getters['products/dropdownCategory']">
        <div class="topNav d-none d-sm-flex flex-column flex-lg-row justify-content-center align-items-center">
            <ul class="topMenu d-flex flex-column flex-lg-row justify-content-center align-items-center p-0 m-0 ">
                <router-link :to="{name: 'Index'}" tag="li" class="menu__top__link">Главная</router-link>

                <li v-for="category in $store.getters['products/dropdownCategory']"
                    class="menu__top__link py-2"

                >
                    <h2 class="m-0 p-0" @click="updateCategory({category: category.id})">{{category.title}}</h2>

                    <ul v-if="category.sub"
                        class="d-none submenu row d-md-flex flex-md-column py-2 px-4 mx-5"
                    >
                        <h3 class="mb-0 mt-2"> категории </h3>
                        <div class="dropdown-divider"></div>
                        <li v-for="sub of category.sub"
                            class="subMenuLink d-flex col-4 flex-column mx-2 px-2"
                            @click="updateCategory({category: category.id, subcategory: sub.id})"
                        >
                            -{{sub.title}}
                        </li>
                    </ul>
                </li>
                <li class="menu__top__link"
                    @click="allCategory()"
                >Все товары
                </li>
            </ul>
        </div>
        <div class="topNavMobile fixed-top d-block d-sm-none">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-light p-4 d-flex flex-column justify-content-center">
                    <router-link :to="{name: 'Index'}"><a href="#">Главная</a></router-link>

                    <h4 v-for="category in $store.getters['products/dropdownCategory']"
                        @click="updateCategory({category: category.id})">
                        {{category.title}}
                    </h4>
                    <h4 @click="allCategory()">
                        Все товары
                    </h4>
                </div>
            </div>
            <nav class="navbar navbar-light bg-light row mx-1">
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarToggleExternalContent"
                        aria-controls="navbarToggleExternalContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="rTop d-flex justify-content-center align-items-center justify-content-lg-start">
                    <router-link :to="{name: 'ShoppingCart'}">
                        <a href="#" class="fa fa-shopping-cart my__cart px-2" aria-hidden="true"></a>
                    </router-link>
                    <div class="btn-group">
                        <router-link tag="button" class="btn btn-danger p-1" :to="{name: 'CheckOut'}">
                            My Account
                        </router-link>
                    </div>
                </div>
            </nav>
        </div>
    </nav>
</template>

<script>

    import {mapState} from "vuex";

    export default {
        name: "Navigation",
        data() {
            return {}
        },
        computed: {},
        methods: {
            updateCategory(category) {
                this.setCategory(category)

                this.$store.dispatch('products/getCatalog')
                    .then(() => {
                        if (this.$route.path !== '/products') this.$router.push({name: 'Products'})
                    })
            },
            setCategory(category) {
                if (category.subcategory) {
                    this.$store.dispatch('products/setFilter',
                        {'category': category.category, 'subcategory': category.subcategory}
                    )
                } else {
                    this.$store.dispatch('products/setFilter',
                        {'category': category.category, 'subcategory': ''}
                    )
                }
            },
            allCategory() {
                this.$store.dispatch('products/setFilter', {
                    'category': '',
                    'subcategory': ''
                })
                this.$store.dispatch('products/getCatalog')
                    .then(() => this.$router.push({name: 'Products'}))
            }
        },
        mounted() {
            this.$store.dispatch('products/getNavigationCategory')
        }
    }
</script>

<style>

</style>
