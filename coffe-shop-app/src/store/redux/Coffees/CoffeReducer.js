import { ACTION_TYPES } from './../ActionTypes';

const CoffeeReducer = (state = [], action) => {
    switch (action.type) {
        case ACTION_TYPES.GET_COFFEES:
            return [
                ...state,
                ...action.payload
            ]


        default:
            return state;
    }
}

export default CoffeeReducer;