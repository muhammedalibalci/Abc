import Axios from 'axios'

export const product = {
    state: {
        products: [],
        currentCategoryId: 0
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        getCurrentCategoryId(state) {
            return state.currentCategoryId
        }
    },
    mutations: {
        initProducts(state, products) {
            state.products = products;
        },
        initCategoryId(state, currentCategoryId) {
            state.currentCategoryId = currentCategoryId;
        },

    },

    actions: {
        fetchProducts(context, id = 1) {
            context.commit('initCategoryId', id)
            Axios.get(`https://abc-app-api.azurewebsites.net/api/products/${id}/category`)
                .then(res => {
                    context.commit('initProducts', res.data)
                }).catch(err => {
                    console.log(err);
                })
        },
    },
}

