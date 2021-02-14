<template>
    <transition name="basket">
        <div>
            <div class="basket__Product">
                <div class="py-2">
                    <!-- BASKETITEMS -->
                    <Item v-for="item of $store.getters.basket" type="basket" :item="item" :key="item.id"/>
                </div>
                <div class="row mx-3 d-flex justify-content-between my-2">
                    <span>TOTAL</span>
                    <span class="text-muted">${{countingGoods}}</span>
                    <router-link :to="{name: 'CheckOut'}">
                        <button
                                class="btn btn-primary btn-lg my_account mt-4 d-flex align-items-center justify-content-center"
                                role="button"
                                aria-pressed="true"
                                :disabled="disabled"
                        >Checkout</button>
                    </router-link>
                    <router-link :to="{name: 'ShoppingCart'}">
                        <button
                                class="btn btn-primary btn-lg my_account my-2 d-flex align-items-center justify-content-center"
                                role="button"
                                aria-pressed="true"
                                :disabled="disabled"
                        >Go to cart</button>
                    </router-link>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
    const Item = () => import('./Item.vue');

    export default {
        name: "basket",

        components: {
            Item,
        },

        data() {
            return {

            };
        },

        computed: {
            countingGoods() {
                return this.amount()
            },
            disabled() {
                return !(this.$store.state.basket.basket && this.$store.state.basket.basket.length > 0)
            }
        },

        methods: {
            amount() {
                let sum = 0
                this.$store.state.basket.basket.forEach((item) => {
                    sum += +item.price * +item.quantity
                })
                return sum
            }
        },

        mounted() {

        },
    };
</script>

<style>
</style>