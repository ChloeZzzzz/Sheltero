
// export function Nav (){
//   return (
//     <nav>
//       <span id="functionPages">
//         <NavLink exact to="/">
//           Home
//         </NavLink>
//         <NavLink to="/job">
//           Job Search
//         </NavLink>
//       </span>
//       <span id="userPages">
//         <NavLink to="/login">
//           Sign In
//         </NavLink>
//         <NavLink to="/signup">
//           Sign Up
//         </NavLink>
//       </span> 
//     </nav>
//   );
// }
import React, { Component } from "react";
import { Link, Box, withStyles, Button } from '@material-ui/core';
import { useStyles } from './theme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import axios from "axios";
import CheckLogin from '../components/CheckLoginStatus';
import { Redirect } from "react-router-dom";

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


export default withStyles(styles) (class Nav extends CheckLogin  {
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    axios
      .get("https://shelteroinf.herokuapp.com/user/logout", { withCredentials: true })
      .then(response => {
        this.props.handleLogout();
      })
      .catch(error => {
        console.log("logout error", error);
      });
  }

  // handleLogoutClick(e) {
  //   this.setState({
  //     loggedInStatus : "not_logged_in",
  //     // redirect: "/",
  //   });
  // }


  render () {
    const { classes } = this.props;
    // if (this.state.redirect) {
    //   return <Redirect to={this.state.redirect} />
    // } else 
    if (this.state.loggedInStatus === "not_logged_in"){
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
    } else if (this.state.loggedInStatus === "logged_in"){
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
              <Button className={classes.menuButton} onClick={() => this.handleLogoutClick()}>Log Out</Button>
            </Toolbar>
          </AppBar>
        </div>
      )
    }
    };
})

export function Header () {
  const classes = useStyles()

  return(
    <Box className={classes.header}></Box>
  );
}