import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
import { Header } from "./components/Nav";
import Nav from "./components/Nav";
import Hero from "./pages/Home/Sections/Hero";
import Home from "./pages/Home/Home";
import ViewArea from "./pages/Home/ViewJobByArea";
import Login from "./pages/Login";
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
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "not_logged_in",
      // user: {},

      redirect: null
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios
      .get("https://shelteroinf.herokuapp.com/user", {withCredentials: true})
      .then(res => {
        if ( // the case when response data is logged in but the current state is not logged in
          res.data.user && this.state.loggedInStatus === "not_logged_in"
        ) {
          this.setState({
            loggedInStatus: "logged_in",
            // user: res.data.user
          });
        } else if ( // the case when the current state is logged in but the user is not actually authenticated
          !res.data.user & (this.state.loggedInStatus === "logged_in")
        ) {
          this.setState({
            loggedInStatus: "not_logged_in",
            // user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() { //componentDidMount() is invoked immediately after a component is mounted
    this.checkLoginStatus();
  }

  handleLogout(){
    this.setStatus({
      loggedInStatus:"not_logged_in",
      // user: {}
    });
  }
  handleLogin(data) {
    this.setState({
      loggedInStatus: "logged_in",
      // user: data.user
    });
  }


  render() {
  return (
    <Router>
      <div className="App">
        <Nav /> 
        {/* insert navigation bar from components on each page */}
        <Header />

        <Switch>
          {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
          {/* Link each pages and specify components to render */}
          {/* <Route exact path="/" render={props => <Nav {...props} loggedInStatus={this.state.loggedInStatus} />} /> */}
          <Route exact path="/login" 
                    render={props => 
                    <Login {...props}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus} />} />
          <Route exact path="/signup" render={props => <Register {...props} />} />
          <Route exact path="/" 
                    render={props => <Home 
                    {...props}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus} />} />
          <Route exact path="/job" render={props => <Job {...props} />} />
          <Route exact path="/jobpost" render={props => <JobPost {...props} />} />
          <Route exact path="/user" render={props => <User {...props} />} />
          <Route exact path="/welcome" render={props => <Welcome {...props} />} />
          <Route exact path="/employer" 
                    render={props => <Employer 
                    {...props}
                    handleLogin={this.handleLogin}
                    handleLogout={this.handleLogout}
                    loggedInStatus={this.state.loggedInStatus} />} />
          <Route exact path="/employee" render={props => <Employee {...props} />} />
          <Route exact path="/about" render={props => <About {...props} />} />
          <Route exact path="/viewarea" render={props => <ViewArea {...props} />} />
        </Switch>
      </div>
    </Router>
  );}
}
