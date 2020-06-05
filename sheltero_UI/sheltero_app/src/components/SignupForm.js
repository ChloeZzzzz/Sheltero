import React from 'react';
import postUsersSignup from '../api';
import axios from 'axios';
class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        /* initialise this state */
        this.state = {
                      type: this.props.workType,
                      first_name: '',
                      last_name: '',
                      email: '',
                      password: '',
                      redirect: null};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
      this.setState({
        [e.target.name] : e.target.value
      });
    }

    handleSubmit(event) {
      axios.post('https://shelteroinf.herokuapp.com/user/signup', this.state,{withCredentials:true,crossdomain:true})
        .then((response) => {
          let res = response.data.flash['signupMessage'];
          console.log(res);
          if(res[res.length-1] == "Signup Failure"){
            alert("Oops, something went wrong");
          }
          else if (res[res.length-1] == "Signup Success") {
            alert('Hi ' + this.state.first_name + ', you have successfully signed up as an '+this.state.type+'!');
            this.setState({ redirect: "/user" });
          }
          else{
            alert("beep beep boop something went really wrong");
          }
        }).catch((error) => {
          console.log(error)});
      event.preventDefault();
    }
}

export default SignupForm;
