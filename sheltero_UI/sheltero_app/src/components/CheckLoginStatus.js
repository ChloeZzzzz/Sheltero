import React from 'react';
import axios from "axios";

export default class CheckLogin extends React.Component {
    constructor() {
        super();
    
        this.state = {
          loggedInStatus: false,
          // user: {}
        };
    
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
      }
    
      checkLoginStatus() {
        axios
          .get("http://shelteroinf.herokuapp.com/user", {withCredentials: true, crossdomain:true})
          .then(res => {
            console.log(res);
            if ( // the case when response data is logged in but the current state is not logged in
              res.data.login && this.state.loggedInStatus === false
            ) {
              this.setState({
                loggedInStatus: true,
                user: res.data.user
              });
            } else if ( // the case when the current state is logged in but the user is not actually authenticated
              !res.data.login & (this.state.loggedInStatus === true)
            ) {
              this.setState({
                loggedInStatus: true,
                user: {}
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
          loggedInStatus:false,
          // user: {}
        });
      }
      handleLogin(data) {
        this.setState({
          loggedInStatus: true,
          // user: data.user
        });
      }
}