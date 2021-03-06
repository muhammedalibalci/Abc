import {
    GET_CATEGORIES,
    CATEGORY_LOADING,
    GET_ERRORS
} from "./types";
import { URL, URL_GET_CATEGORIES } from "../utils/apiUrl";
import Axios from "axios";

export const getCategories = () => async dispatch => {
    dispatch({ type: CATEGORY_LOADING, payload: true });
    await Axios.get(URL+URL_GET_CATEGORIES).then(res => {
        dispatch({ type: CATEGORY_LOADING, payload: false });
        dispatch({ type: GET_CATEGORIES, payload: res.data });
    }).catch(error => {
        dispatch({ type: GET_ERRORS, payload: error });
        dispatch({ type: CATEGORY_LOADING, payload: false });
    })
};