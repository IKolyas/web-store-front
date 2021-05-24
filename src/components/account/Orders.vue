<template>
    <b-table striped hover :items="items" :fields="fields"></b-table>
</template>

<script>
export default {
    name: "Orders",
    data() {
        return {
            fields: [
                {
                    key: 'id',
                    sortable: false,
                    label: '#'
                },
                {
                    key: 'created_at',
                    sortable: true,
                    label: 'дата создания'
                },
                {
                    key: 'quantity',
                    sortable: true,
                    label: 'количество товаров'
                },
                {
                    key: 'sum',
                    sortable: true,
                    label: 'сумма заказа'
                },
                {
                    key: 'status',
                    sortable: true,
                    label: 'статус'
                },
                {
                    key: 'update_at',
                    sortable: true,
                    label: 'дата изменения'
                },
                {
                    key: 'actions',
                    label: 'действия',
                    sortable: false,
                    // Variant applies to the whole column, including the header and footer
                    variant: 'danger'
                }
            ],
            items: [
                {id: 1, created_at: '12.12.2020',quantity: 12, sum: 4215, status: 'pay', update_at: '13.12.2020', actions: 'dell'},
                {id: 2, created_at: '14.14.2020',quantity: 1, sum: 2112, status: 'pay', update_at: '13.12.2020', actions: 'dell'},
            ]
        }
    },

}
</script>

<style scoped>

</style>