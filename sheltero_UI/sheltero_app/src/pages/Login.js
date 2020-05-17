import React from "react";
import { Redirect } from "react-router-dom";
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
    this.state = {email: '', password: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* getting values from form*/
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit(event) {
    alert(this.state.email+ ', loged in');
      
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
/*
    postData('https://shelteroinf.herokuapp.com/user/login', (this.state))
      .then(data => {
        console.log(data); 
      });
*/
    const res = postData('https://shelteroinf.herokuapp.com/user/login', (this.state));
    console.log(res)
    if (res) {
      this.setState({redirect: '/'});
    }
    event.preventDefault();

  }

  render() {
    const { classes } = this.props;
    const {email, password} = this.state;
  if (this.state.redirect) {
    return <Redirect to={this.state.redirect} />
  } else {
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