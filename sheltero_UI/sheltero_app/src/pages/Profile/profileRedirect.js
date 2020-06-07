import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Welcome from 'react-welcome-page';
class ProfileRedirect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userType: "", loading: false };
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  async getUserInfo() {
    const url = "https://shelteroinf.herokuapp.com/user";
    try {
      axios
        .get(url, { withCredentials: true, crossdomain: true })
        .then(response => {
          console.log(response.data);
          if (response.data === "no user session") {
            console.log("user not logged in!");
            this.setState({ userType: "", loading: false });
          } else {
            console.log("user is logged in");
            console.log(response.data.type[0]);
            if (response.data.type[0] === "Employee") {
              this.setState({ userType: "Employee", loading: false });
            } else {
              this.setState({ userType: "Employer", loading: false });
            }
          }
          this.setState({loading: false});
        })
        .catch(error => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  }

  componentWillMount() {
    this.setState({loading: true});
    this.getUserInfo();
  }

  componentDidMount() {
      this.setState({loading: true});
      this.getUserInfo();
  }

  render() {
    console.log("===user type===");
    console.log(this.state.userType);
    if (this.state.userType === "Employer" && this.state.loading === false) {
      return <Redirect to={"/employer"} />;
    } else if (this.state.userType === "Employee" && this.state.loading === false) {
      return <Redirect to={"/employee"} />;
    } else if (this.state.userType === "" && this.state.loading === false) {
      return <Redirect to={"/"} />;
    } else {
        return (
        <Welcome
            loopDuration={1000}
            data={
                [
                    {
                        "backgroundColor": "#638709",
                        "textColor": "#FFFFFF",
                        "text": "Welcome to Sheltero!",
                        "image": require('../../img/seedling.png')
                    }
                ]
            }
        />);
    }
  }
}

export default ProfileRedirect;
