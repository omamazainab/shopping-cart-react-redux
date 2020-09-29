import React from "react";
import { Container, Row, Col } from "reactstrap";
import { AiOutlineStar } from "react-icons/ai";
import {add_product_action,increment_action} from '../../Context/Action'
import {useDispatch} from 'react-redux'
import { useSelector } from "react-redux";
import {idGenerator} from '../../utils/idGenerator'
import styles from "./Shop.module.css";


const Shop = () => {

  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart);

  const products = [
    {
      id: 1,
      name:'product a',
      price: 200,
      image: 'https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=895&q=80'
    },
    {
      id: 2,
      name:'product b',
      price: 200,
      image: 'https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=895&q=80'
    },
    {
      id: 3,
      name:'product c',
      price: 200,
      image: 'https://images.unsplash.com/photo-1553754538-466add009c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=895&q=80'
    },
    
  ]

  

  return (
    <Container className="text-center">
      <Row>
        {
          products.map(product=>{
           return ( <Col className={styles.product_card} key={product.id} md={{ size: 3 }} >
              <img
                className={styles.product_image}
                src={product.image}
                alt={product.name}
              />
              <a href="/">{product.name}</a>
              <div><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div>
              <div>${product.price}</div>
              <button onClick={() => {
                            dispatch(add_product_action({ qty: 1, ...product }))
                        }}>+ Add to cart </button>
              
            </Col>)
          })
        }
        
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
