import React, { useState } from "react";
import { Card, Placeholder } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
// import PlaceOrder from "../PlaceOrder/PlaceOrder";
import "./Purchase.css"

const Purchase = ({ product }) => {
    const [isbook, setIsbook] = useState(true);
  const [isbooked, setIsbooked] = useState(true);
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    data.tour = product;

    fetch("https://dry-wave-86158.herokuapp.com/ordered", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Congratulation! Your booking conformed !");
          setIsbooked(false);
        }
      });
  };
  const handleBooking = () => {
    setIsbook(false);
  };

  return (
    <>
      {isbook ? (
        <Card className="my-5 mx-auto card service-details-card">
          <Card.Img variant="top" src={product?.img} />
          <Card.Body>
            <Card.Title className="name">{product?.name}</Card.Title>
            <Card.Text>{product?.description}</Card.Text>
            {/* <NavLink to="/booking" className="contact">
         Take an Appointment <i className="fas fa-arrow-alt-circle-right"></i>
       </NavLink> */}
            <button onClick={handleBooking} className="contact">
              Booking <i className="fas fa-arrow-alt-circle-right"></i>
            </button>
          </Card.Body>
        </Card>
      ) : (
        <>
          {isbooked ? (
            <div className="pt-5 login-form">
              <h1 className="mb-4">Give us information for Purchase</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input">
                  <input
                    {...register("username")}
                    placeholder="Your Name"
                    defaultValue={user.displayName}
                    required
                  />
                  <input
                    {...register("userphone")}
                    placeholder="Enter Your Phone Number"
                    required
                  />
                  <input
                    {...register("useremail")}
                    placeholder="Your Email"
                    defaultValue={user.email}
                    required
                  />
                  <input
                    {...register("userdestination")}
                    placeholder="Your Destination"
                    defaultValue={`You are going to Purchase ${product?.name}`}
                    required
                  />
                </div>

                <input className="login-btn" type="submit" />
              </form>
            </div>
          ) : (
            <div className="login-form">
              <h1>Successfully Booked this plan !</h1>
              <NavLink className="contact" to="/dashboard/myorder">
              Your all Booked Plan <i class="fas fa-arrow-alt-circle-right"></i>
              </NavLink>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Purchase;