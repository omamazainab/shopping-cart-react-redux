import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import styles from "./Cart.module.css";

const Cart = () => {
  const cart = useSelector((state) => state.items);

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
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default Cart;
