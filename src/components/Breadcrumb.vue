<template>
    <nav aria-label="breadcrumb" class="container">
        <div class="news row flex-column flex-sm-row container justify-content-between align-items-center pt-5 pb-5 mx-0">
            <div class="newsAr">
                <h2>news arrivals</h2>
            </div>
            <ol class="newsNav d-flex">
                <template v-if="type === 'single'">
                    <li class="breadcrumb-item" @click="$router.push({name: 'Index'})">
                        Главная
                    </li>
                    <li class="breadcrumb-item d-flex justify-content-center align-items-center"
                        @click="$router.go(-1)">
                        <i class="fa fa-arrow-left" aria-hidden="true"></i>
                    </li>
                </template>
                <template v-else>
                    <li class="breadcrumb-item" @click="$router.push({name: 'Index'})">
                        Главная
                    </li>
                    <li v-if="category.title" class="breadcrumb-item"
                        aria-current="page"
                        v-bind:class="{ newsNavLinkActive: !subcategory.title}"
                        @click="updateCategory({category: category.id})"
                    >{{category.title}}
                    </li>

                    <li v-if="subcategory.title" class="breadcrumb-item"
                        aria-current="page"
                        v-bind:class="{ newsNavLinkActive: subcategory.title}"
                        @click="updateCategory({category: category.id, subcategory: subcategory.id})"

                    >{{subcategory.title}}
                    </li>
                </template>
            </ol>
        </div>
    </nav>
</template>

<script>

    export default {
        name: 'Breadcrubm',
        props: {
            type: {
                type: String,
            },
            item: {type: Object}
        },
        data: () => {
            return {
                categoryObj: '',
                subcategoryObj: '',
                sub: false,
            }
        },
        computed: {
            category() {
                let categoryId = this.$store.getters['products/filters'].category;
                let category = this.$store.getters['products/dropdownCategory']
                    .find(item => item.id === categoryId)
                return category ? {
                    'title': category.title,
                    'id': category.id
                } : '';
            },
            subcategory() {
                let subcategoryId = this.$store.getters['products/filters'].subcategory;
                let subcategory = ''
                this.$store.getters['products/dropdownCategory'].forEach((item) => {
                    item.sub.forEach(sub => {
                        if (sub.id === subcategoryId) {
                            subcategory = sub
                        }
                    })
                })
                return subcategory ? {'title': subcategory.title, 'id': subcategory.id} : ''
            }
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
        }
    }
</script>

<style>

</style>
