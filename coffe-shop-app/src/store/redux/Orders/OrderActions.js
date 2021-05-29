import { ACTION_TYPES } from './../ActionTypes';

const getOrders = () => {
    return {
        type: ACTION_TYPES.GET_ORDERS
    }
}

const addOrder = (order) => {
    return {
        type: ACTION_TYPES.ADD_ORDER,
        payload: order
    }
}