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
        </Switch>
        <Footer></Footer>
    </Router>
    </div>
    </AuthProvider>
  );
}

export default App;
