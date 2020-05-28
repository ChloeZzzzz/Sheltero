import React from 'react';
import SignupForm from './SignupForm';
import { Redirect } from "react-router-dom";
import CreateIcon from '@material-ui/icons/Create';
import { PrimButton, H2, TextLink } from './theme';
import Copyright from './Copyright';
import {
         Avatar,
         CssBaseline,
         TextField,
         FormControlLabel,
         Checkbox,
         Grid,
         Box,
         withStyles,
         Container,
         FormControl,
         InputLabel,
         Select,
         MenuItem,} from '@material-ui/core';

const styles = theme => ({
    paper: {
      marginTop: theme.spacing(4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    avatar: {
      marginBottom: theme.spacing(2),
      backgroundColor: '#99c040',
    },
    box: {
      margin: theme.spacing(8,0,2,0),
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    textField: {
      margin: theme.spacing(.5, 0, .5),
    },
    positionLeft: {
      display: 'flex',
      alignItems: 'flex-start',
    },
    formControl: {
      minWidth: 120,
    },
  }
)
class EmployeeSignup extends SignupForm {
  constructor(props) {
    super(props);
    this.state = {
      gender: '',
    }
  }

  render () {
    const { classes } = this.props;
    if (this.state.redirect) {
      console.log("signup in redirect"+this.state.redirect);
      return <Redirect to={this.state.redirect} />
    } else {
      return (
        <Container component="main" maxWidth="xs" >
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
                <CreateIcon />
            </Avatar>
            <H2 component="h1" variant="h5">
              Employee Sign Up
            </H2>

            <form className={classes.form} onSubmit={this.handleSubmit} onChange={this.handleChange}>


              <Grid container spacing={2}>
                <Grid item xs={12} className={classes.positionLeft} >
                      <FormControl variant="outlined" className={classes.formControl}>
                        <InputLabel>Gender</InputLabel>
                        <Select
                          onChange={this.handleChange}
                          value={this.state.gender}
                          name="gender"
                          required
                          labelId="gender"
                          id="gender"
                          label="Gender">
                          <MenuItem value="" disabled>Gender</MenuItem>
                          <MenuItem value={'m'}>Male</MenuItem>
                          <MenuItem value={'f'}>Female</MenuItem>
                          <MenuItem value={'x'}>Prefer Not To Tell</MenuItem>
                        </Select>
                      </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.textField}
                    onChange={this.handleChange}
                    value={this.state.first_name}
                    name="first_name"
                    autoComplete="first_name"
                    variant="outlined" //add border to text field
                    required
                    fullWidth
                    id="first_name"
                    label="First Name"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.textField}
                    onChange={this.handleChange}
                    value={this.state.last_name}
                    name="last_name"
                    variant="outlined"
                    required
                    fullWidth
                    id="last_name"
                    label="Last Name"
                    autoComplete="last_name"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    className={classes.textField}
                    onChange={this.handleChange}
                    value={this.state.email}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    type="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    onChange={this.handleChange}
                    className={classes.textField}
                    value={this.state.password}
                    name="password"
                    variant="outlined"
                    required
                    fullWidth
                    label="Create Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"

                  />
                  </Grid>

                  <Grid item xs={12}>
                  <TextField
                    onChange={this.handleChange}
                    className={classes.textField}
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Confirm Password"
                    type="password"
                    id="createPassword"
                    autoComplete="current-password"
                  />
                </Grid>

                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox className={classes.checkbox} value="allowExtraEmails" color="primary"/>}
                    label="I want to receive new jobs posts and updates via email."
                  />
                </Grid>

              </Grid>

              <PrimButton
                type="submit"
                fullWidth
                variant="contained"
                className={classes.submit}>
                Sign Up
              </PrimButton>

              <Grid container justify="flex-end">
                <Grid item>
                    <TextLink variant="body2" href="/login">
                      Already have an account? Sign in
                    </TextLink>
                </Grid>
              </Grid>

            </form>
          </div>

          <Box mt={5} className={classes.box}>
            <Copyright />
          </Box>

        </Container>
      )
    }
  }
}

  export default withStyles(styles) (EmployeeSignup)