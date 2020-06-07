import React from "react";
// @material-ui/core components
import { withStyles } from "@material-ui/core";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Welcome from "react-welcome-page";
import axios from "axios";

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

class ViewPostedJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posted_job: [],
      slicedJobs: [],
      loading: false,
      needRerender: false,
    };
    this.listJobs = this.listJobs.bind(this);
    this.getJobSliced = this.getJobSliced.bind(this);
    this.getPostedJob = this.getPostedJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  getJobSliced() {
    var arr = [];
    for (var i = 0; i < this.state.posted_job.length; i++) {
      console.log(this.state.posted_job[i][0]);
      if (this.state.posted_job[i][0]) {
        arr.push([
          this.state.posted_job[i][0].jobTitle,
          this.state.posted_job[i][0].jobTag,
          this.state.posted_job[i][0].salary,
          this.state.posted_job[i][0]._id,
        ]);
        console.log("===getjobsliced===")
        console.log(this.state.posted_job[i][0]._id);
      }
    }
    console.log(arr);
    this.setState({ slicedJobs: arr });
  }

  getPostedJob() {
    axios
      .get("https://shelteroinf.herokuapp.com/user/postedJob", {
        withCredentials: true
      })
      .then(response => {
        let res = response.data;
        console.log(res);
        if (res.length > 0) {
          this.setState({
            posted_job: res,
            loading: false,
          });
          this.getJobSliced();
        } else {
          console.log("no job posted");
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
            <Button className={this.props.button} onClick={this.handleDeleteClick.bind(this, this.state.slicedJobs[i][3])}>Delete Job</Button>
          </h4>
          <br />
        </div>
      );
    }
    return jobsToRender;
  };

  deleteJob(id) {
      this.setState({loading: true});
      const url = "https://shelteroinf.herokuapp.com/job-search/job-deleting/";
      console.log("job id to delte");
      console.log(id);
      if (id) {
        axios
        .delete(url + id, {withCredentials: true})
        .then(res => {
            console.log("delteing...")
            console.log(res);
          if (res.data) {
            console.log(res);
            console.log("job deleted successfully");
            /*
            this.posted_job.pull([
                res.data.jobTitle,
                res.data.jobTag,
                res.data.salary,
                res.data._id
              ])
            */
           this.setState({loading: false});
          } else {
            console.log(res);
          }
        })
        .catch(error => {
          console.log("something went wrong", error);
        });
      } else {
          console.log("has to input job id to delete!");
      }
  }


  componentDidMount() {
    this.getPostedJob();
  }


  handleDeleteClick(id) {
    this.deleteJob(id);
  }

  render() {
    const { classes } = this.props;
    const { posted_job } = this.state;
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
      if (posted_job.length === 0) {
        return (
          <Card>
            <CardHeader color="primary" className={classes.containerRow}>
              <h4 className={classes.cardTitleWhite}>Posted Job</h4>
            </CardHeader>
            <CardBody profile className={classes.containerColumn}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <h4> No Job Posted Yet</h4>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Button
                    color="primary"
                    round
                    className={classes.button}
                    href="/jobpost"
                  >
                    Post New Job
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
              <h4 className={classes.cardTitleWhite}>Posted Job</h4>
            </CardHeader>
            <CardBody profile className={classes.containerColumn}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  {this.listJobs()}
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <Button
                    color="primary"
                    round
                    className={classes.button}
                    href="/jobpost"
                  >
                    Post New Job
                  </Button>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        );
      }
    }
  }
}
export default withStyles(styles)(ViewPostedJob);
