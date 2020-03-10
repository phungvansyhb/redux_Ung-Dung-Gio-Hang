import * as types from '../Action/Types'

// var data = JSON.parse(localStorage.getItem("cart"));

const initialState = [
    {
        product: {
             id:3,
            img: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
            name: "Iphone 8 ",
            rate: 5,
            descrip: " Sản phẩm do apply sản xuất",
            cost: "30$"
        },
        num : 5
    }
]

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case types.ADD_TO_CART:
        console.log(payload)
        return { ...state }

    default:
        return state
    }
}
