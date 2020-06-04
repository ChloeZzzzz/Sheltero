import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Copyright from "../../components/Copyright";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Button from "../../components/CustomButtons/Button.js";
import Parallax from "../../components/Parallax/Parallax.js";

import styles from "./AboutPageLayout.js";

// Sections for this page
import WorkSection from "./Sections/WorkSection.js";


const useStyles = makeStyles(styles);

export default function AboutPage(props) {
  const classes = useStyles();
  return (
    <div>

      <Parallax filter image={"https://picsum.photos/1800/1200"}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <WorkSection />
        </div>
      </div>
      <Copyright />
    </div>
  );
}
