import * as types from '../Action/Types'


var data = (localStorage.getItem("cart")) ? JSON.parse(localStorage.getItem("cart")) : [];

const initialState = data;

function CheckProduct(name, state) {
    let x = 0;
    state.forEach(element => {
        if (element.product.name.trim() === name)
            x += 1;
    });
    return x
}
function addToExistProduct(name, state) {
    let x = [];
    x = state.map((item) => {
        if (item.product.name.trim() === name) {
            item.num += 1;
            return item
        }
        else return item
    })
    return x
}
export default (state = initialState, { type, payload }) => {
    switch (type) {

        case types.ADD_TO_CART:
            let name = payload.product.name.trim();
            let a = CheckProduct(name, state);
            (a === 0) ? state = state.concat(payload) : state = addToExistProduct(name, state);
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state]

        case types.EDIT_PRODUCTS:
            if(payload.type ==="increase"){
                state = state.map( (item) => {
                    if(item.product.name.trim() === payload.product.product.name.trim()){
                        item.num +=1;
                    } 
                    return item
                })
            }else{
                state = state.map( (item) => {
                    if(item.product.name.trim() === payload.product.product.name.trim()){
                        item.num -=1;
                    } 
                    return item;
                })
            }
            localStorage.setItem('cart' , JSON.stringify(state))
            return [...state]

        case types.REMOVE_PRODUCT:
            
            state = state.filter(  (item) => {
                return item.product.name.trim() !== payload.product.name.trim()
            })
            return [...state]

        default:
            return state
    }
}
