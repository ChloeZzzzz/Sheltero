import React from "react";
import { withStyles } from "@material-ui/core";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Card from "../Card/Card";
import Button from "../CustomButtons/Button.js";
import CardBody from "../Card/CardBody";
import axios from "axios";
import Welcome from "react-welcome-page";
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
        redirect: "",
        loading: false,
        applying: false
      };
<<<<<<< HEAD
=======
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
          let res = response.data;
          if (res === "no user session") {
            console.log("user not logged in!");
          } else {
            console.log("user is logged in");
            console.log(response.data.type[0]);
            if (res.type[0] === "Employer") {
                alert('You cannot apply job as a employer type');
            } 
          }
        });
    }
>>>>>>> 0024b52b9a2d27341e1eccdd856bca2f49ff294a

      this.getUser = this.getUser.bind(this);
      this.applyJob = this.applyJob.bind(this);
    }

    applyJob() {
      this.setState({ loading: true });
      console.log("applying..?");
      console.log(this.props._id);
      axios
        .post(
          "https://shelteroinf.herokuapp.com/job-search/apply-job",
          { id: this.props._id },
          { withCredentials: true, crossdomain: true }
        )
        .then(response => {
          //handle success
          if (response.data) {
            alert(
              "Hi " +
                response.data.email +
                " you have successfully applied for this job!"
            );
          } else {
            console.log("failed to apply");
          }
          this.setState({ applying: false, loading: false});
        })
        .catch(error => {
          console.log(error);
        });
      //event.preventDefault();
    }

    getUser() {
      this.setState({ loading: true }); //start loading
      const url = "https://shelteroinf.herokuapp.com/user";
      try {
        axios
          .get(url, { withCredentials: true, crossdomain: true })
          .then(response => {
            console.log(response.data);
            if (response.data == "no user session") {
              console.log("change isLogIn state to false");
              this.setState({ login_state: false, loading: false });
            } else {
              console.log("change isLogIn state to true");
              console.log(response.data);
              this.setState({
                type: response.data.type,
                login_state: true,
                loading: false
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      } catch (e) {
        console.log(e);
      }
    }

    handleApply() {
      this.setState({ applying: true });
      this.getUser();
      this.applyJob();
    }

    componentDidMount() {
      if (
        this.state.applying &&
        this.state.type == "Employee" &&
        !this.state.loading
      ) {
        this.applyJob();
      } else if (
        this.state.applying &&
        this.state.type == "Employer" &&
        !this.state.loading
      ) {
        console.log("employer can't apply for job");
        alert("You are an employer! can't apply for job");
        this.setState({ applying: false });
      } else {
        console.log("loading...");
      }
    }

    render() {
      const { classes } = this.props;
<<<<<<< HEAD
      if (this.state.loading) {
        return (
          <Welcome
            loopDuration={1000}
            data={[
              {
                backgroundColor: "#638709",
                textColor: "#FFFFFF",
                text: "Welcome to Sheltero!",
                image: require("../../img/seedling.png")
              }
            ]}
=======
      return (
        <div className={classes.root} flexGrow="1">
          <img 
            alt="Job-Image"
            style={{ height: "45%", width: "100%", display: "block" }}
            className={classes.imgRaised}
            src={this.props.img}
>>>>>>> 0024b52b9a2d27341e1eccdd856bca2f49ff294a
          />
        );
      } else {
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
                  back
                </Button>
                <Button
                  color="rose"
                  onClick={() => {
                    this.handleApply();
                  }}
                >
                  apply
                </Button>
              </GridItem>
              <GridItem xs={6} sm={6} md={6}>
                <Card>
                  <CardBody>
                    <h3>{this.props._id}</h3>
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
  }
);
