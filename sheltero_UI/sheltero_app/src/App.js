import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios';
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
import User from "./pages/Profile/UserProfile";
import Welcome from "./pages/Welcome";
//the page of profile page should be shown after the user sign in. I have not done yet.
import About from "./pages/About/About";
import Employee from "./pages/Profile/employeeProfile";
import EmployerEdit from"./pages/Profile/employerProfileEdit";
import EmployeeEdit from"./pages/Profile/employeeProfileEdit";
import Employer from"./pages/Profile/employerProfile";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      searchname: 'first_name',
      search_Area: '',
      searchname: 'email',
    }
    this.search_Area=this.search_Area.bind();
  }

  search_Area(word){
    if (!word){
      return;
    }
    this.setState({search_Area:word});
    console.log(this.state.search_Area);
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
            <Route exact path="/job" render={props => <Job {...props} search_Area={this.search_Area()}/>} />
            <Route exact path="/jobpost" render={props => <JobPost {...props} />} />
            <Route exact path="/user" render={props => <User {...props} />} />
            <Route exact path="/welcome" render={props => <Welcome {...props} />} />
            <Route exact path="/employer" render={props => <Employer {...props} searchname={this.state.email}/>} />
            <Route exact path="/employee" render={props => <Employee {...props} searchname={this.state.email}/>} />
            <Route exact path="/employeredit" render={props => <EmployerEdit {...props} />} />
            <Route exact path="/employeeedit" render={props => <EmployeeEdit {...props} />} />
            <Route exact path="/about" render={props => <About {...props} />} />
            <Route exact path="/viewarea" render={props => <ViewArea {...props} />} />
          </Switch>
      </div>
    </Router>
  );}
}
