import React from "react";
import { Container, Row, Col } from "reactstrap";
import { AiOutlineStar } from "react-icons/ai";
import { add_product_action } from "../../Context/Action";
import { useDispatch } from "react-redux";
import products from '../../product.json'
import styles from "./Shop.module.css";

const Shop = () => {
  const dispatch = useDispatch();

  
  
  return (
    <Container className="text-center">
      <Row className="text-center">
        {products.map((product) => {
          return (
            <Col
              className={styles.product_card}
              key={product.id}
              md={{ size: 4 }}
            >
              <img
                className={styles.product_image}
                src={product.images[0]}
                alt={product.name}
              />
              <a href="/">{product.name}</a>
              <div>
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </div>
              <div>${product.price}</div>
              <button
                onClick={() => {
                  dispatch(add_product_action({ qty: 1, ...product }));
                }}
              >
                + Add to cart{" "}
              </button>
            </Col>
          );
        })}

        {/* <Col className={styles.product_card} md={{ size: 3, offset: 1 }}>
          {" "}
          <img
            className={styles.product_image}
            src="https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=895&q=80"
            alt=""
          />
          <a href="/">product name</a>
          <div><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
          <div>$23</div>
          <button href="/">+ Add to cart </button>
        </Col>
        <Col className={styles.product_card} md={{ size: 3, offset: 1 }}>
          {" "}
          <img
            className={styles.product_image}
            src="https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=895&q=80"
            alt=""
          />
          <a href="/">product name</a>
          <div><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
          <div>$23</div>
          <button href="/">+ Add to cart </button>
        </Col> */}
      </Row>
    </Container>
  );
};

export default Shop;
