import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const {user} = useAuth();

    useEffect(() => {
        fetch(`https://dry-wave-86158.herokuapp.com/ordered?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.useremail])
    return (
        <div>
            <Row xs={1} md={2} lg={3} className="m-0 g-4">
          {orders.map((product) => (
            <MyOrder key={product.id} product={product}></MyOrder>
          ))}
        </Row>
        </div>
    );
};

export default MyOrders;