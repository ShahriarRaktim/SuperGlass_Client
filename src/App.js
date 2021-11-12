import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './Context/AuthProvider';
import Header from './Pages/Shared/Header/Header';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login/Login';
import Details from './Pages/Purchase/Details/Details';
import Register from './Pages/Login/Register/Register';


function App() {
  return (
    <AuthProvider>
      <div className="App">
      <Router>
        <Header></Header>
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
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/details/:productId">
            <Details></Details>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
    </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
