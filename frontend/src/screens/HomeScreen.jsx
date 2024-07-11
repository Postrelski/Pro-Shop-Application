import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Product";

const HomeScreen = () => {
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
