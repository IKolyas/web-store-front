<template>
    <div>
        <template v-if="type === 'catalog'">
            <div class="prodCard card col-12 col-md-6 col-lg-4 mx-0 px-0 mb-5 rounded-sm border-light"
                 v-show="item"
            >
                <div class="psevProdCard mx-0 px-0">
                    <button class="d-flex justify-content-around"
                            @click="changeBasketProduct(item.id, 1, item.title)"
                    >
                        <i class="fas fa-cart-plus"></i>Add to Cart
                    </button>
                </div>
                <img v-if="item.img" :src="item.img[0]['image_path'] + item.img[0]['image_name']" class="card-img-top"
                     :alt="item.title">
                <div class="psevProdCardBody card-body d-flex flex-column align-content-start pb-0 px-3">
                    <b-form-rating  v-model="item.rating" variant="warning" no-border readonly></b-form-rating>

                    <a href="#" class="card-text" @click="getOneProduct(item.id)">{{ item.title }}</a>

                    <div class="d-flex justify-content-between align-items-center">
                        <p class="d-flex justify-content-between">${{ item.price }}</p>


                        <!-- add product test -->
                        <button class="d-flex d-md-none justify-content-around"
                                @click="changeBasketProduct(item.id,1, item.title)"
                        >
                            Add to Cart
                            <i class="fas fa-cart-plus pl-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </template>

        <template v-if="type === 'basket'">
            <div class="item_basket">
                    <div class="d-flex px-3 justify-content-between align-items-start py-1">
                        <img :src="item.img[0]['image_path'] + item.img[0]['image_name']" :alt="item.title"
                             @click="getOneProduct(item.id)"
                        >
                        <div class="d-flex flex-column justify-content-center align-items-center product__text">
                            <h3 class="mb-0">{{ item.title }}</h3>
                            <b-form-rating  v-model="item.rating" variant="warning" readonly no-border inline></b-form-rating>
                            <p class="mt-1">{{ +item.quantity }} x $
                                <span class="product__Price">{{ +item.price }}</span>
                            </p>
                            <div class="d-flex justify-content-center align-items-center">
                                <button class="fa fa-plus mr-2 dell__change__qut qut__add"
                                        aria-hidden="true"
                                        @click="changeBasketProduct(item.id, 1, item.title)"
                                ></button>
                                <button class="fa fa-minus mr-3 dell__change__qut qut__remove"
                                        aria-hidden="true"
                                        v-bind:disabled="!(item.quantity > 1)"
                                        @click="changeBasketProduct(item.id, -1, item.title)"
                                ></button>
                                <button name="remove" class="dell__change__qut qut__del fa fa-times-circle"
                                        aria-hidden="true"
                                        @click="changeBasketProduct(item.id, null, item.title)"
                                ></button>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown-divider mx-3"></div>
            </div>
        </template>
    </div>
</template>

<script>

export default {
    props: {
        type: {
            type: String,
            default: 'catalog'
        },
        item: {type: Object},

    },
    data() {
        return {
        };
    },
    computed: {},
    methods: {
        makeToastAddProduct(append = false, variant = 'default', title) {
            this.$bvToast.toast(`Товар "${title}" успешно добавлен в корзину`, {
                title: 'Произошло изменение в корзине!',
                variant: variant,
                autoHideDelay: 4000,
                appendToast: append
            })
        },
        makeToastRemoveProduct(append = false, variant = 'default', title) {
            this.$bvToast.toast(`Товар "${title}" удалён из корзины`, {
                title: 'Произошло изменение в корзине!',
                variant: variant,
                autoHideDelay: 4000,
                appendToast: append
            })
        },
        changeBasketProduct(id, qut = 1, title = '') {
            this.$store.commit('changeLoadItem', 'itemBasket')
            this.$store.dispatch('basket/changeBasketProduct', {'id': id, 'qut': qut})
                .then(() => this.$store.commit('changeLoadItem', 'itemBasket'))
                .then(() => {
                    if (qut === -1 || qut ==  null) {
                        return this.makeToastRemoveProduct(true, 'danger', title)
                    }
                    return this.makeToastAddProduct(true, 'primary', title)
                })
        },

        getOneProduct(id) {
            this.$store.dispatch('products/getProductSingle', id).then(() =>
                this.$router.push({path: `/single-page/${id}`})
            )
        },
    },
    mounted() {


    }
}
</script>

<style lang="scss">
.item_basket {

}


</style>
