import { add_product, del_product, increment, decrement } from './Action'
const initialState = {
    items: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case add_product:
            const allCartItems = state.items;
            const cartItemIndex = allCartItems.findIndex(item => item.id === action.payload.id)
            if(cartItemIndex !== -1){ // if the product is present in the cart
                state.items[cartItemIndex] = {
                    ...action.payload,
                    qty : state.items[cartItemIndex].qty + 1
                }
            }else{
                state.items.push(action.payload)
            }
        // case del_product:
        //     return {
        //         ...state,
        //         cart: state.cart.filter(product => product.id === action.payload)
        //     }
        // case increment:
        //     state.cart.map(product => (product.id === action.payload ? (product.quantity += 1, true) : false))
        //     return {
        //         ...state,
        //         cart: state.cart
        //     }
        // case decrement:
        //     state.cart.map(product => (product.id === action.payload ? (product.quantity -= 1, true) : false))
        //     return {
        //         ...state,
        //         cart: state.cart
        //     }
        default:
            return state
    }
}