<template>
    <div class="container min-vh-100">
        <div>
            <b-tabs
                active-nav-item-class="font-weight-bold text-uppercase"
                active-tab-class="font-weight-bold text-uppercase"
                content-class="mt-3"
            >
                <b-tab title="Вход" v-bind:active="!isActiveForm">
                    <Authorization/>
                </b-tab>
                <b-tab title="Регистрация" v-bind:active="isActiveForm">
                    <Registration @changeForm="changeForm"/>
                </b-tab>
            </b-tabs>
        </div>
    </div>
</template>

<script>
import Registration from "@/components/login/Registration";
import Authorization from "@/components/login/Authorization";

export default {
    name: "Login",
    components: {Authorization, Registration},
    data() {
        return {
            createUserForm: false,
        };
    },
    computed: {
        isActiveForm() {
            return this.createUserForm;
        },
    },
    methods: {
        changeForm() {
            this.createUserForm = !this.createUserForm;
        }
    },
}
</script>

<style scoped lang="scss">
.nav-link {
    &:hover {
        cursor: pointer;
    }
}
</style>