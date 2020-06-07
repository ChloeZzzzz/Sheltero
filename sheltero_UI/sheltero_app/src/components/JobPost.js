// this js file is the basic ui for job posting page
import React from "react";
import Button from "./CustomButtons/Button";
import { H2 } from "./theme";
import ReadFile from "./ReadFile";
import Copyright from "./Copyright";
import axios from "axios";
import { Redirect } from "react-router-dom";
import {
  CssBaseline,
  TextField,
  Box,
  Grid,
  withStyles,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@material-ui/core";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "80vw"
  },
  avatar: {
    marginBottom: theme.spacing(2),
    backgroundColor: "#99c040"
  },
  box: {
    margin: theme.spacing(8, 0, 2, 0)
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  formItem: {
    margin: theme.spacing(3, 0, 0, 0)
  },
  positionLeft: {
    display: "flex",
    alignItems: "flex-start"
  },
  formControl: {
    minWidth: "100%"
  },
  radioGroup: {
    border: 1,
    borderRadius: 10
  }
});

export default withStyles(styles)(
  class JobPost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        jobTitle: "",
        creditLevel: 0,
        salary: 0,
        jobDetail: "",
        jobTag: "",
        jobArea: "",
        redirect: "",
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }

    handleSubmit(event) {
      axios
        .post(
          "https://shelteroinf.herokuapp.com/job-search/job-posting",
          this.state,
          { withCredentials: true, crossdomain: true }
        )
        .then(response => {
          console.log(response);
          if (response === "you can't post a job as an employee") {
            alert("you can't post a job as an employee");
          } else if (response) {
            alert(
              "You have successfully posted a new job: " + this.state.jobTitle
            );
            this.setState({ redirect: "/employer" });
          } else {
            alert("Opps, something went wrong. Post job again.");
            console.log("failed to post job");
          }
        })
        .catch(error => {
          console.log(error);
        });
      event.preventDefault();
    }

    render() {
      const { classes } = this.props;
      if (this.state.redirect) {
        console.log("post job redirect" + this.state.redirect);
        return <Redirect to={this.state.redirect} />;
      } else {
        return (
          <Container component="main" className={classes.paper}>
            <CssBaseline />
            <div>
              <H2 className={classes.positionLeft}>Post New Job</H2>

              <form
                className={classes.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
              >
                <Grid container sm={8} direction="column">
                  <Grid item sm={6} xs={3}>
                    <TextField
                      className={classes.formItem}
                      onChange={this.handleChange}
                      value={this.state.jobTitle}
                      name="jobTitle"
                      variant="outlined" //add border to text field
                      required
                      fullWidth
                      id="jobTitle"
                      label="Job Title"
                    />
                  </Grid>

                  <Grid container xs={12} sm={12} md={12}>
                    <Grid item sm={6} xs={3}>
                      <TextField
                        className={classes.formItem}
                        onChange={this.handleChange}
                        value={this.state.salary}
                        name="salary"
                        variant="outlined" //add border to text field
                        fullWidth
                        id="salary"
                        label="Salary: $ per day"
                        type="number"
                        InputProps={{inputProps: {min: 1}}}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    sm={6}
                    className={`${classes.positionLeft} ${classes.formItem}`}
                  >
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      {/* <FormLabel component="legend">Credit Level</FormLabel> */}
                      <InputLabel>Credit Level</InputLabel>
                      <Select
                        value={this.state.creditLevel}
                        name="creditLevel"
                        required
                        onChange={this.handleChange}
                        id="creditLevel"
                        label="Credit Level"
                      >
                        <MenuItem value="" disabled>
                          Credit Level
                        </MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={10}>
                    <TextField
                      className={classes.formItem}
                      onChange={this.handleChange}
                      value={this.state.jobDetail}
                      name="jobDetail"
                      variant="outlined" //add border to text field
                      required
                      fullWidth
                      multiline
                      rows={10} //set long answer text field
                      id="jobDetail"
                      label="Job Description"
                    />
                  </Grid>

                  <Grid
                    item
                    sm={12}
                    className={`${classes.positionLeft} ${classes.formItem}`}
                  >
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel>Select a Job Type</InputLabel>
                      <Select
                        name="jobTag"
                        value={this.state.jobTag}
                        required
                        onChange={this.handleChange}
                        id="jobTag"
                        label="Job Type"
                      >
                        <MenuItem value="" disabled>
                          Job Type
                        </MenuItem>
                        <MenuItem value="food">
                          Agriculture, Food and Natural Resources
                        </MenuItem>
                        <MenuItem value="arts">
                          Arts, Audio/Video Technology and Communications
                        </MenuItem>
                        <MenuItem value="education">
                          Education and Training
                        </MenuItem>
                        <MenuItem value="administration">
                          Government and Public Administration
                        </MenuItem>
                        <MenuItem value="tourism">
                          Hospitality and Tourism
                        </MenuItem>
                        <MenuItem value="IT">Information Technology</MenuItem>
                        <MenuItem value="manufacturing">Manufacturing</MenuItem>
                        <MenuItem value="science">
                          Science, Technology, Engineering and Mathematics
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid
                    item
                    sm={12}
                    className={`${classes.positionLeft} ${classes.formItem}`}
                  >
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel>Select a Job Area</InputLabel>
                      <Select
                        name="jobArea"
                        value={this.state.jobArea}
                        onChange={this.handleChange}
                        required
                        id="jobArea"
                        label="Job Area"
                      >
                        <MenuItem value="" disabled>
                          Job Area
                        </MenuItem>
                        <MenuItem value="CBD">Melbourne - CBD</MenuItem>
                        <MenuItem value="st_kilda">St Kilda</MenuItem>
                        <MenuItem value="north_melbourne">
                          North Melbourne
                        </MenuItem>
                        <MenuItem value="docklands">Docklands</MenuItem>
                        <MenuItem value="east_melbourne">
                          East Melbourne
                        </MenuItem>
                        <MenuItem value="carlton">Carlton</MenuItem>
                        <MenuItem value="parkville">Parkville</MenuItem>
                        <MenuItem value="southbank">Southbank</MenuItem>
                        <MenuItem value="south_yarra">South Yarra</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <ReadFile />
                  </Grid>
                  <br />
                  <br />
                  <Button
                    type="submit"
                    color="primary"
                    className={classes.formItem}
                  >
                    Post Job
                  </Button>
                </Grid>
              </form>
            </div>

            <Box mt={5} className={classes.box}>
              <Copyright />
            </Box>
          </Container>
        );
      }
    }
  }
);
