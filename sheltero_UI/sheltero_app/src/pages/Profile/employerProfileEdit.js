import React from "react";
import TextField from '@material-ui/core/TextField';
// import { Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Welcome from 'react-welcome-page';
import {updateUserProfile} from '../../api';
import Nav from "../../components/Nav";
import ReadFile from "../../components/ReadFile";
import { theme, SecButton } from "../../components/theme.js";
import axios from 'axios';




const styles = theme => ({
    root: {
        color: theme.palette.common.white,
        position: "relative",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            height: "80vh",
            minHeight: 500,
            maxHeight: 1300
        }
    },
    content: {
        marginTop: "70px",
        padding: "30px 15px",
        minHeight: "calc(100vh - 123px)"
    },
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(14),
        marginLeft: theme.spacing(5),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        letterSpacing: 1,
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontSize: "16px",
        fontWeight: "300",
        letterSpacing: 1,
        marginBottom: "3px",
        textDecoration: "none"
    },
    inputLabel: {
        marginTop: theme.spacing(4),
        color: '#333',
    },
    imgPreview: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
});


class EmployerEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            contact: '',
            company_name: '',
            company_address: '',
            description: '',
            userImg: null,
            imgPreview: 'http://www.sangathipl.com/wp-content/uploads/2016/07/no-image-avaliable.jpg',
            // redirect: null,
        };
        this.renderProfile = this.renderProfile.bind(this); 
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    renderProfile() {
        const BASEURL = "https://shelteroinf.herokuapp.com/user";
        // + '/' + this.props.searchname;
        axios
            .get(BASEURL, {withCredentials: true})
            .then(response => {
                let res=response.data;
                console.log(res);
                if(res) {
                    this.setState({
                        first_name: res.first_name,
                        last_name: res.last_name,
                        email: res.email,
                        contact: res.contact,
                        company_name: res.company_name,
                        description: res.description,
                        userImg: res.userImg,
                    });
                }
                else{
                    alert("beep beep boop something went really wrong");
                }
            }).catch(error => {
                console.log("check fetch data error", error);
            });
    }

    componentDidMount() {
        this.renderProfile();
    }

    handleChange (e) {
        this.setState({
          [e.target.name] : e.target.value
        });
    }
    handleSubmit(event) {
        axios
            .post('https://shelteroinf.herokuapp.com/user/updateUser', this.state, {withCredentials:true, crossdomain:true})
            .then(response => {
                //handle success
                console.log(response.data);
                // this.setState({redirect:"/employer"});
            })
            .catch(error => {
                console.log(error);
            });
            event.preventDefault();
      }


      fileSelectedHandler = event => {
        this.setState({
            userImg: event.target.files[0]
        })
        console.log(event.target.files[0]); //log the file information (e.g., name, size...) in the console

        //to set up a image preview before uploading
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){ //readyState provides the current state of the reading operation, if file upload is complete
                this.setState({imgPreview: reader.result}) 
            }
        }
        reader.readAsDataURL(event.target.files[0]);
    }
    
    fileUploadHandler = () =>{
        //construct form data
        const formData = new FormData();
        formData.append('image', this.state.userImg.name);
        axios.post('https://shelteroinf.herokuapp.com/user/updateUser', formData)
            .then(res => {
                console.log(res);
            })
    }

    fileRemoveHandler = (event) =>{
        //set handler to remove selected file 
        this.setState({
            userImg: event.target.value=null,
            imgPreview: 'http://www.sangathipl.com/wp-content/uploads/2016/07/no-image-avaliable.jpg',
        })
    }

    render(){
        const {imgPreview} = this.state;
        const { classes } = this.props;
        // if (this.state.redirect) {
        //     console.log("user profile updated");
        //     return <Redirect to={this.state.redirect} />
        // } else {
        return (
            <section className={classes.container}>
                <div id='container'>
                    <Nav />
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
                    />
                </div>

                <br />
                <br />
                
                <form className={classes.container} onSubmit={this.handleSubmit} onChange={this.handleChange}>
                    <GridContainer className={classes.container} >
                        <GridItem xs={12} sm={12} md={8}>
                            <Card>
                                <CardHeader color="primary" >
                                    <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                                    <p className={classes.cardCategoryWhite}>Complete your profile</p>
                                </CardHeader>
                                <CardBody>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <h4 className={classes.inputLabel}>First Name</h4>
                                            <TextField
                                                onChange={this.handleChange}
                                                className={classes.textField}
                                                name="first_name"
                                                id="first_name"
                                                label="First Name"
                                                value={this.state.first_name}
                                                autoComplete="first_name"
                                                fullWidth
                                                />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={3}>
                                            <h4 className={classes.inputLabel}>Last Name</h4>
                                            <TextField
                                                onChange={this.handleChange}
                                                className={classes.textField}
                                                name="last_name"
                                                id="last_name"
                                                label="Last Name"
                                                value={this.state.last_name}
                                                autoComplete="last_name"
                                                fullWidth
                                                />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer className={classes.inputField}>
                                        <GridItem xs={12} sm={12} md={4}>
                                            <h4 className={classes.inputLabel}>Contact Number</h4>
                                            <TextField
                                                onChange={this.handleChange}
                                                className={classes.textField}
                                                name="contact"
                                                id="contact"
                                                label="Contact Number"
                                                value={this.state.contact}
                                                fullWidth
                                                />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={4}>
                                            <h4 className={classes.inputLabel}>Email</h4>
                                            <TextField
                                                onChange={this.handleChange}
                                                className={classes.textField}
                                                id="email"
                                                label="Email Address"
                                                value={this.state.email}
                                                type="email"
                                                disabled
                                                fullWidth
                                                name="email"
                                                autoComplete="email"
                                                helperText="You cannot change your email address by yourself. Please contact us via Sheltero@gmail.com."
                                                />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer className={classes.inputField}>
                                        <GridItem xs={12} sm={12} md={4}>
                                            <h4 className={classes.inputLabel}>Company Name</h4>
                                            <TextField
                                                onChange={this.handleChange}
                                                className={classes.textField}
                                                name="company_name"
                                                id="company_name"
                                                label="Company Name"
                                                value={this.state.company_name}
                                                fullWidth
                                                />
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer className={classes.inputField}>
                                        
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <br />
                                            <h4 className={classes.inputLabel}>About me</h4>
                                            <TextField
                                                onChange={this.handleChange}
                                                className={classes.textField}
                                                id="about"
                                                label="Add self description here"
                                                value={this.state.description}
                                                type="about"
                                                fullWidth
                                                name="description"
                                                multiline
                                                rows={10}
                                                variant="outlined"
                                                />
                                        </GridItem>
                                    </GridContainer>


                                </CardBody>
                                <Button type="submit" color="primary" style={{alignSelf:"center", marginBottom:theme.spacing(3)}}>Update My Profile</Button>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={8}>
                            {/* <ReadFile /> */}
                            <Card>
                                <CardHeader color="primary" >
                                    <h4 className={classes.cardTitleWhite}>Edit Profile Image</h4>
                                    <p className={classes.cardCategoryWhite}>upload new profile image</p>
                                </CardHeader>
                                <CardBody className={classes.paper}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12} className={classes.paper}>
                                        <img src={imgPreview} alt="image preview" className={classes.imgPreview}/>
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}>
                                        <input type="file" name="file"
                                                style={{display: 'none'}}
                                                onChange={this.fileSelectedHandler}
                                                accept="image/png, image/jpeg"
                                                ref={fileInput => this.fileInput = fileInput} /> 
                                                {/* 'ref' provide way to get access to this input button in JSX code, 
                                                    use function to bind some property of our class to a reference of this input */}
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <SecButton onClick={()=>this.fileInput.click()} round>Choose File</SecButton>
                                            <SecButton onClick={this.fileUploadHandler}>Upload</SecButton>
                                            <SecButton onClick={this.fileRemoveHandler} round>Remove</SecButton>
                                        </GridItem>
                                    </GridContainer>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </form>
            </section>
        )
    }
}

export default withStyles(styles) (EmployerEdit)
