<template>
        <div  class="products__catalog row d-flex col-12 p-0 mx-0 my-2 justify-content-around justify-content-lg-between"

        >
            <transition-group name="list"
                              class="row col-12 d-flex justify-content-center justify-content-lg-between m-0 p-0">
                <Item
                        class="list-item"
                        v-for="item in $store.getters['products/filterProducts']"
                        type="catalog"
                        :item="item"
                        :key="item.id"
                />
            </transition-group>
        </div>
</template>

<script>
import Header from "./Header";
    const Item = () => import('./Item.vue');

    export default {
        components: {
            Item,
            Header
        },
        props: {
            type: {
                type: String,
                default: 'index'
            },
        },
        data() {
            return {

            }
        },
        computed: {

        },

        methods: {
            // setPage(page) {
            //     this.$store.state.catalogUrl = page
            //     this.$store.dispatch('getCatalog')
            //
            //
            // },

        },
        mounted() {
            this.$store.dispatch('products/getCatalog')
        }
    }
</script>

<style scoped>
.products__catalog {
    min-height: 100%;
}
</style>
