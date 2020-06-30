import Axios from 'axios'

export const basket = {
    state: {
        carts: [],
    },
    getters: {
        getCarts(state) {
            return state.carts
        },
    },
    mutations: {
        initCart(state, cart) {
            if (state.carts.length === 0) {

                const token = localStorage.getItem('token');

                Axios.get('https://localhost:44360/api/carts', {
                    headers: {
                        'Authorization': 'Bearer ' + token
                    }
                })
                    .then(res => {
                        let newCarts = [...res.data]
                        state.carts = newCarts;
                    })
            }
            if (cart) {
                state.carts.push(cart)
            }
        },
        emptyCart(state) {
            state.carts = []
        },
        addCart(state, cart) {
            state.carts.push(cart)
        },
        deleteCart(state, id) {
            let index = state.carts.findIndex(x => x.id == id)
            if (index > -1) {
                state.carts.splice(index, 1)
            }
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
        },
        updateCart(context, cart) {
            const token = localStorage.getItem('token');

            Axios.put('https://localhost:44360/api/carts',
                cart,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                })
                .then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                })
        }
    },
}

