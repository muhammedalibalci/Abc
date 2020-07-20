import { AUTH_USER, AUTH_LOADING } from "../actions/types";
import isEmpty from "../utils/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case AUTH_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};