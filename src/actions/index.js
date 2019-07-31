import * as actions from '../constants/ActionsTypes'
export const actAddToCart = (product, quantity) => {
    return {
        type: actions.ADD_TO_CART,
        product,
        quantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: actions.CHANGE_MESSAGE,
        message
    }
}

export const actDeleteProductInCart = (product) => {
    return {
        type: actions.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const actUpdateProductInCart = (product, quantity) => {
    return {
        type: actions.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}