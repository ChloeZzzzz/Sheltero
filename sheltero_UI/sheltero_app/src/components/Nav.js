import React from "react";
import { Link, Box } from '@material-ui/core';
import { useStyles } from './theme';
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




import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
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
  );
}

export function Header () {
  const classes = useStyles()

  return(
    <Box className={classes.header}></Box>
  );
}