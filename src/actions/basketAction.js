import { ADD_CART, CART_LOADING, GET_CARTS, DELETE_CART, GET_ERRORS, UPDATE_CART } from "./types";
import { URL_GET_CART } from "../utils/apiUrl";
import Axios from "axios";
const token = localStorage.getItem('token');

export const addCartToBasket = cart => async dispatch => {
   return new Promise(function (resolve, reject) {
         Axios.post(URL_GET_CART, cart, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                dispatch({ type: ADD_CART, payload: res.data });
                resolve(true)
            }).catch(error => {
                dispatch({ type: GET_ERRORS, payload: { error } });
                reject(false)
            })
    })
};

export const deleteCartFromBasket = cartId => async dispatch => {
   return new Promise(function (resolve, reject) {
        Axios.delete(`${URL_GET_CART}/${cartId}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                dispatch({ type: DELETE_CART, payload: res.data });
                resolve(true)
            }).catch(error => {
                dispatch({ type: GET_ERRORS, payload: { error } });
                reject(false)
            })
    })

};

export const updateCart = cart => async dispatch => {
    await Axios.put(URL_GET_CART, cart, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => {
            dispatch({ type: UPDATE_CART, payload: res.data });
        }).catch(error => {
            dispatch({ type: GET_ERRORS, payload: { error } });
        })
};

export const getCarts = () => async dispatch => {
    dispatch({ type: CART_LOADING, payload: true });
    await Axios.get(URL_GET_CART, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(res => {
            dispatch({ type: CART_LOADING, payload: false });
            dispatch({ type: GET_CARTS, payload: res.data });
        }).catch(error => {
            dispatch({ type: CART_LOADING, payload: false });
            dispatch({ type: GET_ERRORS, payload: { error } });
        })
};