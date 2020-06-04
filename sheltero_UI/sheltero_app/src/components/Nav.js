
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


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  navBar: {
    backgroundColor: '#f6f6f6',
    position: 'fixed',
  },
  menuButton: {
      marginRight: theme.spacing(1),
      color: '#002E18',
      fontFamily:[
          'avenir',
          'helvetica',
      ].join(','),
      fontSize: 14,
      fontWeight: 'bold',
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


export default withStyles(styles) (class Nav extends Component  {
  constructor() {
    super();

    this.state = {
      loggedInStatus: "false",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  checkLoginStatus() {
    axios
      .get("https://shelteroinf.herokuapp.com/login", {withCredentials: true})
      .then(res => {
        if (
          res.data.login && this.state.loggedInStatus === "false"
        ) {
          this.setState({
            loggedInStatus: "true",
            user: res.data.user
          });
        } else if (
          !res.data.login & (this.state.loggedInStatus === "true")
        ) {
          this.setState({
            loggedInStatus: "false",
            user: {}
          });
        }
      })
      .catch(error => {
        console.log("check login error", error);
      });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogout(){
    this.setStatus({
      loggedInStatus:"false",
      user: {}
    });
  }
  handleLogin(data) {
    this.setState({
      loggedInStatus: "true",
      user: data.user
    });
  }


  render () {
    const { classes } = this.props;
    return(
    <div className={classes.root}>
      <AppBar className={classes.navBar}>
        <Toolbar>
          <Link className={classes.logo} href="/">
            Sheltero.
          </Link>
          <Button className={classes.menuButton} href="/job">Job search</Button>
          <Button className={classes.menuButton} href="/login">Login</Button>
          <Button className={classes.menuButton} href="/signup">Sign up</Button>
        </Toolbar>
      </AppBar>
    </div>
    )};
})

export function Header () {
  const classes = useStyles()

  return(
    <Box className={classes.header}></Box>
  );
}