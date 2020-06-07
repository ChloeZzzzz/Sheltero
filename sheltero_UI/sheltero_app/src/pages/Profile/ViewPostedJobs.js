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


class ViewPostedJob extends React.Component {
    constructor(props) {
        super  (props);
        this.state = {
            posted_job: [],
        };
        this.getPostedJob = this.getPostedJob.bind(this);
        this.deleteJob = this.deleteJob.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    getPostedJob() {
        axios
            .get("https://shelteroinf.herokuapp.com/user/postedJob", {withCredentials: true})
            .then(response => {
                let res=response.data;
                console.log(res);
                if(res) {
                    console.log(res);
                    console.log("successfully get posted job");
                    this.setState({
                        posted_job: res.postedJob,
                    });
                } else {
                    console.log("no job posted");
                }
            }).catch(error => {
                console.log("check fetch data error", error);
            });
    }

    componentDidMount() {
        this.getPostedJob();
    }

    deleteJob() {
        axios
            .delete("https://shelteroinf.herokuapp.com/user/postedJob")
            .then(res => {
                if(res) {
                    console.log(res);
                    console.log("job deleted successfully");
                    this.setState({
                        posted_job:res.ostedJob,
                    });
                } else {
                    console.log(res);
                }
            }).catch(error => {
                console.log("something went wrong", error);
        });
    }
    handleDeleteClick() {
        this.deleteJob();
    }

    render() {
        const { classes } = this.props;
        const { posted_job } = this.state;
        if(!posted_job) {
            return (
                <Card>
                <CardHeader color="primary" className={classes.containerRow} >
                    <h4 className={classes.cardTitleWhite}>Posted Job</h4>
                </CardHeader>
                <CardBody profile className={classes.containerColumn}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <h4> No Job Posted Yet</h4>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <Button color="primary" round className={classes.button} href="/jobpost">
                                Post New Job
                            </Button>
                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
            )
        } else {
            return (
            <Card>
                <CardHeader color="primary" className={classes.containerRow} >
                    <h4 className={classes.cardTitleWhite}>Posted Job</h4>
                </CardHeader>
                <CardBody profile className={classes.containerColumn}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            {posted_job.map((value, index) => (
                                <h4 key={value.jobTitle}></h4>,
                                <Button onClick={this.handleDeleteClick()}>Delete Job</Button>

                            ))}
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                            <Button color="primary" round className={classes.button} href="/jobpost">
                                Post New Job
                            </Button>
                        </GridItem>
                    </GridContainer>
                </CardBody>
            </Card>
        )
    }
}
}
export default withStyles(styles)(ViewPostedJob);

            