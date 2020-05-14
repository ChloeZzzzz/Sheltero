import React from "react";
// import "../styles.css";
import { Box, Link } from "@material-ui/core";
import Copyright from "../components/Copyright";
import { useStyles, H1, PrimButton } from "../components/theme";


export default function Home() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.titlePage}>
        <H1 className={classes.title}>sheltero.</H1>
      </Box>
      <Box>
        <Link href="/login">
          <PrimButton>Sign In</PrimButton>
        </Link>
        <Link href="/register">
          <PrimButton>Sign Up</PrimButton>
        </Link>
      </Box>
      <Box className={classes.copyright}>
        <Copyright />
      </Box>
    </div>
  );
}
