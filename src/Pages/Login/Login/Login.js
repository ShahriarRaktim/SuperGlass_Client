
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import "./Login.css";
const Login = () => {
  const [loginData, setLoginData] = useState({});
    const { googleSignIn, logIn, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
  
    const handleOnChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = { ...loginData };
      newLoginData[field] = value;
      setLoginData(newLoginData);
  }
    
    const handleLogIn = (e) => {
      logIn(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };
  
    const loginwithGoogle = () => {
      googleSignIn(location, history)
    };
    return (
      <div className="login">
        <div className="login-form">
          <h1>Please Login</h1>
                                  {/* Conditional Error Message */}
          <h2 className="text-danger">
            {error && (
              <>
                {error === "auth/internal-error"
                  ? "Sir ! This Email is toally new for us.Please give us correct Email."
                  : "Sir ! This Password is toally new for us.Please give us correct Password."}
              </>
            )}
          </h2>
          <form onSubmit={handleLogIn}>
            <div className="input">
              
              <input
                type="email"
                name="email"
                onBlur={handleOnChange}
                placeholder="Enter Your Email"
              />
              <br />
              <input
                type="password"
                name="password"
                onBlur={handleOnChange}
                placeholder="Enter Your Password"
              />
            </div>
  
            <input className="login-btn" type="submit" value="Login" />
          </form>
          <h6>Or Login With</h6>
          <button onClick={loginwithGoogle} className="login-btn">
            Google
          </button>
          <br />
          <p>
            Don't have account?{" "}
            <NavLink className="login-btn" to="/register">
              Register
            </NavLink>
          </p>
        </div>
      </div>
    );
};


export default Login;