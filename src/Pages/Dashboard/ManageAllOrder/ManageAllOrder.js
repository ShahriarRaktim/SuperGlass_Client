import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import swal from "sweetalert"
import "./ManageAllOrder.css"

const ManageAllOrder = ({product}) => {
    const { name, summary, img, _id } = product.tour;
    const {username, useremail} = product;
    const [approve, setApprove] = useState(true);

    const approvedHandle=()=>{
          setApprove(false)
    }

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
      <Card className="m-3 card order">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="name">{name}</Card.Title>
          {
            approve && <button className="contact pending">Pending</button>
          }
          
          <h5>Odered By {username}</h5>
          <h6>{useremail}</h6>
          <Card.Text>{summary}</Card.Text>
          <button onClick={()=>deleteHandle(product._id)} className="contact delete">Delete</button>
          {
            approve ? <button onClick={approvedHandle} className="contact approve">Approve</button>
            :
            <button className="contact">Approved</button>
          }
          
        </Card.Body>
      </Card>
    </Col>
  );
 };

export default ManageAllOrder;