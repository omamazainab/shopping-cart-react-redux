import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Table } from "reactstrap";
import { del_product, clear_cart } from "../../Context/Reducer";
import styles from "./Cart.module.css";

const Cart = () => {
  const cart = useSelector((state) => state.items);
  const dispatch = useDispatch();

  const productPrices = cart.map((product) => product.price * product.qty);
  const totalPrice = productPrices.reduce((total, num) => (total += num), 0);

  return (
    <Container>
      <h1 className="text-center my-5">Cart</h1>
      <Row>
        <Col md={8}>
          <Table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>image</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.qty}</td>
                    <td>
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className={styles.cart_thumbnail}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          dispatch(del_product(product.id));
                        }}
                      >
                        x
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <button onClick={()=>{
            dispatch(clear_cart())
          }}> 
            clear cart
          </button>
        </Col>
        <Col md={4}>
          <Table>
            <thead>
              <tr>
                <th>Bill</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>${totalPrice}</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>$10</td>
              </tr>
              <tr>
                <td>
                  <h5>Total</h5>
                </td>
                <td>
                  <h5>${totalPrice !== 0 ? totalPrice + 10 : 0}</h5>
                </td>
              </tr>
            </tbody>
          </Table>
         
        </Col>
      </Row>
  
    </Container>
  );
};

export default Cart;
