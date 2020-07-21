import { GET_CARTS, DELETE_CART, ADD_CART, CART_LOADING, UPDATE_CART } from "../actions/types";
const initialState = {
    carts: [],
    loading: false,
    errors: {}
};
export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CARTS:
            return {
                ...state,
                carts: action.payload,
                loading: false
            };
        case ADD_CART:
            return {
                ...state,
                carts:  state.carts.concat(action.payload)   
            };
        case UPDATE_CART:
            return {
                ...state,
                carts: state.carts.map(
                    (content, i) => content.id === action.payload.id ? { ...content, quantity: action.payload.quantity }
                        : content)
            };
        case DELETE_CART:
            return {
                ...state,
                carts: [...state.carts.filter(cart => cart.id !== action.payload.id)],
            }
        case CART_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        default:
            return state;
    }
};