import React from "react";
import { withStyles } from "@material-ui/core";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Card from "../Card/Card";
import Button from "../CustomButtons/Button.js";
import CardBody from "../Card/CardBody";
import axios from "axios";
const styles = theme => ({
  root: {
    // marginTop: theme.spacing(8) ,
    // marginBottom: theme.spacing(4),
    position: "fixed",
    top: "40pt",
    left: 0,
    right: 0,
    height: "100%",
    weight: "100%",
    margin: "auto",
    backgroundColor: "white",
    flexGrow: 1
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  imgRaised: {
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
});
export default withStyles(styles)(
  class Popup extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        type: "",
        login_state: "",
        redirect: ""
      };
      this.checkLoginState = this.checkLoginState.bind(this);
      this.checkUserType = this.checkUserType.bind(this);
      this.applyJob = this.applyJob.bind(this);
    }

    checkUserType() {
      axios
        .get("https://shelteroinf.herokuapp.com/user", {
          withCredentials: true
        })
        .then(response => {
          console.log("pop up");
          console.log(response.data);
          let res = response.data;
          /*
                if(res) {
                    this.setState({
                        type: res.type,
                    });
                } else if(type == "Employer") {
                    alert('You cannot apply job as a employer type');
                } else {
                    console.log("You have not sign up yet");
                }
                */
          console.log(res);
          if (res == "no user session") {
            console.log("user not logged in!");
          } else {
            console.log("user is logged in");
            console.log(response.data.type[0]);
            if (res.type[0] == "Employer") {
                alert('You cannot apply job as a employer type');
            } 
          }
        });
    }

    checkLoginState() {
      axios
        .get("https://shelteroinf.herokuapp.com/user/postedJob", {
          withCredentials: true
        })
        .then(response => {
          let res = response.data;
          if (res.loginMessage !== "Successful login") {
            alert("You have not login yet!");
            this.setState({
              redirect: "/login"
            });
          } else {
            alert("You have successfully applied a job");
            this.setState({
              redirect: "/job"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
      //event.preventDefault();
    }

    applyJob() {
      axios
        .post(
          "https://shelteroinf.herokuapp.com/user/applyingJob",
          this.state,
          { withCredentials: true, crossdomain: true }
        )
        .then(response => {
          //handle success
          console.log(response);
          this.setState({ redirect: "/job" });
        })
        .catch(error => {
          console.log(error);
        });
      //event.preventDefault();
    }

    handleApply() {
      this.checkLoginState();
      this.checkUserType();
      this.applyJob();
    }

    render() {
      const { classes } = this.props;
      return (
        <div className={classes.root} flexGrow="1">
          <img
            style={{ height: "45%", width: "100%", display: "block" }}
            className={classes.imgRaised}
            className={classes.imgRaised}
            src={this.props.img}
          />
          <GridContainer
            className={classes.container}
            style={{ paddingTop: "10pt", paddingRight: "20pt" }}
          >
            <GridItem xs={6} sm={6} md={6} align="center">
              <h1>{this.props.Title}</h1>
              <Button color="primary" onClick={this.props.closePopup}>
                close
              </Button>
              <Button color="rose">apply</Button>
            </GridItem>
            <GridItem xs={6} sm={6} md={6}>
              <Card>
                <CardBody>
                  <h3>{this.props.salary}</h3>
                  <h3>{this.props.credit_level}</h3>
                  <h3>{this.props.jobTag}</h3>
                  <h3>{this.props.contact}</h3>
                  <h3>{this.props.jobArea}</h3>
                  <p>{this.props.jobDetails}</p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      );
    }
  }
);
