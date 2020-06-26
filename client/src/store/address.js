import Axios from 'axios'

export const address = {
    state: {
        address: {},
    },
    getters: {
        getAddress(state) {
            return state.address
        },
    },
    mutations: {
        initCart(state, address) {
            Object.assign(state.address ,address);
        },
    },
    actions: {
        addCartToBasket(context, cart) {

            const token = localStorage.getItem('token');

            Axios.post('https://localhost:44360/api/carts',
                cart,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                })
                .then(res => {
                    context.commit('addCart', res.data)
                }).catch(err => {
                    console.log(err);
                })
        },
        deleteCartFromBasket(context, id) {

            const token = localStorage.getItem('token');

            Axios.delete('https://localhost:44360/api/carts/' + id,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                })
                .then(res => {
                    console.log(res.data);
                    context.commit('deleteCart', id)
                }).catch(err => {
                    console.log(err);
                })
        }
    },
}

