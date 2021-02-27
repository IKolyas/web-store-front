<template>
   <div class="prodHeaders row col-12 d-flex justify-content-between mt-4 mb-3 text-uppercase">
        <div class="row col-5 img-responsive">
            <div class="productDet d-flex">
                <router-link :to="{name: 'SinglePage', params: item}">
                    <img v-if="item.img" :src="item.img[0]['image_path'] + item.img[0]['image_name']" :alt="item.title">
                </router-link>
                <div class="ProdDetText d-flex flex-column ml-3 text-capitalize">
                    <router-link class="item__name" :to="{name: 'SinglePage', params: item}">
                        <h3 class="my-2">{{item.title}}</h3>
                    </router-link>
                    <span>Color:
                        <mark>{{item.color}}</mark>
                    </span>
                    <span>Size:
                        <mark>{{item.size}}</mark>
                    </span>
                </div>
            </div>
        </div>
        <div class="row col-7 d-flex"><span
                class="col-12 col-md-3 d-flex justify-content-center align-items-center">${{+item.price}}</span>
            <div class="ProdHeadInp col-12 col-md-3 d-flex justify-content-center align-items-center">
                <i class="fa fa-plus mx-2 dell__change__qut" aria-hidden="true"
                   @click="changeBasketProduct(item.id)"
                ></i>
                <span class="mx-2">{{ item.quantity }}</span>
                <i class="fa fa-minus mx-2 dell__change__qut" aria-hidden="true"
                   @click="changeBasketProduct(item.id, -1)"
                ></i>
            </div>
            <span class="col-12 col-md-2 pl-md-0 d-flex justify-content-center align-items-center">free</span>
            <span class="col-12 col-md-2 d-flex justify-content-center align-items-center">${{+item.price * +item.quantity}}</span>
             <button name="remove" class="dell__change__qut fa fa-times-circle d-flex col-12 col-md-2 justify-content-center align-items-center"
                            aria-hidden="true"
                            @click="changeBasketProduct(item.id, null)"
             >
                    </button>
        </div>
    </div>
</template>

<script>
    const Item = () => import('./Item.vue');

    export default {
        name: "ItemShopCart",
        components: {
            Item
        },
        data() {
            return {
                qut: 0,
            };
        },
         props: {
            type: {
                type: String,
            },
            item: { type: Object }
        },
        computed: {
        },
        methods: {

            changeBasketProduct(id, qut = 1) {
                this.$store.dispatch('basket/changeBasketProduct', {'id': id, 'qut': qut})
            },

        },
        mounted() {
        }
    }

</script>

<style>
.item__name:hover {
    text-decoration: none;
}
</style>
