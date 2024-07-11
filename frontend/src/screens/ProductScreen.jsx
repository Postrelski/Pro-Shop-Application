import { useParams } from "react-router-dom";
import { FaChessKing } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import React from "react";
import Rating from "../components/Rating";
import products from "../products";

// "useParams" this allows us to get the ID from the URL, this is a hook from router DOM. We need it to grab the info from the item that is clicked from the home page

const ProductScreen = () => {
  // get the ID from the URL
  // Here is how we can destructure anything from the Params
  // We creating Link componets that send us to a page like "product/5". The ID at the end of the URL is what we need to locate the information for the specific element. We are just grabing the ID that is sent to the URL when an certain Item is clicked and assigning that ID to the variable "productID". useParams is a hook that helps us retrieve this ID.
  const { id: productId } = useParams();

  // we are going to fetch the product based on the ID
  // we will scan thru elements of the products array and when finding an ID that matches the ID found in the current URL, then we assign that element to the variable 'product'
  const product = products.find((p) => p._id === productId);

  return (
    <>
      {/* link component is like an a tag for bootstrap. it uses "to" instead of "href" */}
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews}`} />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
