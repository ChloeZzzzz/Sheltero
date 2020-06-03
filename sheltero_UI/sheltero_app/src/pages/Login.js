import React from "react";
import { Redirect,Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import { PrimButton, H2, TextLink } from '../components/theme';
import Copyright from '../components/Copyright';
import { Avatar,
         CssBaseline,
         TextField,
         Box,
         Grid,
         withStyles,
         Container } from '@material-ui/core';

import axios from 'axios';
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
    this.state = {email: '', password: '', errors:{}};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* getting values from form*/
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit(event) {
      
    async function postData(url = '', data = {}) {
      const response = await fetch(url, {
        method: 'POST', 
        mode: 'cors', 
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer', 
        body: JSON.stringify(data) 
      });
      return response.json(); 
    }
    const { email, password } = this.state;
    axios.post('https://shelteroinf.herokuapp.com/user/login', {email,password})
        .then((response) => {console.log(response);
          if (response.status===200) {
            alert('Hi ' + this.state.email + ', you have successfully logged in!');
            this.setState({ redirect: "/user" });
            console.log(response.data)
          } else {
            alert('Opps, something went wrong so that u failed to log in!');
            this.setState({ redirect: "/login" });
            console.log("failed to login")
          }
        }).catch((error) => {
      console.log(error)});
      //     this.setState({ error: '' });
      //     this.props.history.push('/user');
      //     console.log(response.data);
      //     console.log(response.status);
      //   },(error)=>{console.log(error.status);})
      //   .catch((error) => {
      //     this.props.history.push('/')
      //   });

    event.preventDefault();

  }
    //     postData('https://shelteroinf.herokuapp.com/user/login', (this.state));
    // console.log(res)
    // if (res) {
    //   this.setState({redirect: '/user'});
    // }

    // The code below is the one that is right, but have to change the response
    // of in the back end which is related to passport authentication
    // and probably the flash message, where I (della) could not solve it yet.
    // so the code above is used... (but they are wrong! they couldn't handle
    // the redirect correctly when user authetication failed, it treats them all the same)



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