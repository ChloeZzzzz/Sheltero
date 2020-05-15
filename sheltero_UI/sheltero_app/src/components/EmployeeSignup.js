import React from 'react';
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
      backgroundColor: '#99C015',
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
    })
  
  
  export default withStyles(styles) (class EmployeeSignup extends React.Component {
    
    /* implement constructor() to initialise state and bind event handler*/
    constructor(props) { 
      super(props);
      this.state = {employeeRegister: { gender: '', fname: '', lname: '', email: '', password: '' }};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    /* getting values from form*/
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    handleSubmit(event) {
      alert('Hi' + this.state.fname + ', you have successfully signed up as an employee!');
      event.preventDefault();
    }
    
    render () {
      const { classes } = this.props; /* to implement styles */
      const {employeeRegister: {gender, fname, lname, email, password } } = this.state;
    
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
          
          <form className={classes.form} onSubmit={this.handleSubmit}>
  
            
            <Grid container spacing={2}>
              <Grid item xs={12} className={classes.positionLeft} >
                    <FormControl variant="outlined" className={classes.formControl}>
                      <InputLabel>Gender</InputLabel>
                      <Select
                        required
                        labelId="gender"
                        id="gender"
                        value={this.state.gender}
                        onChange={this.handleChange}
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
                  autoComplete="fname"
                  name="fname"
                  variant="outlined" //add border to text field
                  required
                  fullWidth
                  id="fname"
                  label="First Name"
                  value={this.state.fname}
                />
              </Grid>
  
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  required
                  fullWidth
                  id="lname"
                  label="Last Name"
                  name="lname"
                  autoComplete="lname"
                  value={this.state.lname}
                />
              </Grid>
  
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={this.state.email}
                />
              </Grid>
  
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Create Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                />
                </Grid>
  
                <Grid item xs={12}>
                <TextField
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
    );
  }
})
