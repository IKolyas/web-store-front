<template>
    <div class="container min-vh-100">
        <div>
            <h3>Профиль пользователя <b-badge>{{ $store.getters['user/user'].username }}</b-badge></h3>
            <b-tabs v-if="$store.getters['user/user'] && $store.getters['user/token']"
                    active-nav-item-class="font-weight-bold text-uppercase"
                    active-tab-class="font-weight-bold text-uppercase"
                    content-class="mt-3"
            >
                <b-tab title="Профиль">
                    <Profile/>
                </b-tab>
                <b-tab title="Заказы">
                    <Orders/>
                </b-tab>

            </b-tabs>
        </div>
    </div>
</template>

<script>
import Profile from "@/components/account/Profile";
import Orders from "@/components/account/Orders";

export default {
    name: "Account",
    components: {Orders, Profile},
    data() {
        return {};
    },
    methods: {}

}
</script>

<style scoped lang="scss">
.nav-link {
    &:hover {
        cursor: pointer;
    }
}
</style>