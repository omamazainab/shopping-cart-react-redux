export const add_product = 'ADD_PRODUCT';
export const del_product = 'DELETE_PRODUCT';
export const increment = 'INCREMENT'
export const decrement = 'DECREMENT'

export const add_product_action = (product) => (
    {
        type: add_product,
        payload: product,
        
    }
)

export const delete_product_action = (id) => (
    {
        type: del_product,
        payload: id
    }
)


