import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageProducts = () => {
    const [products, setProducts]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <section>
        <div className="services">
          <h1>SuperGlass</h1>
          <h2>Manage Products</h2>
        </div>
        <Row xs={1} md={2} lg={3} className="m-0 g-4">
          {products.map((product) => (
            <ManageProduct key={product.id} product={product}></ManageProduct>
          ))}
        </Row>
      </section>
    );
};

export default ManageProducts;