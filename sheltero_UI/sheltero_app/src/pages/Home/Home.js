import React from "react";
// import "../styles.css";
import { Box, Link } from "@material-ui/core";
import Copyright from "../../components/Copyright";
import { useStyles } from "../../components/theme";
import JobCategories from "./Sections/JobCategories";
import Hero from './Sections/Hero';
import Nav from "../../components/Nav";

export default function Home() {
  const classes = useStyles();
  console.log(window.sessionStorage);
  window.sessionStorage.setItem("navBarRedirect", '');
  return (
    <div >
        <Nav />
        <Hero/>
        <JobCategories />
      <Box className={classes.copyright}>
        <Copyright />
      </Box>
    </div>
  );
}
