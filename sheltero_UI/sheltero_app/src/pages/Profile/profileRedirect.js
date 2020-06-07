import React from "react";
import axios from "axios";

class ProfileRedirect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userType: "" };
  }

  async getUserInfo() {
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
            console.log(response.data);
          }
        })
        .catch(error => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  }
}

export default ProfileRedirect;
