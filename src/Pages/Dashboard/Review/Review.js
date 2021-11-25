import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user} = useAuth();
  const onSubmit = (data) => {
      console.log(data)
    fetch("https://dry-wave-86158.herokuapp.com/review", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.insertedId) {
        alert("Thank You for giving us a review !");
        reset();
      }
    });
  };
  
  return (
    <div className="pt-5 login-form">
      <h1 className="mb-4">Dear Sir/Madam, Now You can give a Review about Our Products</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <input
            {...register("name")}
            placeholder="Enter Your Name"
            defaultValue={user.displayName}
           
          />
          <input
            type="number"
            {...register("rating")}
            placeholder="Rating"
          />
          <textarea
            {...register("description")}
            placeholder="Please Review Us"
          />
          <input {...register("email")} placeholder="Your Email" defaultValue={user.email} />
          
        </div>

        <input className="login-btn" type="submit" />
      </form>
    </div>
  );
};
export default Review;