import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { GlobalStyles } from './global';
// import {theme} from "./theme";
import { Nav, Header } from "./components/Nav";
import Home from "./pages/Home";
import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Job from "./pages/JobSearch";
import "./styles.css";

import JobPost from "./components/JobPost";

import User from "./pages/UserProfile";
//the page of profile page should be shown after the user sign in. I have not done yet.
import error from './pages/Error';

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
          <Route exact path="/signup" render={props => <Register {...props} />} />
          <Route exact path="/" render={props => <Home {...props} />} />
          <Route exact path="/job" render={props => <Job {...props} />} />

          <Route exact path="/jobpost" render={props => <JobPost {...props} />} />
          <Route exact path="/user" render={props => <User {...props} />} />
          <Route exact path='/error' render={props => <error {...props} />}/>
        </Switch>
      </div>
    </Router>
  );
}
