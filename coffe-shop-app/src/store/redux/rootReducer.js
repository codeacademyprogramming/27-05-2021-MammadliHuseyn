import { combineReducers } from 'redux';
import  CoffeeReducer  from './Coffees/CoffeReducer';
import OrderReducer from './Orders/OrderReducer';


export const rootReducer = combineReducers({
    CoffeeReducer,
    OrderReducer
})