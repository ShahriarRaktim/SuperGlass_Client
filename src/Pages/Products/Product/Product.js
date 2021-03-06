import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Product = ({product}) => {
    const { name, summary, img, _id, price } = product;
  return (
    <Col    >
      <Card className="m-3 card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="name">{name}</Card.Title>
          <h4>Price: {price}</h4>
          <Card.Text>{summary}</Card.Text>
          <NavLink to={`/details/${_id}`} className="contact">
            Details <i class="fas fa-arrow-alt-circle-right"></i>
          </NavLink>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;