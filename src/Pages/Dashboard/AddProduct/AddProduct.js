import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
      console.log(data)
    fetch("https://dry-wave-86158.herokuapp.com/addproduct", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.insertedId) {
        alert("Dear Admin ! Your Plan Added !");
        reset();
      }
    });
  };
  
  return (
    <div className="pt-5 login-form">
      <h1 className="mb-4">Dear Admin, Now You can add a Product to This Website</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input">
          <input
            {...register("name")}
            placeholder="Enter the Product NAME"
           
          />
          <textarea
            {...register("description")}
            placeholder="Write DETAILS about the product"
          />
          <input {...register("summary")} placeholder="Write a SUMMATY about the product" />
          <input
            type="number"
            {...register("id")}
            placeholder="Your product ID"
          />
          
          <input
            {...register("img")}
            placeholder="Product image URL"
          />
          
        </div>

        <input className="login-btn" type="submit" />
      </form>
    </div>
  );
};


export default AddProduct;