<template>
    <div>
        <div class="newsProd">
            <Breadcrubm/>
        </div>
        <main class="container my-5">
            <div class="row">
                <div class="leftMenu col-12  col-md-3 d-flex flex-column ">
                    <div class="accordion position-sticky fixed-top pt-3" id="accordionExample">

                        <div class="card border-0 rounded-0 pb-3">
                            <div class="card-header bg-transparent prodCardHeader p-0" id="categoryH">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed d-flex justify-content-between align-items-center"
                                            type="button" data-toggle="collapse"
                                            data-target="#category" aria-expanded="true" aria-controls="category">
                                        category
                                        <svg class="bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                        </svg>
                                    </button>
                                </h2>
                            </div>
                            <div id="category" class="collapse" aria-labelledby="categoryH"
                                 data-parent="#accordionExample"
                                 v-show="$store.getters['products/dropdownCategory']"
                            >
                                <div class="drBtnContProd d-flex flex-column pt-2"
                                     v-for="category of $store.getters['products/dropdownCategory']"
                                >
                                    <ul class="m-1 pl-2">
                                        <h3 class="category__accordion"
                                            @click="updateCategory({category: category.id})"
                                        >
                                            {{category.title}}
                                        </h3>
                                        <li v-if="category.sub"
                                            v-for="sub of category.sub">
                                            <h4 class="subcategory__accordion pl-5"
                                                @click="updateCategory({category: category.id, subcategory: sub.id})"
                                            >
                                                {{sub.title}}
                                            </h4>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card border-0 rounded-0 pb-3">
                            <div class="card-header bg-transparent prodCardHeader p-0" id="headingTwo">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed d-flex justify-content-between align-items-center"
                                            type="button" data-toggle="collapse" data-target="#collapseTwo"
                                            aria-expanded="false" aria-controls="collapseTwo">
                                        brand
                                        <svg class="bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                        </svg>
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                 data-parent="#accordionExample">
                                <div class="drBtnContProd d-flex flex-column pl-3 pt-1">
                                    <a href="#">Accessories</a>
                                    <a href="#">Bags</a>
                                    <a href="#">Denim</a>
                                    <a href="#">Hoodies & Sweatshirts</a>
                                    <a href="#">Jackets & Coats</a>
                                    <a href="#">Pants</a>
                                    <a href="#">Polos</a>
                                    <a href="#">Shirts</a>
                                    <a href="#">Shoes</a>
                                    <a href="#">Shorts</a>
                                    <a href="#">Sweaters & Knits</a>
                                    <a href="#">T-Shirts</a>
                                    <a href="#">Tanks</a>
                                </div>
                            </div>
                        </div>
                        <div class="card border-0 rounded-0 pb-3">
                            <div class="card-header bg-transparent prodCardHeader p-0" id="headingThree">
                                <h2 class="mb-0">
                                    <button class="btn btn-link btn-block text-left collapsed d-flex justify-content-between align-items-center"
                                            type="button" data-toggle="collapse" data-target="#collapseThree"
                                            aria-expanded="false" aria-controls="collapseThree">
                                        designer
                                        <svg class="bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                                        </svg>
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                 data-parent="#accordionExample">
                                <div class="drBtnContProd d-flex flex-column pl-3 pt-1">
                                    <a href="#">Accessories</a>
                                    <a href="#">Bags</a>
                                    <a href="#">Denim</a>
                                    <a href="#">Hoodies & Sweatshirts</a>
                                    <a href="#">Jackets & Coats</a>
                                    <a href="#">Pants</a>
                                    <a href="#">Polos</a>
                                    <a href="#">Shirts</a>
                                    <a href="#">Shoes</a>
                                    <a href="#">Shorts</a>
                                    <a href="#">Sweaters & Knits</a>
                                    <a href="#">T-Shirts</a>
                                    <a href="#">Tanks</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rightProduct col-12 col-md-9 align-items-start flex-column bd-highlight">
                    <div class="row d-flex col-12 px-0 m-0">
                        <nav aria-label="breadcrumb"
                             class="col-12 col-lg-4 d-flex flex-column justify-content-center justify-content-lg-start px-0">
                            <h4 class="text-center text-lg-left">Trending now</h4>
                            <div class="my-0 d-flex justify-content-center justify-content-lg-start">
                                <ol class="breadcrumb breadCrombProd bg-transparent p-0 m-0">
                                    <li class="breadcrumb-item"><a href="#">Bohemian</a></li>
                                    <li class="breadcrumb-item"><a href="#">Floral</a></li>
                                    <li class="breadcrumb-item"><a href="#">Lace</a></li>
                                </ol>
                            </div>
                            <div class="my-0 d-flex justify-content-center justify-content-lg-start">
                                <ol class="breadcrumb breadCrombProd bg-transparent p-0 m-0">
                                    <li class="breadcrumb-item"><a href="#">Floral</a></li>
                                    <li class="breadcrumb-item"><a href="#">Lace</a></li>
                                    <li class="breadcrumb-item active" aria-current="page">Bohemian</li>
                                </ol>
                            </div>
                        </nav>
                        <div v-show="$store.getters.sizesCatalog"
                             class="checkSize row col-12 col-lg-4 d-flex justify-content-center
                             justify-content-lg-start align-items-center align-items-lg-start m-0 p-0"
                        >
                            <div class="m-0 p-0 col-12 d-flex justify-content-center justify-content-lg-start">
                                <h4 class="m-0">Size</h4>
                            </div>
                            <div v-for="size in $store.getters.sizesCatalog"
                                 class="row d-flex flex-column m-0 p-0 col-3">
                                <div class="form-check form-check-inline checkFormProd">
                                    <input ref="size" class="form-check-input" type="checkbox"
                                           v-bind:id="`id${size[0]}`"
                                           v-bind:value="size"


                                    >
                                    <label class="form-check-label labelSize"
                                           v-bind:for="`id${size}`">{{size[0]}}</label>
                                </div>
                            </div>
                        </div>
                        <div class="product__price col-12 col-lg-4 d-flex flex-column justify-content-center justify-content-md-start">
                            <div class="m-0 p-0 col-12 d-flex flex-column"><h4
                                    class="d-flex justify-content-center justify-content-lg-start">Price</h4>
                                <div class="range_slider my-2">
                                    <input
                                            type="range"
                                            min="0"
                                            max="10000"
                                            step="10"
                                            v-model.number="$store.getters['products/filters'].price_min"
                                            @change="updateCatalog()"

                                    />
                                    <input
                                            type="range"
                                            min="0"
                                            max="10000"
                                            step="10"
                                            v-model.number="$store.getters['products/filters'].price_max"
                                            @change="updateCatalog()"
                                    />
                                </div>
                                <div class="row d-flex justify-content-between px-3 my-2">
                                    <p>$ {{ $store.getters['products/filters'].price_min }}</p>
                                    <p>$ {{ $store.getters['products/filters'].price_max }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sortProd col-12 d-flex align-items-center px-3 my-3">
                        <select class="custom-select col-2 px-1 mx-2  py-0"
                            v-model="$store.getters['products/filters'].order_by"
                                @change="updateCatalog()"
                        >
                            <option selected value="title">наименованию</option>
                            <option value="views">популярности</option>
                            <option value="price">цене</option>
                        </select>
                        <select class="custom-select col-2 px-1 mx-2 py-0"
                                v-model.number ="$store.getters['products/filters'].limit"
                                @change="updateCatalog()"
                        >
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option selected value="6">6</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="12">12</option>
                        </select>

                    </div>

                    <Catalog type="products" ref='catalogProducts'/>

                    <div class="paginationProduct col-12 d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between">
                        <nav aria-label="Page navigation example" class="p-0">
                            <ul class="pagination">
                                <li v-if="paginationLink.previous !== null" class="page-item">
                                    <a class="page-link page-list" href="#"
                                       @click="linkPagination()"

                                    >
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <span v-for="(page, index) of paginationList"
                                      @click="linkPagination(page)" :key="index">
                                    <input type="radio" class="d-none"
                                           :id="index"
                                           :value="page"
                                    >
                                    <label :for="index"

                                    >
                                      <li class="page-item"
                                      ><a
                                              class="page-link page-num"
                                              href="#">{{++index}}</a>
                                      </li>

                                    </label>
                                </span>

                                <li v-if="paginationLink !== null" class="page-item">
                                    <a class="page-link page-list" href="#"
                                       @click="linkPagination()" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <button type="button"
                                @click.prevent="getAll()">
                            View All
                        </button>
                    </div>
                </div>
            </div>
        </main>
        <div class="buttBanBGProduct">
            <div class="container">
                <div class="row button__banner__text d-flex justify-content-between align-items-center">
                    <div class="d-flex flex-column col-12 col-md-4 justify-content-center align-items-center text-justify pt-3 pt-lg-0">
                        <img src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/car.png"
                             alt="..."><h4>Free Delivery</h4>
                        <p>Worldwide delivery on all. Authorit tively morp next-generation innovation with extensive
                            models</p>
                    </div>
                    <div class="d-flex flex-column col-12 col-md-4 justify-content-center align-items-center text-justify">
                        <img
                                src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/corona.png"
                                alt="..."><h4>Sales & discounts</h4>
                        <p>Worldwide delivery on all. Authorit tively morp next-generation innovation with extensive
                            models</p>
                    </div>
                    <div class="d-flex flex-column col-12 col-md-4 justify-content-center align-items-center text-justify">
                        <img
                                src="https://raw.githubusercontent.com/IKolyas/static/master/GBProject/img/procent.png"
                                alt="..."><h4>Quality assurance</h4>
                        <p>Worldwide delivery on all. Authorit tively morp next-generation innovation with extensive
                            models</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    const Catalog = () => import('../components/Catalog.vue');
    const Breadcrubm = () => import('../components/Breadcrumb.vue');

    export default {
        props: {
            category: {type: [String, Number], default: ''},
            subcategory: {type: [String, Number], default: ''},
        },
        components: {
            Catalog,
            Breadcrubm,
        },

        computed: {

            paginationLink() {
                return this.$store.getters['products/paginationLinks']
            },
            paginationList() {
                return this.$store.getters['products/paginationList'];
            },


        },
        methods: {

            updateCategory(menu) {
                if (menu.subcategory) {
                    this.$store.dispatch('products/setFilter',
                        {'category': menu.category, 'subcategory': menu.subcategory}
                    )
                } else {
                    this.$store.dispatch('products/setFilter',
                        {'category': menu.category, 'subcategory': ''}
                    )
                }

                this.$store.dispatch('products/getCatalog')
                    .then(() => this.$store.dispatch('products/getCatalog'))
            },

            updateCatalog() {
                this.$store.dispatch('products/getCatalog')
            },
            getAll() {
                this.$store.dispatch('products/getAllProductsOffset');
                this.updateCatalog()

            },

            linkPagination(page) {
                this.$store.dispatch('products/linkPagination', page).then(
                    () => this.$store.dispatch('products/getCatalog')
                );
            },

            mounted() {
                // this.getSizes()

            },
            created() {

            },
        }
    }
</script>

<style scoped>

</style>
