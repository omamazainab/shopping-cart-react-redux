import React from 'react'
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux'

const Product = () => {

    const { slug } = useParams();
    const cart = useSelector(state => state.items)
    const product = cart[cart.findIndex(item=>item.id===slug)]

    return (
        <div>
            {product.name}
        </div>
    )
}

export default Product
