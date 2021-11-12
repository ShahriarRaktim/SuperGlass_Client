
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import "./Login.css";
const Login = () => {
    const { googleSignIn, logIn, setIsloading } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const location = useLocation();
    const history = useHistory();
    const from = location.state?.from || "/home";
  
    const handleUserEmail = (e) => {
      setEmail(e.target.value);
    };
    const handleUserPassword = (e) => {
      setPassword(e.target.value);
    };
    
    const handleLogIn = (e) => {
      logIn(email, password)
        .then((userCredential) => {
          history.push(from);
        })
        .catch((error) => {
          setError(error.code);
        })
        .finally(() => setIsloading(false));
  
      e.preventDefault();
    };
  
    const loginwithGoogle = () => {
      googleSignIn()
        .then((result) => {
          history.push(from);
        })
        .finally(() => setIsloading(false));
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
                name=""
                onBlur={handleUserEmail}
                placeholder="Enter Your Email"
              />
              <br />
              <input
                type="password"
                name=""
                onBlur={handleUserPassword}
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