import React from 'react';
import axios from "axios";

export default class CheckLogin extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loggedInStatus: "logged_in",
          // user: {},
          redirect: null
        };
    
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
      }
    
      checkLoginStatus() {
        axios
          .get("https://shelteroinf.herokuapp.com/user/login", {withCredentials: true})
          .then(res => {
            if ( // the case when response data is logged in but the current state is not logged in
              res.data.login && this.state.loggedInStatus === "not_logged_in"
            ) {
              this.setState({
                loggedInStatus: "logged_in",
                // user: res.data.user
              });
            } else if ( // the case when the current state is logged in but the user is not actually authenticated
              !res.data.login & (this.state.loggedInStatus === "logged_in")
            ) {
              this.setState({
                loggedInStatus: "not_logged_in",
                // user: {}
              });
            }
          })
          .catch(error => {
            console.log("check login error", error);
          });
      }
    
      componentDidMount() { //componentDidMount() is invoked immediately after a component is mounted
        this.checkLoginStatus();
      }
    
      handleLogout(){
        this.setStatus({
          loggedInStatus:"not_logged_in",
          // user: {}
        });
      }
      handleLogin(data) {
        this.setState({
          loggedInStatus: "logged_in",
          // user: data.user
        });
      }
}