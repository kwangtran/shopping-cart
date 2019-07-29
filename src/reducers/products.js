import * as actions from '../actions/index'
const initialState = [
    {
        id: 1,
        name: 'Iphone',
        image: '',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 5
    },
    {
        id: 2,
        name: 'SamSung',
        image: '',
        description: 'Sản phẩm do SamSung sản xuất',
        price: 400,
        inventory: 2
    },
    {
        id: 3,
        name: 'Sony',
        image: '',
        description: 'Sản phẩm do Sony sản xuất',
        price: 450,
        inventory: 5
    }
]

const products = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}
export default products;