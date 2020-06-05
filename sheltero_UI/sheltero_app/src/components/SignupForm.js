import React from 'react';
import postUsersSignup from '../api';
import axios from 'axios';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        /* initialise this state */
        this.state = {
                      type: '',
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
      axios.post('https://shelteroinf.herokuapp.com/user/signup', this.state,{withCredentials:true})
        .then((response) => {
          let res = response.data.flash["signupMessage"];
          if(!res){
            alert('Hi ' + this.state.first_name + ', you have successfully signed up as an '+this.state.type+'!');
            this.setState({ redirect: "/login" });
          }
          else if (res[res.length-1] == "Successful signup") {
            alert('Opps, something went wrong!');
            console.log("failed to sign up")
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