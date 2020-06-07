
import React from 'react';
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
            confirmpw: '',
            redirect: null,
            msg: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange (e) {
        this.setState({msg : ''});
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit(event) {
        if (this.state.confirmpw !== this.state.password) {
            //alert('Oops, you are typing different password in the confirm password section');
            this.setState({ msg: 'Oops, you are typing different password in the confirm password section'});
        } else {
            axios.post('https://shelteroinf.herokuapp.com/user/signup', this.state,{withCredentials:true,crossdomain:true})
                .then((response) => {
                    let res = response.data.flash['signupMessage'];
                    console.log(res);
                    if(res[res.length-1] === "User already logged in"){
                        window.sessionStorage.setItem("loggedIn", true);
                        alert("Oops, you have already logged in. You have to log out first before sign!");
                        this.setState({ redirect: "/profileRedirect" });
                    }
                    else if (res[res.length-1] === "Signup Success") {
                        window.sessionStorage.setItem("loggedIn", true);
                        alert('Hi ' + this.state.first_name + ', you have successfully signed up as an '+this.state.type+'!');
                        this.setState({ redirect: "/profileRedirect" });
                    }
                    else {
                        //alert("This email address is already taken. Please choose another one :)");
                        window.sessionStorage.setItem("loggedIn", false);
                        this.setState({ msg: "This email address is already taken. Please choose another one :)"});
                    }
                }).catch((error) => {
                console.log(error)});
        }
        event.preventDefault();
    }
}

export default SignupForm;
