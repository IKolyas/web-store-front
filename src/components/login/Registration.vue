<template>
    <div class="container">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Email:"
                label-for="input-1"
                description="Введите адрес электронной почты."
            >
                <b-form-input
                    id="input-1"
                    v-model="form.email"
                    type="email"
                    placeholder="Email"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Ваше Имя:" label-for="input-2">
                <b-form-input
                    id="input-2"
                    v-model="form.username"
                    placeholder="Имя"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Пароль:" label-for="input-3">
                <b-form-input
                    id="input-3"
                    v-model="form.password"
                    type="password"
                    min="8"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Подтвердите пароль:" label-for="input-4">
                <b-form-input
                    id="input-4"
                    v-model="form.confirmPassword"
                    type="password"
                    min="8"
                    required
                ></b-form-input>
            </b-form-group>

            <b-button class="mr-3" type="submit" variant="primary" :disabled="!validatePassword" @click="">Регистрация
            </b-button>
            <b-button type="reset" variant="danger">Очистить</b-button>
        </b-form>
    </div>
</template>

<script>

export default {
    name: "Registration",
    data() {
        return {
            form: {
                email: '',
                username: '',
                password: '',
                confirmPassword: '',
            },
            show: true
        }
    },
    computed: {
        validatePassword() {
            return this.form.password === this.form.confirmPassword
        }
    },
    methods: {
        // messages
        makeToastRegistrationSuccess(append = false, variant = 'default', username) {
            this.$bvToast.toast(`Пользователь с именем "${username}" успешно зарегистрирован!`, {
                title: 'Регистрация пользователя.',
                variant: variant,
                autoHideDelay: 4000,
                appendToast: append
            })
        },
        makeToastRegistrationError(append = false, variant = 'danger', err) {
            this.$bvToast.toast(`Ошибка при регитрации пользователя. ${err}`, {
                title: 'Ошибка регистрации',
                variant: variant,
                autoHideDelay: 4000,
                appendToast: append
            })
        },

        // messages
        onSubmit(event) {
            event.preventDefault();
            delete this.form.confirmPassword;
            this.$store.dispatch('user/createUser', this.form)
                .then(() => this.makeToastRegistrationSuccess(true, 'primary', this.form.username))
                .then(() => this.onReset())
                .then(() => this.$router.push({name: 'Index'}))
                .catch((err) => this.makeToastRegistrationError('true', 'danger', err))
        },
        onReset(event) {
            if (event) event.preventDefault();
            this.form.email = '';
            this.form.name = '';
            this.form.password = '';
            this.form.confirmPassword = '';
        }
    }
}
</script>

<style scoped>

</style>