import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ManageProduct = ({product}) => {
    const { name, summary, img, _id } = product;
    const deleteHandle =(id)=>{
        console.log(id)
            fetch(`http://localhost:5000/products/${id}`,{
              method: "DELETE",
            })
            .then(res => res.json())
            .then(result =>{
                console.log(result)
              if(result.deletedCount===1){
                
                alert('Successfully Deleted !')
                window.location.reload();
              }
            })
          
    }
  return (
    <Col    >
      <Card className="m-3 card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="name">{name}</Card.Title>
          <Card.Text>{summary}</Card.Text>
          <button onClick={()=>deleteHandle(product._id)} className="contact">Delete</button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ManageProduct;