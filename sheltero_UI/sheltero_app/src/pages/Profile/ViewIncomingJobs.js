import React from "react";
// @material-ui/core components
import TextField from "@material-ui/core/TextField";
import { Link, withStyles } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Welcome from "react-welcome-page";
import Container from "@material-ui/core/Container";
import Nav from "../../components/Nav";
import axios from "axios";
import { theme } from "../../components/theme.js";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80vw"
  },
  containerColumn: {
    width: "100%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
  },
  containerRow: {
    // width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    letterSpacing: 1,
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontSize: "16px",
    fontWeight: "300",
    letterSpacing: 1,
    marginBottom: "3px",
    textDecoration: "none"
  },
  button: {
    color: "primary",
    marginTop: theme.spacing(3),
    alignSelf: "center"
  },

  label: {
    textTransform: "capitalize",
    marginBottom: "0px"
  },
  description: {
    width: "100%",
    fontFamily: ["avenir", "roboto"].join(","),
    fontSize: 16,
    letterSpacing: 0,
    marginBottom: "3px",
    textTransform: "capitalize"
  }
});

class ViewIncomingJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      your_job: [],
      slicedJobs: []
    };

    this.getJobSliced = this.getJobSliced.bind(this);
    this.getApprovedJob = this.getApprovedJob.bind(this);
  }

  getJobSliced() {
    var arr = [];
    for (var i = 0; i < this.state.your_job.length; i++) {
      console.log(this.state.your_job[i][0]);
      if (this.state.your_job[i][0]) {
        arr.push([
          this.state.your_job[i][0].jobTitle,
          this.state.your_job[i][0].jobTag,
          this.state.your_job[i][0].salary,
          this.state.your_job[i][0]._id
        ]);
      }
    }
    console.log(arr);
    this.setState({ slicedJobs: arr });
  }

  getApprovedJob() {
    this.setState({ loading: true });
    axios
      .get("https://shelteroinf.herokuapp.com/user/jobNotification", {
        withCredentials: true
      })
      .then(response => {
        let res = response.data;
        console.log(res);
        if (res.length > 0) {
          this.setState({
            your_job: res,
            loading: false,
          });
          this.getJobSliced();
        } else {
          console.log("no approved job");
        }
      })
      .catch(error => {
        console.log("check fetch data error", error);
      });
  }

  listJobs = () => {
    const jobsToRender = [];

    for (var i = 0; i < this.state.slicedJobs.length; i++) {
      jobsToRender.push(
        <div>
          <h4>
            <li>
              Job Information
              <p>Job Title: {this.state.slicedJobs[i][0]}</p>
              <p>Job Tag: {this.state.slicedJobs[i][1]}</p>
              <p>Salary: {this.state.slicedJobs[i][2]}</p>
            </li>
          </h4>
          <br />
        </div>
      );
    }
    return jobsToRender;
  };

  componentDidMount() {
    this.getApprovedJob();
  }

  render() {
    const { classes } = this.props;
    const { your_job } = this.state;
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
            />
          );
    } else {
      if (your_job.length == 0) {
        return (
          <Card>
            <CardHeader color="primary" className={classes.containerRow}>
              <h4 className={classes.cardTitleWhite}>Your Jobs</h4>
            </CardHeader>
            <CardBody profile className={classes.containerColumn}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <h4> You have no incoming job lately.</h4>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Button
                    color="primary"
                    round
                    className={classes.button}
                    href="/"
                  >
                    View Jobs
                  </Button>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        );
      } else {
        return (
          <Card>
            <CardHeader color="primary" className={classes.containerRow}>
              <h4 className={classes.cardTitleWhite}>Your Job</h4>
            </CardHeader>
            <CardBody profile className={classes.containerColumn}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  {this.listJobs()}
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        );
      }
    }
  }
}
export default withStyles(styles)(ViewIncomingJobs);
