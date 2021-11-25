import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        fetch('https://dry-wave-86158.herokuapp.com/products')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <>
        <Header></Header>
        <section>
        <div className="services">
          <h1>SuperGlass</h1>
          <h2>Our All Collections</h2>
          <p>
            As you continue to keep tabs on the <span>SuperGlass</span>{" "}
            industry, don’t forget to prioritize the deep-seated passion you’ve
            been feeling to propel your career forward.
          </p>
        </div>
        <Row xs={1} md={2} lg={3} className="m-0 g-4">
          {products.map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </Row>
      </section>
      <Footer></Footer>
        </>
    );
};

export default Products;