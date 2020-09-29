import { add_product, del_product } from './Action'
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
        case del_product:
            return {
                
                items : state.items.filter(
                    (item) => item.id !== action.payload
                )
            }
        
        default:
            return state
    }
}