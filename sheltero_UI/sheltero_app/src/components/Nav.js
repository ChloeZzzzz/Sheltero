import React, { Component } from "react";
import { Link, Box, withStyles, Button } from '@material-ui/core';
import { useStyles } from './theme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import axios from 'axios';
import {updateUserState} from '../api';
import { Redirect } from "react-router-dom";

//import Cookies from "js-cookie";


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: '#f6f6f6',
    position: 'fixed',
  },
  menuButton: {
      marginRight: theme.spacing(2),
      color: '#002E18',
      fontFamily:[
          'avenir',
          'helvetica',
      ].join(','),
      fontSize: 12,
      textTransform: 'uppercase',
      letterSpacing: 2,
      // fontWeight: 'bold',
  },
  logo: {
      marginLeft: theme.spacing(1),
      flexGrow: 1,
      color: '#002E18',
      fontSize: 24,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontFamily: [
          'futura',
          'serif',
      ].join(','),
      letterSpacing: 2,
      '&:hover': {
          textDecoration: 'none',
      },

  },
})


export default withStyles(styles) (class Nav extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      currentStatus: false,
    }
    this.handleLogout = this.handleLogout.bind();
  }

  handleLogout = async ()=>{
    const url = "https://shelteroinf.herokuapp.com/user/logout";
    axios.get(url, {withCredentials:true, crossdomain:true})
          .then((response) => {
            if(response.data == "logged out"){
              console.log("change isLogIn state to false");
            }
            else if (response.data == "log out failed") {
              console.log("change isLogIn state to true");
            } else {
              console.log("something wrong happended");
            }
            console.log("log out");
            updateUserState();
            //this.setState({redirect: '/'});
            window.sessionStorage.setItem("navBarRedirect", "/");
          }).catch((error) => {
            console.log(error)});
  }

  componentDidMount(){
    if(window.sessionStorage.getItem("isLogIn") == "false"){
      this.setState({currentStatus:false});
    }
    else if (window.sessionStorage.getItem("isLogIn") == "true") {
      this.setState({currentStatus:true});
    }
    console.log(this.state.currentStatus);
  }

  render () {
    const { classes } = this.props;
    console.log("window.sessionStorage redirect");
    console.log(window.sessionStorage);
    if (window.sessionStorage.getItem("navBarRedirect") == '/') {
      console.log("nav bar redirect"+window.sessionStorage.getItem("navBarRedirect"));
      return (
        <div className={classes.root}>
          <AppBar className={classes.navBar}>
            <Toolbar>
              <Link className={classes.logo} href="/">
                Sheltero.
              </Link>
              <Button className={classes.menuButton} href="/job">Job search</Button>
              <Button className={classes.menuButton} href="/about">Work with us</Button>
              <Button className={classes.menuButton} href="/login">Login</Button>
              <Button className={classes.menuButton} href="/signup">Sign up</Button>
            </Toolbar>
          </AppBar>
        <Redirect to={window.sessionStorage.getItem("navBarRedirect")} />
        </div>
        )
    } else {
    if (!this.state.currentStatus){
      return(
        <div className={classes.root}>
          <AppBar className={classes.navBar}>
            <Toolbar>
              <Link className={classes.logo} href="/">
                Sheltero.
              </Link>
              <Button className={classes.menuButton} href="/job">Job search</Button>
              <Button className={classes.menuButton} href="/about">Work with us</Button>
              <Button className={classes.menuButton} href="/login">Login</Button>
              <Button className={classes.menuButton} href="/signup">Sign up</Button>
            </Toolbar>
          </AppBar>
        </div>
        )
    } else {
      return(
        <div className={classes.root}>
          <AppBar className={classes.navBar}>
            <Toolbar>
              <Link className={classes.logo} href="/">
                Sheltero.
              </Link>
              <Button className={classes.menuButton} href="/job">Job search</Button>
              <Button className={classes.menuButton} href="/about">Work with us</Button>
              <Button className={classes.menuButton} href="/employer">My Account</Button>
              <Button className={classes.menuButton} onClick={this.handleLogout}>Log Out</Button>
            </Toolbar>
          </AppBar>
        </div>
      )
    }}
    };
})

export function Header () {
  const classes = useStyles()

  return(
    <Box className={classes.header}></Box>
  );
}