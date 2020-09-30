import React from 'react'
import {useSelector} from 'react-redux'
import { Badge } from "reactstrap";
import { AiOutlineShopping } from "react-icons/ai";

const CartBadge = () => {
    const cartQty = useSelector((state) => state.items.length);

    return (
        <>
        <AiOutlineShopping size={25} />
              
                <Badge color="success" pill>
                  {cartQty}
                </Badge>
              
        </>
    )
}

export default CartBadge
