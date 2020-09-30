import React from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from "reactstrap";
import { Carousel } from 'react-responsive-carousel';
import { useDispatch } from "react-redux";
import { add_product } from "../../Context/Reducer";
import styles from './Product.module.css'
import products from '../../product.json'
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Product = () => {

    const { slug } = useParams();
    const productIndex = products.findIndex(product=>product.id===slug)
    const product = products[productIndex]
    const dispatch = useDispatch();


    return (
        <Container>
            <Row>
                <Col md={5} className={styles.product_crousel}>
                <Carousel>
                
                    {product.images.map(image=>{
                        return(<div>
                            <img src={image} alt={product.name} />
                            
                        </div>)
                    })}
                    
                    
               
            </Carousel>
                </Col>
                <Col md={7} className={styles.product_category}>
                <h3>{product.name}</h3>
                <div  dangerouslySetInnerHTML={{__html: product.description}}>

                </div>
                <p>Category: {product.category}</p>
                <h5>Price: ${product.price}</h5>
                <button
                onClick={() => {
                  dispatch(add_product({ qty: 1, ...product }));
                }}
              >
                + Add to cart{" "}
              </button>
                </Col>
            </Row>
        </Container>
    )
}

export default Product
