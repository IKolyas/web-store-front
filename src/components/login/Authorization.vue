<template>
    <div class="container">
        <b-form @submit="login" @reset="onReset" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Имя пользователя:"
                label-for="username"
            >
                <b-form-input
                    id="username"
                    v-model="form.username"
                    type="text"
                    placeholder="Username"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-2"
                label="Пароль:"
                label-for="password"
            >
                <b-form-input
                    id="password"
                    v-model="form.password"
                    type="password"
                    required
                ></b-form-input>
            </b-form-group>
            <div class="d-flex justify-content-start align-items-center">
                <b-overlay
                    :show="$store.getters['loadItemShow'].itemLogin"
                    variant="primary"
                    rounded="sm"
                    opacity="0.6"
                    spinner-small
                    spinner-variant="primary"
                    class="d-inline-block"
                >
                    <b-button type="submit" variant="primary" class="m-2">Войти</b-button>
                </b-overlay>
                <b-button type="reset" variant="danger">сбросить</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>

export default {
    name: "Authorization",
    data() {
        return {
            form: {
                username: '',
                password: '',
            },
            show: true
        }
    },
    methods: {
        makeToastLoginMessage(append = false, variant = 'default', text = '') {
            this.$bvToast.toast(text, {
                title: 'Авторизация',
                variant: variant,
                autoHideDelay: 4000,
                appendToast: append
            })
        },
        login(event) {
            event.preventDefault()
            this.$store.commit('changeLoadItem', 'itemLogin')
            this.$store.dispatch('user/loginUser', this.form)
                .then(() => this.$store.dispatch('user/getUser', this.$store.getters['user/user_id']))
                .then(() => {
                    this.makeToastLoginMessage(true, 'primary', `${this.$store.getters['user/user'].username}, Вы успешно вошли в личный кабинет!`);
                    if (this.$route.path !== '/account' && this.$store.getters['user/isAuth']) {
                        this.$router.push({name: 'Account'})
                    }
                })
                .catch(() => {
                    this.makeToastLoginMessage(true, 'danger', `Ошибка комбинации логин/пароль`);
                })
                .finally(() => this.$store.commit('changeLoadItem', 'itemLogin'))

        },
        onReset(event) {
            event.preventDefault()
            // Reset our form values
            this.form.username = ''
            this.form.password = null
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        }
    },
    mounted() {
    }
}
</script>

<style scoped>

</style>