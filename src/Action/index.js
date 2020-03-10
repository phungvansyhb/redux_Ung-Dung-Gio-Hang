import * as types from './Types'

// Cart-action
export const addToCart = (product , num) => ({
    type: types.ADD_TO_CART,
    product : product,
    num : num
})
