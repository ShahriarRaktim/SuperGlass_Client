import React from "react";
import { Card, Col } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const DisplayReview = ({ product }) => {
  const { name, email, rating, description } = product;
  return (
    <Col>
      <Card className="m-3 rating">
        <Card.Body>
          <Card.Title className="name">{name}</Card.Title>
          <h6>{email}</h6>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              value={rating}
              edit={false}
              size={24}
              activeColor="#ffd700"
            />
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default DisplayReview;
