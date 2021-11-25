import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ManageAllOrder from "../ManageAllOrder/ManageAllOrder";

const ManageAllOrders = () => {
    const [products, setProducts]= useState([]);
    console.log("ok", products)
    useEffect(()=>{
        fetch('https://dry-wave-86158.herokuapp.com/allorder')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <section>
        <div className="services">
          <h1>SuperGlass</h1>
          <h2>Manage All Orders</h2>
        </div>
        <Row xs={1} md={2} lg={3} className="m-0 g-4">
          {products.map((product) => (
            <ManageAllOrder key={product.id} product={product}></ManageAllOrder>
          ))}
        </Row>
      </section>
    );
};

export default ManageAllOrders;