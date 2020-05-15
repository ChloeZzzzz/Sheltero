import React from 'react';
import { LockOutlined } from '@ant-design/icons';
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
         Container } from '@material-ui/core';

const styles = theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    avatar: {
      margin: theme.spacing(1),
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
    
    })
  
  
  
  export default withStyles(styles) (class EmployerSignup extends React.Component {

    state = {
        open: false,
        employerRegister: {
            firstName: '',
            lastName: '',
            email: '',
            company:'',
            password:'',
        }
    }

    handleToggle = () => {
        this.setState({
            open: !this.state.open
        })
    }

    handleChange = name => ({target: {value}}) => {
        this.setState({
            employerRegister: {
                ...this.state.exercise,
                [name]: value
            }
        })
    }
    
    render() {
        const { classes } = this.props; //receive classes styles
        const { open, employerRegister: {firstName, lastName, email, company, password } } = this.state

    return (
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
              <LockOutlined />
          </Avatar>
          <H2 component="h1" variant="h5">
            Employer Sign Up
          </H2>
          
          <form className={classes.form} noValidate>
  
            
            <Grid container spacing={2}>
  
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.textField}
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined" //add border to text field
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                />
              </Grid>
  
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
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
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  variant="outlined"
                  required
                  fullWidth
                  id="company"
                  label="Company/Institution Name"
                  name="companyName"
                  autoComplete="companyName"
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
                  label="I want to receive updates via email."
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
