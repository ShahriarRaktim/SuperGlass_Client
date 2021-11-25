import React, { useState } from "react";
import "./Register.css";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { googleSignIn, register, user, error } = useAuth();

  const handleOnBlur = e => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData)
}

  const handleCreateAccount = (e) => {
    register(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };

  return (
    <div className="register">
      <div className="login-form">
        {!user.email ? (
          <>
            <h1>Please Register</h1>
            {error && <h5 className="text-danger">{error}</h5>}

            <form onSubmit={handleCreateAccount}>
              <div className="input">
                <input
                type="text"
                name="name"
                onBlur={handleOnBlur}
                placeholder="Enter Your Name"
              />
              <br/>
                <input
                  type="email"
                  name="email"
                  onBlur={handleOnBlur}
                  placeholder="Enter Your Email"
                />
                <br />
                <input
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  placeholder="Enter Your Password"
                />
              </div>

              <input className="login-btn" type="submit" value="Register" />
            </form>
            <h6>Or Register With</h6>
            <button onClick={googleSignIn} className="login-btn">
              Google
            </button>
            <br />
            <p>
              Already have an account?
              <NavLink className="login-btn" to="/login">
                Login
              </NavLink>
            </p>
          </>
        ) : (
          <>
            <h1 className="success">Successfully Registerded !</h1>
            <NavLink to="/home" className="about">
              Explore Us <i class="fas fa-arrow-alt-circle-right"></i>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};
export default Register;