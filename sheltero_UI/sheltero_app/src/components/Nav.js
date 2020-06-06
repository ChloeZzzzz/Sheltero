import React, { Component } from "react";
import { Link, Box, withStyles, Button } from '@material-ui/core';
import { useStyles } from './theme';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Cookies from "js-cookie";


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

  componentDidMount(){
    let session = window.sessionStorage.getItem("loggedIn");
    if(!session){
      this.setState({currentStatus:false});
    }
    else{
      this.setState({currentStatus:true});
    }
  }

  handleLogout = ()=>{
    window.sessionStorage.setItem("loggedIn", false);
  }

  render () {
    const { classes } = this.props;
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
    } else if (this.state.currentStatus){
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
    }
    };
})

export function Header () {
  const classes = useStyles()

  return(
    <Box className={classes.header}></Box>
  );
}