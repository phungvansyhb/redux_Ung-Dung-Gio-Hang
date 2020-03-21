import * as types from './Types'

// Cart-action
export const addToCart = (product , num ) => ({
    type: types.ADD_TO_CART,
    payload :  {product,num} 
})
export const editNumberProduct = (product,type) => ({
    type: types.EDIT_PRODUCTS,
    payload : {product , type}
})

export const removeProduct = (product) => ({
    type: types.REMOVE_PRODUCT,
    payload : product
})
