import { ACTION_TYPES } from './../ActionTypes';

const OrderReducer = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_ORDERS:
            return state;
        case ACTION_TYPES.ADD_ORDER:
            return [
                ...state,
                action.payload
            ];
        case ACTION_TYPES.EDIT_ORDER:
            return state.map(order => {
                if (order.id === action.payload.id) {
                    return action.payload;
                }
                return order;
            });
        case ACTION_TYPES.DELETE_ORDER:
            return state.filter(order => order.id !== action.payload).map(order => order)
        default:
            return state;
    }
}

export default OrderReducer;