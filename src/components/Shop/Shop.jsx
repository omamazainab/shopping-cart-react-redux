import React from "react";
import { Container, Row, Col } from "reactstrap";
import styles from "./Shop.module.css";
import { AiOutlineStar } from "react-icons/ai";


const Shop = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col className={styles.product_card} md={{ size: 3 }} >
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
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
