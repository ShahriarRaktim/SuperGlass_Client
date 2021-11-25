import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import DisplayReview from '../DisplayReview/DisplayReview';

const Reviews = () => {
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        fetch('https://dry-wave-86158.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <section className="mb-5">
        <div className="services">
          <h1>SuperGlass</h1>
          <h2>Some Review Here</h2>
          <p>
            As you continue to keep tabs on the <span>SuperGlass</span>{" "}
            industry, don’t forget to prioritize the deep-seated passion you’ve
            been feeling to propel your career forward.
          </p>
        </div>
        <Row xs={1} md={2} lg={3} className="m-0 g-4">
          {products.slice(0,6).map((product) => (
            <DisplayReview key={product.id} product={product}></DisplayReview>
          ))}
        </Row>
      </section>
    );
};

export default Reviews;