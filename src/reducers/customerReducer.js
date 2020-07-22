import { GET_CUSTOMER, CUSTOMER_LOADING, CLEAR_CUSTOMER, ADD_ADDRESS_LOADING } from '../actions/types';

const initialState = {
    customer: {},
    loading: false,
    add_loading:false,
    errors: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CUSTOMER:
            return {
                ...state,
                customer: action.payload,
                loading: false
            }
        case CUSTOMER_LOADING:
            return {
                ...state,
                loading: action.payload
            };
        case ADD_ADDRESS_LOADING:
            return {
                ...state,
                add_loading: action.payload
            }
        case CLEAR_CUSTOMER:
            return {
                ...state,
                customer: action.payload
            }
        default: return state;
    }
}