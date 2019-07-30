import * as actions from '../actions/index'
import * as Types from '../constants/ActionsTypes'
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
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case Types.ADD_TO_CART:
            var index = findProductInCart(state, product);
            console.log(index)
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            return [...state]
        default:
            return [...state];
    }
}

var findProductInCart = (cart, product) => {
    console.log(cart)
    var index = -1;
    if (cart.length > 0) {
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}
export default cart;