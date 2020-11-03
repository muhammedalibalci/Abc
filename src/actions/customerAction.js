import {
    GET_CUSTOMER,
    CLEAR_CUSTOMER,
    CUSTOMER_LOADING,
    GET_ERRORS,
    ADD_ADDRESS_LOADING,
    CLEAR_ERRORS
} from './types';
import { URL, URL_CUSTOMER } from '../utils/apiUrl';
import Axios from 'axios';

const token = localStorage.getItem('token')

export const getCustomer = (id) => async dispatch => {
    dispatch({ type: CUSTOMER_LOADING, payload: true });
    dispatch({ type: CLEAR_ERRORS });
    await Axios.get(URL+`${URL_CUSTOMER}/${id}`).then(res => {
        dispatch({ type: GET_CUSTOMER, payload: res.data });
    }).catch(err => {
        console.log(err);
    })
}

export const addCustomerAddress = addressData => async dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({ type: ADD_ADDRESS_LOADING, payload: true });
        Axios.post(URL+`${URL_CUSTOMER}/address`, addressData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            dispatch({ type: GET_CUSTOMER, payload: res.data });
            dispatch({ type: ADD_ADDRESS_LOADING, payload: false });
            resolve(true)
        }).catch(err => {
            dispatch({ type: CLEAR_ERRORS });
            dispatch({ type: ADD_ADDRESS_LOADING, payload: false })
            dispatch({ type: GET_ERRORS, payload: err.response.data });
            reject(false)
        })
    })
}

export const deleteCustomerAddress = id => async dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({ type: CUSTOMER_LOADING, payload: true });
        Axios.delete(URL+`${URL_CUSTOMER}/${id}/address`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            resolve(true)
        }).catch(err => {
            console.log(err);
            reject(false)
        })
    })
}

export const clearCustomer = () => dispatch => {
    dispatch({ type: CLEAR_CUSTOMER, payload: null })
}