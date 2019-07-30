import * as actions from '../actions/index'
import * as types from '../constants/ActionsTypes'
var data = JSON.parse(localStorage.getItem('CART'));

const initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone',
            image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description: 'Sản phẩm do Apple sản xuất',
            price: 500,
            inventory: 5,
            rating: 3
        },
        quantity: 2
    },
    {
        product: {
            id: 2,
            name: 'SamSung',
            image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
            description: 'Sản phẩm do SamSung sản xuất',
            price: 400,
            inventory: 2,
            rating: 4
        },
        quantity: 21
    }
]

const cart = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state]
        default:
            return [...state];
    }
}
export default cart;