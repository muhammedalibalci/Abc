import { GET_CUSTOMER, CLEAR_CUSTOMER, CUSTOMER_LOADING, GET_ERRORS } from './types';
import { URL_CUSTOMER } from '../utils/apiUrl';
import Axios from 'axios';

const token = localStorage.getItem('token')

export const getCustomer = (id) => async dispatch => {
    dispatch({ type: CUSTOMER_LOADING, payload: true });
    await Axios.get(`${URL_CUSTOMER}/${id}`).then(res => {
        dispatch({ type: GET_CUSTOMER, payload: res.data });
    }).catch(err => {
        console.log(err);
    })
}

export const addCustomerAddress = addressData => async dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({ type: CUSTOMER_LOADING, payload: true });
         Axios.post(`${URL_CUSTOMER}/address`, addressData, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            dispatch({ type: GET_CUSTOMER, payload: res.data });
            resolve(true)
        }).catch(err => {
            console.log(err);
            reject(false)
        })
    })
}

export const deleteCustomerAddress = id => async dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({ type: CUSTOMER_LOADING, payload: true });
         Axios.delete(`${URL_CUSTOMER}/${id}/address`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            dispatch({ type: GET_CUSTOMER, payload: res.data });
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