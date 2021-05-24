import {fetchMethods} from "@/api/serverApi";
import {urls} from "@/api/urls";
import router from "@/router";

const state = () => ({
    state: {
        userId: localStorage.getItem('user_id') || '',
        user: null,
        profile: null,
        status: null,
        token: localStorage.getItem('token') || '',
    }
})
const getters = {
    authStatus({state}) {
        return state.status
    },
    user({state}) {
        return state.user
    },
    token({state}) {
        return state.token
    },
    user_id({state}) {
         return state.userId
    },
    isAuth({state}) {
        return !!state.token
    }
}

const actions = {
    async loginUser({commit}, content) {
        let data = {};
        data.content = content;
        await fetchMethods.post(urls.userAuth, data)
            .then((data) => {
                commit('setToken', data['auth_token']);
                commit('setUserId', data['user_id'])
            })
            .catch(() => {
                commit('authError');
            })
    },

    async logoutUser({commit}) {
        const token = localStorage.getItem('token');
        await fetchMethods.logout(urls.userLogout, token)
            .then(() => commit('logoutUser'))
    },

    async getUser({commit}, userId) {
        const token = localStorage.getItem('token');
        await fetchMethods.getUser(urls.getUser, token, `id=${userId}`)
            .then(data => {
                commit('setUser', data[0])
            })
    },

    async createUser({commit}, content) {
        let data = {};
        data.content = content
      await fetchMethods.post(urls.createUser, data)
    },

}

const mutations = {
    setToken({state}, token) {
        if (token) {
            localStorage.setItem('token', token);
            state.status = 'success';
        }
    },
    setUserId({state}, id) {
      if (id) {
          localStorage.setItem('user_id', id)
      }
    },
    setUser({state}, user) {
        state.user = user;
    },
    authError({state}) {
        localStorage.removeItem('token');
        localStorage.removeItem('user_id')
        state.status = 'error';
    },
    logoutUser({state}) {
        localStorage.removeItem('token')
        localStorage.removeItem('user_id')
        state.user = null;
        state.status = null;

    }
}

export default {
    state,
    namespaced: true,
    getters,
    actions,
    mutations
}