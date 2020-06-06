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


export default withStyles(styles) (class Logout extends React.Component {
  /* implement constructor() to bind event handler*/
  constructor(props) { 
    super(props);
  }
    
  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
              <UserOutlined />
          </Avatar>
          <H2 component="h1" variant="h5">
            Signedout
          </H2>
        </div>

        <Box mt={5} className={classes.box}>
          <Copyright />
        </Box>
      </Container>
    );
  }
});