import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { delete_product_action } from "../../Context/Action";
import styles from "./Cart.module.css";

const Cart = () => {
  const cart = useSelector((state) => state.items);
  const dispatch = useDispatch();

  return (
    <Container>
      <Row>
        {cart.map((product) => {
          return (
            <div key={product.id}>
              <Col>{product.name}</Col>
              <Col>{product.price}</Col>
              <Col>
                <img
                  className={styles.cart_thumbnail}
                  src={product.image}
                  alt={product.name}
                />
              </Col>
              <h1>{product.qty}</h1>
              <button
                onClick={()=>{
                  dispatch(delete_product_action(product.id))
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default Cart;
