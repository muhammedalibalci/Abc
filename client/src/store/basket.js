import Axios from 'axios'

export const basket = {
    state: {
        carts: [],
    },
    getters: {
        getCarts(state) {
            return state.carts
        }
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
                    context.commit('initCart', res.data)
                }).catch(err => {
                    console.log(err);
                })
        }
    },
}

