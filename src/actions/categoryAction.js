import {
    GET_CATEGORIES,
    CATEGORY_LOADING,
    GET_ERRORS
} from "./types";
import { URL_GET_CATEGORIES } from "../utils/apiUrl";
import Axios from "axios";

export const getCategories = () => async dispatch => {
    dispatch({ type: CATEGORY_LOADING, payload: true });
    await Axios.get(URL_GET_CATEGORIES).then(res => {
        dispatch({ type: CATEGORY_LOADING, payload: false });
        dispatch({ type: GET_CATEGORIES, payload: res.data });
    }).catch(error => {
        const err = JSON.parse(error.message);
        dispatch({ type: GET_ERRORS, payload: err });
        dispatch({ type: CATEGORY_LOADING, payload: false });
    })
};