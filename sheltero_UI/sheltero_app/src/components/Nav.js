import React from "react";
import { NavLink } from "react-router-dom";
import { Grid } from '@material-ui/core';


export default function Nav (){
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
        <NavLink to="/register">
          Sign Up
        </NavLink>
      </span> 
    </nav>
  );
}
