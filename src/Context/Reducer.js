import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:
    {
        add_product: (state, action) => {
            const allCartItems = state.items;
            const cartItemIndex = allCartItems.findIndex(item => item.id === action.payload.id)
            if (cartItemIndex !== -1) { // if the product is present in the cart
                state.items[cartItemIndex] = {
                    ...action.payload,
                    qty: state.items[cartItemIndex].qty + 1
                }
            } else {
                state.items.push(action.payload)
            }
        },
        del_product: (state, action) => {
                
                state.items = state.items.filter(
                    (item) => item.id !== action.payload
                )
        },
        clear_cart: (state,action) => {
            state.items = []
        }

    }

})

export const { add_product, del_product, clear_cart } = counterSlice.actions
export default counterSlice.reducer

