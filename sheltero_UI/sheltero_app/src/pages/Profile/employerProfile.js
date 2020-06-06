import React from "react";
// @material-ui/core components
import TextField from '@material-ui/core/TextField';
import { Link, withStyles } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import Welcome from 'react-welcome-page';
import Container from "@material-ui/core/Container";
import Nav from "../../components/Nav";
import axios from "axios";
import { theme } from "../../components/theme.js";
import ViewPostedJob from "./ViewPostedJobs";


const avatar= "https://picsum.photos/id/237/400/400";
const styles = theme => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80vw',
    },
    containerColumn: {
        width: "100%",
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(14),
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    containerRow: {
        // width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
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
    button: {
        color: "primary",
        marginTop: theme.spacing(3),
        alignSelf: "center",
    },
    
    label: {
        textTransform: "capitalize",
        marginBottom: "0px",
    },
    description: {
        width: "100%",
        fontFamily: [
            'avenir',
            'roboto',
        ].join(','),
        fontSize: 16,
        letterSpacing: 0,
        marginBottom: "3px",
        textTransform: "capitalize",
    }
});


class Employer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            contact: '',
            company_name: '',
            company_address: '',
            about: '',
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
    

    render() {
        
        const { classes } = this.props;
        return (
            <section className={classes.paper}>
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
                
                <Container className={classes.paper}>
                    <GridContainer className={classes.containerColumn} >
                        {/* Personal Profile Card */}
                        <GridItem xs={12} sm={12} md={8} style={{alignSelf:'center'}}>
                            <Card>
                                <CardHeader color="primary" className={classes.containerRow} >
                                    <h4 className={classes.cardTitleWhite}>Employer Name</h4>
                                    <p className={classes.cardCategoryWhite}>Rating: 4.5/5</p>
                                </CardHeader>
                                <CardBody profile className={classes.containerColumn}>
                                    <GridContainer style={{padding: "0 0 0 10pt"}}>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <CardAvatar profile style={{marginTop: theme.spacing(2)}}>
                                                <a href="#pablo" onClick={e => e.preventDefault()}>
                                                    <img src={avatar} alt="..." />
                                                </a>
                                            </CardAvatar>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <h4 className={classes.label}>Name</h4>
                                            <p className={classes.description}>{this.state.first_name} {this.state.last_name}</p>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <h4 className={classes.label}>Email</h4>
                                            <p className={classes.description}>{this.state.email}</p>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <h4 className={classes.label}>Contact</h4>
                                            <p className={classes.description}>{this.state.contact}</p>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <h4 className={classes.label}>Company Name</h4>
                                            <p className={classes.description}>{this.state.company_name}</p>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <h4 className={classes.label}>Company Address</h4>
                                            <p className={classes.description}>{this.state.company_address}</p>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <h4 className={classes.label}>About Me</h4>
                                            <p className={classes.description}>
                                                {this.state.description}
                                            </p>
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <Button color="primary" round className={classes.button} href="/employeredit">
                                                edit my profile
                                            </Button>
                                        </GridItem>
                                        </GridContainer>
                                </CardBody>
                            </Card>
                        </GridItem>
                        
                        {/* Posted Job Card */}
                        <GridItem xs={12} sm={12} md={4} style={{alignSelf:'center'}}>
                            <ViewPostedJob />
                        </GridItem>
                    </GridContainer>
                </Container>
            </section>
        );
    }
}

export default withStyles(styles) (Employer);
