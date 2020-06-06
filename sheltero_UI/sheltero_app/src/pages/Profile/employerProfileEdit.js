import React from "react";
// @material-ui/core components
import TextField from '@material-ui/core/TextField';
import { withStyles } from "@material-ui/core";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import Welcome from 'react-welcome-page';
import Container from "@material-ui/core/Container";
import Nav from "../../components/Nav";
import ReadFile from "../../components/ReadFile";
import { theme } from "../../components/theme.js";
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
        textTransform: 'capitalize',
    }
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
        };
        this.renderProfile = this.renderProfile.bind(this); 
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
                        company_address:res.company_address,
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

    render(){
        
        const { classes } = this.props;
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
                
                <Container className={classes.container}>
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
                                                // onChange={this.handleChange}
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
                                                // onChange={this.handleChange}
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
                                                // onChange={this.handleChange}
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
                                                // onChange={this.handleChange}
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
                                                // onChange={this.handleChange}
                                                className={classes.textField}
                                                name="company_name"
                                                id="company_name"
                                                label="Company Name"
                                                value={this.state.company_name}
                                                fullWidth
                                                />
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={4}>
                                            <h4 className={classes.inputLabel}>Company Address</h4>
                                            <TextField
                                                // onChange={this.handleChange}
                                                className={classes.textField}
                                                id="company_address"
                                                label="Company Address"
                                                value={this.state.company_address}
                                                fullWidth
                                                name="company_address"
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
                                                // onChange={this.handleChange}
                                                className={classes.textField}
                                                id="about"
                                                label="Add self description here"
                                                value={this.state.description}
                                                type="about"
                                                required
                                                fullWidth
                                                name="about"
                                                multiline
                                                rows={10}
                                                variant="outlined"
                                                />
                                        </GridItem>
                                    </GridContainer>








                                </CardBody>
                                <Button color="primary" style={{alignSelf:"center", marginBottom:theme.spacing(3)}}>Update My Profile</Button>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={8}>
                            {/* <Card profile>
                                <CardAvatar profile>
                                    <a href="#pablo" onClick={e => e.preventDefault()}>
                                        <img src={avatar} alt="..." />
                                    </a>
                                </CardAvatar>
                                <CardBody profile>
                                    <h6 className={classes.cardCategory}>Credit level：</h6>
                                    <h4 className={classes.cardTitle}>UserName</h4>
                                    <p className={classes.description}>
                                        Don{"'"}t be scared of the truth because we need to restart the
                                        human foundation in truth And I love you like Kanye loves Kanye
                                        I love Rick Owens’ bed design but the back is...
                                    </p>
                                    <Button color="primary" round>
                                        update Profile picture
                                    </Button>
                                </CardBody>
                            </Card> */}
                            <ReadFile />
                        </GridItem>
                    </GridContainer>
                </Container>
            </section>
        );}
}

export default withStyles(styles) (EmployerEdit);
