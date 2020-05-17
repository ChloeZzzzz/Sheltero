import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import SearchByCategory from "../components/SearchBar.js";
import { Box } from "@material-ui/core";
import SearchByArea from "../components/SearchArea";
import {JobTable} from "../components/JobManagement/JobTable";
import Copyright from "../components/Copyright";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },

  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  Box: {
    width: "100vw",
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  }
}));

export default function Job() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <div className={classes.Box}>
          <Grid container spacing={12}>
            <Grid xs={1} />
            <Grid item xs={4}>
              <SearchByCategory />
            </Grid>
            <Grid xs={1} />
            <Grid item xs={4}>
              <SearchByArea />
              {/* <SearchLocationInput onChange={() => null} /> */}
            </Grid>
          </Grid>
        </div>
        <Container maxWidth="md">
          <JobTable />
        </Container>
      </main>

      <Box mt={5} className={classes.box}>
        <Copyright />
      </Box>
    </React.Fragment>
  );
}
