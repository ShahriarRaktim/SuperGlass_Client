
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Purchase from '../Purchase/Purchase';
const Details = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch("https://dry-wave-86158.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
    

    const product = products.find((e) => e._id === productId);
  
    return <>{<Purchase product={product}></Purchase>}</>;
  };

export default Details;