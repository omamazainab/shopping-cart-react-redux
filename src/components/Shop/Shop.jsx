import React from "react";
import { Container, Row, Col } from "reactstrap";
import { AiOutlineStar } from "react-icons/ai";
import { add_product } from "../../Context/Reducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import products from "../../product.json";
import styles from "./Shop.module.css";

const Shop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Container className="text-center">
      <h3 className="my-5">Products</h3>
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
                  onClick={()=>{
                    navigate(`/shop/${product?.id}`)
                  }}
                />

                <div href="/">{product.name}</div>
                <div>
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <div>${product.price}</div>
              {/* </Link> */}
              <button
                onClick={() => {
                  dispatch(add_product({ qty: 1, ...product }));
                }}
              >
                + Add to cart{" "}
              </button>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Shop;
