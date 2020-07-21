import { AUTH_USER, GET_ERRORS,  AUTH_LOADING } from "./types";
import jwtDecode from "jwt-decode";
import { URL_REGISTER, URL_LOGIN } from "../utils/apiUrl";
import Axios from "axios";


export const login = userData => async dispatch => {
  dispatch({ type: AUTH_LOADING, payload: true });
  await Axios.post(URL_LOGIN, userData)
    .then(res => {
      const token = res.data.token
      const user = jwtDecode(token);
      localStorage.setItem("token", token);
      dispatch({ type: AUTH_LOADING, payload: false });
      dispatch({ type: AUTH_USER, payload: user });
    }).catch(error => {
      dispatch({ type: AUTH_LOADING, payload: false });
      dispatch({ type: GET_ERRORS, payload: { error: error.response.data.message } });
    })
};


export const signUp = userData => async dispatch => {
  dispatch({ type: AUTH_LOADING, payload: true });
  await Axios.post(URL_REGISTER, userData)
    .then(res => {
      const token = res.data.token
      const user = jwtDecode(token);
      localStorage.setItem("token", token);
      dispatch({ type: AUTH_LOADING, payload: false });
      dispatch({ type: AUTH_USER, payload: user });
    }).catch(error => {
      dispatch({ type: AUTH_LOADING, payload: false });
      dispatch({ type: GET_ERRORS, payload: error.response.data.errors });
    })
};

export const logout = () => dispatch => {
  localStorage.removeItem("token");
  dispatch({
    type: AUTH_USER,
    payload: {}
  });
};