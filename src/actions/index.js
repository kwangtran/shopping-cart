import * as actions from '../constants/ActionsTypes'
export const actAddToCart = (product, quantity) => {
    return {
        type: actions.ADD_TO_CART,
        product,
        quantity
    }
}