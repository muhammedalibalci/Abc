import Axios from 'axios'

export const auth = {
    state: {
        user: {},
        errors: {},
    },
    getters: {
        getErrors(state) {
            return state.errors
        },
        getUser(state) {
            return state.user
        }
    },
    mutations: {
        initUser(state, user) {
            if (localStorage.getItem('token')) {
                const id = localStorage.getItem('Id');
                Axios.get("https://abc-app-api.azurewebsites.net/api/users/" + id)
                    .then(res => {
                        state.user = res.data
                    })
            }
            state.user = user
        },
        initErrors(state, errors) {
            state.errors = errors
        },
        initLogout(state) {
            state.user = ""
        }
    },

    actions: {
        login(context, auth) {
            return new Promise((resolve, reject) => {
                Axios.post(`https://abc-app-api.azurewebsites.net/api/auth/login`, auth)
                    .then((res) => {
                        context.commit('initUser', res.data)
                        localStorage.setItem('token', res.data.token)
                        localStorage.setItem('Id', res.data.id)
                        resolve(true);
                    }).catch(err => {
                        context.commit('initErrors', err.response.data)
                        reject(false);
                    })
            })
        },
        logout(context) {
            localStorage.clear();
            context.commit('initLogout');
        },
        register(context, user) {
            console.log(user);

            return new Promise((resolve, reject) => {
                Axios.post(`https://abc-app-api.azurewebsites.net/api/auth/register`, user)
                    .then((res) => {
                        context.commit('initUser', res.data)
                        localStorage.setItem('token', res.data.token)
                        localStorage.setItem('Id', res.data.id)
                        resolve(true);
                    }).catch(err => {
                        context.commit('initErrors', err.response.data.errors)
                        reject(false);
                    })
            })
        },
    },
}
