import React, { Component, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./components/Nav";
import Nav from "./components/Nav";
import Hero from "./pages/Home/Sections/Hero";
import Home from "./pages/Home/Home";
import ViewArea from "./pages/Home/ViewJobByArea";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import Job from "./pages/JobSearch";
import "./styles.css";
import JobPost from "./components/JobPost";
import Main from "./pages/Error";
import User from "./pages/UserProfile";
import Welcome from "./pages/Welcome";
//the page of profile page should be shown after the user sign in. I have not done yet.

import About from "./pages/About/About";
import Employee from "./pages/employeeProfile";
import Employer from"./pages/employerProfile";
export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
  return (
    <Router>
      <div className="App">
        <Nav/> {/* insert navigation bar from components on each page */}
          <Header />

          <Switch>
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            {/* Link each pages and specify components to render */}
            {/* <Route exact path="/" render={props => <Nav {...props} loggedInStatus={this.state.loggedInStatus} />} /> */}
            <Route exact path="/login" render={props => <Login {...props}/>} />
            <Route exact path="/signup" render={props => <Register {...props} />} />
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route exact path="/job" render={props => <Job {...props} />} />
            <Route exact path="/jobpost" render={props => <JobPost {...props} />} />
            <Route exact path="/user" render={props => <User {...props} />} />
            <Route exact path="/welcome" render={props => <Welcome {...props} />} />
            <Route exact path="/employer" render={props => <Employer {...props} />} />
            <Route exact path="/employee" render={props => <Employee {...props} />} />
            <Route exact path="/about" render={props => <About {...props} />} />
            <Route exact path="/viewarea" render={props => <ViewArea {...props} />} />
          </Switch>
      </div>
    </Router>
  );}
}
