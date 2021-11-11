import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
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
  );
}

export default App;
