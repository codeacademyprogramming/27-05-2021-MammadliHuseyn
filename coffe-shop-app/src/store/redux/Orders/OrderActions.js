import { ACTION_TYPES } from './../ActionTypes';

export const getOrders = () => {
    return {
        type: ACTION_TYPES.GET_ORDERS
    }
}

export const addOrder = (order) => {
    return {
        type: ACTION_TYPES.ADD_ORDER,
        payload: order
    }
}

export const editOrder = (order) => {
    return {
        type: ACTION_TYPES.EDIT_ORDER,
        payload: order
    }
}

export const deleteOrder = (id) => {
    return {
        type: ACTION_TYPES.DELETE_ORDER,
        payload: id
    }
}