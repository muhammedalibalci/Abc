import {
    GET_PRODUCTS,
    GET_PRODUCT,
    GET_CATEGORIES,
    PRODUCT_LOADING,
    GET_ERRORS,
    REMOVE_PRODUCT,
    GET_PRODUCTS_DETAILS
} from "./types";
import {
    URL_GET_PRODUCTS,
    URL_ADMIN_PRODUCT,
    URL_GET_PRODUCTS_BY_CATEGORY,
    URL_GET_PRODUCT_BY_ID
} from "../utils/apiUrl";
import Axios from "axios";


export const getProductById = id => async dispatch => {
    dispatch({ type: PRODUCT_LOADING, payload: true });
    await Axios.get(`${URL_GET_PRODUCTS}/${id}`).then(res => {
        dispatch({ type: PRODUCT_LOADING, payload: false });
        dispatch({ type: GET_PRODUCTS, payload: res.data });
    }).catch(err => {
        dispatch({ type: PRODUCT_LOADING, payload: false });
        dispatch({ type: GET_ERRORS, payload: err.response.data });
    })
};

export const getProductsByCategory = (categoryId = 1) => async dispatch => {

    dispatch({ type: PRODUCT_LOADING, payload: true });
    await Axios.get(`/api/products/${categoryId}/category`).then(res => {
        dispatch({ type: PRODUCT_LOADING, payload: false });
        dispatch({ type: GET_PRODUCTS, payload: res.data });
    }).catch(err => {
        dispatch({ type: PRODUCT_LOADING, payload: false });
        dispatch({ type: GET_ERRORS, payload: err.response });
    })
};

export const getProductDetails = (categoryId = 1) => async dispatch => {
    await Axios.get(`/api/products/productDetail/${categoryId}`).then(res => {
        dispatch({ type: GET_PRODUCTS_DETAILS, payload: res.data });
    }).catch(err => {
        dispatch({ type: GET_ERRORS, payload: err.response });
    })
};