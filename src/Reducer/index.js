import {combineReducers} from 'redux'
import productReducer from './productReducer';
import CartReducer from './CartReducer';

export const allReducer = combineReducers({
    product : productReducer,
    cart : CartReducer
})

