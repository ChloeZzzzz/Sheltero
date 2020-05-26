import React from 'react';

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
        console.log("inside parent class!!!!!!!!!");
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
  
        postData('https://shelteroinf.herokuapp.com/user/signup', (this.state))
          .then(res => {
            console.log(res);
            if (res === 'success') {
              alert('Hi ' + this.state.first_name + ', you have successfully signed up as an employer!');
              this.setState({ redirect: "/login" });
            } else {
              alert('Opps, something went wrong so that u failed to sign up!');
              console.log("failed to sign up")
            }
          }).catch((error) => {
            console.log(error)});
  
  
        event.preventDefault();
      }
}

export default SignupForm;