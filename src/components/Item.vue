<template>
    <div>
        <template v-if="type === 'catalog'">
            <div class="prodCard card col-12 col-md-6 col-lg-4 mx-0 px-0 mb-5 rounded-sm border-light"
                 v-show="item"
            >
                <div class="psevProdCard mx-0 px-0">
                    <button class="d-flex justify-content-around"
                            @click="itemChange(item.id)"
                    >
                        <i class="fas fa-cart-plus"></i>Add to Cart
                    </button>
                </div>
                    <img v-if="item.img" :src="item.img[0]['image_path'] + item.img[0]['image_name']" class="card-img-top" :alt="item.title">
                <div class="psevProdCardBody card-body d-flex flex-column align-content-start pb-0 px-3">

                    <a href="#" class="card-text" @click="getOneProduct(item.id)">{{ item.title }}</a>

                    <div class="d-flex justify-content-between align-items-center">
                        <p class="d-flex justify-content-between">${{ item.price }}</p>


                        <!-- add product test -->
                        <button class="d-flex d-md-none justify-content-around"
                                @click="itemChange(item.id)"
                        >
                            Add to Cart
                            <i class="fas fa-cart-plus pl-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </template>

        <template v-if="type === 'basket'">
            <div v-show="item">
                <div class="d-flex px-3 justify-content-between align-items-center py-1">
                        <img :src="item.img[0]['image_path'] + item.img[0]['image_name']" :alt="item.title"
                             @click="getOneProduct(item.id)"
                        >
                    <div class="d-flex flex-column justify-content-center align-items-center product__text">
                        <h3 class="mb-0">{{item.title}}</h3>
                        <div class="stars py-0">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                        </div>
                        <p class="mt-1">{{+item.quantity}} x $
                            <span class="product__Price">{{+item.price}}</span>
                        </p>
                        <div class="d-flex justify-content-center align-items-center">
                            <i class="fa fa-plus mx-2 dell__change__qut" aria-hidden="true"
                               @click="itemChange(item.id)"
                            ></i>
                            <i class="fa fa-minus mx-2 dell__change__qut" aria-hidden="true"
                                @click="itemChange(item.id, -1)"
                            ></i>
                        </div>
                    </div>
                    <button name="remove" class="dell__change__qut fa fa-times-circle"
                            aria-hidden="true"
                            @click="itemChange(item.id, null)"
                    >
                    </button>
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
        methods: {

            itemChange(id, qut = 1) {
                this.$store.commit('productChange', {'id': id, 'qut': qut})
            },

            getOneProduct(id) {
                this.$store.dispatch('getProductSingle', id).then(() =>
                    this.$router.push({path: `/single-page/${id}`})
                )
            },
        },
        mounted() {


        }
    }
</script>

<style>

</style>
