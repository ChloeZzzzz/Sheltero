import React from "react";
import { NavLink } from "react-router-dom";
import { Box } from '@material-ui/core';
import { useStyles } from './theme';


export function Nav (){
  return (
    <nav>
      <span id="functionPages">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/job">
          Job Search
        </NavLink>
      </span>
      <span id="userPages">
        <NavLink to="/login">
          Sign In
        </NavLink>
        <NavLink to="/signup">
          Sign Up
        </NavLink>
        <NavLink to="/user">
          Profile
        </NavLink>
      </span> 
    </nav>
  );
}

export function Header () {
  const classes = useStyles()

  return(
    <Box className={classes.header}></Box>
  );
}
