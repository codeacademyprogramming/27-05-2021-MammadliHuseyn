import axios from 'axios';
import { ACTION_TYPES } from './../ActionTypes';

export const getCoffees = () => {
    return (dispatch) => {
        return axios.get("./data/coffees.json").then(
            ({data}) => dispatch({ type: ACTION_TYPES.GET_COFFEES, payload: data }),
            err => console.log(err)
        );
    };
};