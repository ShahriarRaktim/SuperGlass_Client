import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login/Login';
import Details from './Pages/Purchase/Details/Details';
import Register from './Pages/Login/Register/Register';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Products from './Pages/Products/Products/Products';


function App() {
  return (
    <AuthProvider>
      <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
          <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/products">
            <Products></Products>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/details/:productId">
            <Details></Details>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
        </Switch>
    </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
