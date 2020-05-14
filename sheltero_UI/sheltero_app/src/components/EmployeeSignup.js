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
         makeStyles,
         Container,
         FormControl,
         FormLabel,
         Radio,
         RadioGroup} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
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
  )
  
  
  
  export default function EmployeeSignup() {
    const classes = useStyles();
  
    return (
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
              <LockOutlined />
          </Avatar>
          <H2 component="h1" variant="h5">
            Sign up
          </H2>
          
          <form className={classes.form} noValidate>
  
            
            <Grid container spacing={2}>
            <FormLabel component="legend" >Gender</FormLabel> 
              <Grid item xs={12} className={classes.positionLeft} >
                    <FormControl 
                      component="fieldset"
                      required>
  
                          <RadioGroup name="gender" >
                          <FormControlLabel
                            value="Male"
                            control={<Radio color="primary" />}
                            label="Male"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="Female"
                            control={<Radio color="primary" />}
                            label="Female"
                            labelPlacement="end"
                          />
                          <FormControlLabel
                            value="X"
                            control={<Radio color="primary" />}
                            label="Prefer not to tell"
                            labelPlacement="end"
                          />
                          </RadioGroup>
                        
                    </FormControl>
              </Grid>
  
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
                  autoFocus
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
                  label="I want to receive inspiration, marketing promotions and updates via email."
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