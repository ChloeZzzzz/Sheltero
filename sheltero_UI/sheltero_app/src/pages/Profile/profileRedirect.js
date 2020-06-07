import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
class ProfileRedirect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userType: "Employer" };
    this.getUserInfo = this.getUserInfo.bind(this); 
  }

  getUserInfo() {
    console.log("inside getuser info");
    const url = "https://shelteroinf.herokuapp.com/user";
    try {
      axios
        .get(url, { withCredentials: true, crossdomain: true })
        .then(response => {
          console.log(response.data);
          if (response.data == "no user session") {
            console.log("user not logged in!");
          } else {
            console.log("user is logged in");
            console.log(response.data.type[0]);
            if (response.data.type[0] == "Employee") {
                this.setState({userType: "Employee"});
            } else {
                this.setState({userType: "Employer"});
            }
          }
        })
        .catch(error => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.getUserInfo();
}


  render() {
    if (this.state.userType == "Employer") {
      return <Redirect to={"/employer"} />;
    } else {
      return <Redirect to={"/employee"} />;
    }
  }
}

export default ProfileRedirect;
