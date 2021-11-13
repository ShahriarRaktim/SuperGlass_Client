import React from 'react';
import { Card, Col } from 'react-bootstrap';
import swal from "sweetalert"

const ManageAllOrder = ({product}) => {
    const { name, summary, img, _id } = product.tour;
    const {username, useremail} = product;

    const deleteHandle =(id)=>{
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`https://dry-wave-86158.herokuapp.com/ordered/${id}`,{
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
          // swal("Poof! Your imaginary file has been deleted!", {
          //   icon: "success",
          // });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
            
          
    }
  return (
    <Col    >
      <Card className="m-3 card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="name">{name}</Card.Title>
          <h5>Odered By {username}</h5>
          <h6>{useremail}</h6>
          <Card.Text>{summary}</Card.Text>
          <button onClick={()=>deleteHandle(product._id)} className="contact">Delete</button>
        </Card.Body>
      </Card>
    </Col>
  );
 };

export default ManageAllOrder;