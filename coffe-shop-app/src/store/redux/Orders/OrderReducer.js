import { ACTION_TYPES } from './../ActionTypes';

const OrderReducer = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_ORDERS:
            return state;
        case ACTION_TYPES.ADD_ORDER:
            return [
                ...state,
                action.payload
            ]

        default:
            return state;
    }
}

export default OrderReducer;