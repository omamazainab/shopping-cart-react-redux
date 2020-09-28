import React from "react";
import { Container, Row, Col } from "reactstrap";
import styles from './Cart.module.css'

const Cart = () => {
  return (
    <Container>
        {/* <Row>
            <Col><h3>Product Name</h3></Col>
            <Col><h3>Product Price</h3></Col>
            <Col><h3>Product Image</h3></Col>
        </Row> */}
      <Row>
        <Col>product name</Col>
        <Col>price</Col>
        <Col>
          <img
            className={styles.cart_thumbnail}
            src="https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=895&q=80"
            alt=""
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
