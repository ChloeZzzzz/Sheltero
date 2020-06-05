import React from 'react';
import Cookies from 'js-cookie';
import axios from "axios";

export default class CheckLogin extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        loggedInStatus: false,
        // user: {}
      };
  
      this.handleLogin = this.handleLogin.bind(this);
      this.handleLogout = this.handleLogout.bind(this);
    }
    
    handleLogout(){
      this.setStatus({
        loggedInStatus:false,
        // user: {}
      });
    }
    handleLogin() {
      this.setState({
        loggedInStatus: true,
        // user: data.user
      });
    }
}