import { add_product, del_product, increment, decrement } from './Action'
const initialState = {
    cart: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case add_product:
            return {
                ...state,
                cart: state.cart.map(product =>
                    product.id === action.payload.id ? { ...product, selected: true } : product,
                ),
            }
        case del_product:
            return {
                ...state,
                cart: state.cart.filter(product => product.id === action.payload)
            }
        case increment:
            state.cart.map(product => (product.id === action.payload ? (product.quantity += 1, true) : false))
            return {
                ...state,
                cart: state.cart
            }
        case decrement:
            state.cart.map(product => (product.id === action.payload ? (product.quantity -= 1, true) : false))
            return {
                ...state,
                cart: state.cart
            }
        default:
            return state
    }
}