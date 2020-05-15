import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { GlobalStyles } from './global';
// import {theme} from "./theme";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Job from "./pages/JobSearch";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Nav /> {/* insert navigation bar from components on each page */}
                
        <Switch>
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          {/* Link each pages and specify components to render */}
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route exact path="/register" render={props => <Register {...props} />} />
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route exact path="/job" render={props => <Job {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}
