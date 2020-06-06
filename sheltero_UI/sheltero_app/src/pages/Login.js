import React from "react";
import { Redirect,Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import { PrimButton, H2, TextLink } from '../components/theme';
import Copyright from '../components/Copyright';
import CheckLogin from '../components/CheckLoginStatus';
import { Avatar,
         CssBaseline,
         TextField,
         Box,
         Grid,
         withStyles,
         Container } from '@material-ui/core';

import axios from 'axios';
import Nav from "../components/Nav";


const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  avatar: {
    marginBottom: theme.spacing(1),
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


export default withStyles(styles) (class Login extends React.Component {
  /* implement constructor() to bind event handler*/
  constructor(props) { 
    super(props);
    this.state = {email: '', password: '', errors:{}, loggingIn: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* getting values from form*/
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(event) {
    const { email, password } = this.state;
    axios.post('https://shelteroinf.herokuapp.com/user/login', {"email":email,"password":password},{withCredentials:true,crossdomain:true})
      .then((response) => {
        let res = response.data.flash["loginMessage"];
        this.setState({loggingIn:false});
        console.log(res);
        if(!res){
          window.sessionStorage.setItem("loggedIn", false);
          alert('Opps, something went wrong so that u failed to log in!');
          console.log("failed to login");
        }
        else if (res[res.length-1] == "Successful login") {
          window.sessionStorage.setItem("loggedIn", true);
          alert('Hi ' + this.state.email + ', you have successfully logged in!');
          this.setState({redirect:'/employer'})
        }
        else if (res[res.length-1]=="User already logged in"){
          window.sessionStorage.setItem("loggedIn", true);
          alert('Hi ' + this.state.email + ', you are already logged in');
          this.setState({redirect:'/employer'})
        }
        else{
          alert("beep beep boop something went really wrong");
        }
      }).catch((error) => {
        console.log(error)});
        event.preventDefault();
    }
    
  render() {
    const { classes } = this.props;
    const {email, password, error} = this.state;
  if (this.state.redirect) {
    return <Redirect to={this.state.redirect} />
  } else if (error) {
    return <Redirect to={this.state.redirect} />}
    else{
    return (
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
              <UserOutlined />
          </Avatar>
          <H2 component="h1" variant="h5">
            Sign in
          </H2>
          
          <form className={classes.form} onSubmit={this.handleSubmit} onChange={this.handleChange}>

            
            <Grid container spacing={2}>

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
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                />
              </Grid>


            </Grid>

            <PrimButton
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}>
              Login
            </PrimButton>

            <Grid container justify="flex-end">
              <Grid item>
                  <TextLink variant="body2" href="/signup" >
                    Haven't registered yet? Sign up!
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
}
})