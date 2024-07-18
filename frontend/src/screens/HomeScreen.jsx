import React from "react";
import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  // we are getting the array from the URL "/api/products"
  // storing it in a variable called "data"
  // and then setting "data" to the variable "products"
  // then using "products" to create the content on the page

  // the URL "/api/products" gets ALL of the array contents
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      {/* <h1></h1> */}
      <Row>
        {products.map((product) => (
          // bootstrap attributes for responsive screen size
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            {/* taking the products array and sending it to a component */}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
