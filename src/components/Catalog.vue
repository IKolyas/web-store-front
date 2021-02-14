<template>
        <div class="row d-flex col-12 p-0 mx-0 my-2 justify-content-around justify-content-lg-between"
             v-if="$store.getters.filterCatalog"
        >
            <transition-group name="list"
                              class="row col-12 d-flex justify-content-center justify-content-lg-between m-0 p-0">
                <Item
                        class="list-item"
                        v-for="item in $store.getters.filterCatalog"
                        type="catalog"
                        :item="item"
                        :key="item.id"
                />
            </transition-group>
        </div>
</template>

<script>

    const Item = () => import('./Item.vue');

    export default {
        components: {
            Item,
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
            // this.$store.dispatch('getCatalog')
        }
    }
</script>

<style>

</style>
