import React from "react";
// @material-ui/core components
import { withStyles, Link  } from "@material-ui/core";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardAvatar from "../../components/Card/CardAvatar.js";
import CardBody from "../../components/Card/CardBody.js";
import Welcome from 'react-welcome-page';
import Container from "@material-ui/core/Container";
import axios from 'axios';
import { theme } from "../../components/theme.js";
import ViewAppliedJob from "./ViewAppliedJob";
import ViewIncomingJobs from "./ViewIncomingJobs";
const avatar= "https://picsum.photos/id/237/400/400";



const styles = theme => ({
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    containerColumn: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(3),
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        marginBottom: "3px",
        textDecoration: "none"
    },
    button: {
        color: "primary",
        marginTop: theme.spacing(3),
        alignSelf: "center",
    },
});


class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            contact: '',
            gender: '',
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
                        gender: res.gender,
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

    render(){
        const { classes,routeChange } = this.props;
        return (

            <section className={classes.container}>
                <div id='container'>
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
                                    <h4 className={classes.cardTitleWhite}>{this.state.first_name}</h4>
                                    <p className={classes.cardCategoryWhite}>{this.state.creditLevel}</p>
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
                                            <h4 className={classes.label}>Gender</h4>
                                            <p className={classes.description}>{this.state.gender}</p>
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
                    </GridContainer>
                        <GridContainer>
                        <GridItem xs={12} sm={12} md={4} style={{alignSelf:'center'}}>
                            <ViewAppliedJob />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4} style={{alignSelf:'center'}}>
                            <ViewIncomingJobs />
                        </GridItem>
                    </GridContainer>
                </Container>
            </section>
        );}
}

export default withStyles(styles) (Employee)
