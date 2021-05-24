<template>
    <div class="container">
        <b-card bg-variant="light">
            <b-form-group
                class="mb-0 text-primary"
                label-cols-lg="3"
                label="Информация о пользователе"
                label-size="lg"
                label-class="font-weight-bold pt-0"
            >
                <b-form-group
                    class="text-success"
                    label="Имя Пользователя"
                    label-for="username"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-input id="username" type="text" :value="getUser.username || ''"  disabled></b-form-input>
                </b-form-group>

                <b-form-group
                    class="text-success"
                    label="Email"
                    label-for="email"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-input id="email" type="email" :value="getUser.email || ''" disabled></b-form-input>
                </b-form-group>
            </b-form-group>
        </b-card>
        <b-card bg-variant="light">
            <b-form-group
                class="mb-0 text-primary"
                label-cols-lg="3"
                label="Дополнительная информация"
                label-size="lg"
                label-class="font-weight-bold pt-0"
            >
                <b-form-group
                    class="text-success"
                    label="Пол"
                    label-for="gender"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-input id="gender" type="text" :value="getUser.profile['gender'] || ''"></b-form-input>
                </b-form-group>

                <b-form-group
                    class="text-success"
                    label="Дата рождения"
                    label-for="birthday"
                    label-cols-sm="3"
                    label-align-sm="right"
                >
                    <b-form-input id="birthday" type="date" :value="getUser.profile['birthday'] || ''"></b-form-input>
                </b-form-group>
            </b-form-group>
        </b-card>
    </div>
</template>

<script>
export default {
    name: 'Profile',
    data() {
        return {

        };
    },
    methods: {
        // updateProfile() {
        //     alert('Your data: ' + JSON.stringify(this.user));
        // }
    },
    computed: {
        getUser() {
            return this.$store.getters['user/user']
        }
    }
};
</script>

<style scoped>

</style>