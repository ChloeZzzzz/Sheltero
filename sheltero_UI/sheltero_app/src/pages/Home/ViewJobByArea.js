import React from "react";
import Container from "@material-ui/core/Container";
import { H2 } from "../../components/theme";
import { JobTable } from "../../components/JobManagement/JobTable";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Copyright from "../../components/Copyright";
import Job from "../JobSearch";

// import {JobCategories} from "./Sections/JobCategories";

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

export default class JobByArea extends Job {
  constructor(props) {
    super(props);

  }

  render() {
    const classes = useStyles;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container>
          <br />
          <H2>{window.sessionStorage.getItem("searchingArea")}</H2>
          <JobTable />
        </Container>
        <main>
          {this.state.showtable ? (
            <Container flexGrow={1}>
              <JobTable
                area_tag={window.sessionStorage.getItem("searchingArea")}
              />
            </Container>
          ) : null}
        </main>

        <Box mt={5} className={classes.box}>
          <Copyright />
        </Box>
      </React.Fragment>
    );
  }
}
