<template>
    <transition name="basket" >
            <div class="basket__Product basket__click" id="basket__click">
                <div class="py-2">
                    <!-- BASKETITEMS -->
                    <Item v-for="item of this.$store.getters['basket/basket']" type="basket" :item="item" :key="item.id"/>
                </div>
                <div class="row mx-3 d-flex justify-content-between my-2 ">
                    <span>Итого: </span>
                    <span class="text-muted">${{countingGoods}}</span>
                    <router-link :to="{name: 'CheckOut'}">
                        <button
                                class="btn btn-primary btn-lg my_account mt-4 d-flex align-items-center justify-content-center"
                                role="button"
                                aria-pressed="true"
                                :disabled="disabled"
                        >Оформить заказ</button>
                    </router-link>
                    <router-link :to="{name: 'ShoppingCart'}">
                        <button
                                class="btn btn-primary btn-lg my_account my-2 d-flex align-items-center justify-content-center"
                                role="button"
                                aria-pressed="true"
                                :disabled="disabled"
                        >К корзине</button>
                    </router-link>
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
                return !(this.$store.getters['basket/basket'] && this.$store.getters['basket/basket'].length > 0)
            },
        },

        methods: {
            amount() {
                let sum = 0
                this.$store.getters['basket/basket'].forEach((item) => {
                    sum += +item.price * +item.quantity
                })
                return sum
            }
        },

        mounted() {
            this.$store.dispatch("basket/getBasket");
        },
    };
</script>

<style>
</style>