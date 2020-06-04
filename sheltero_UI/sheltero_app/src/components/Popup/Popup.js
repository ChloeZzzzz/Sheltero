import React from 'react';
import {withStyles} from '@material-ui/core';
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Card from "../Card/Card";
import Button from "../CustomButtons/Button.js";
import CardBody from "../Card/CardBody";
const styles = theme => ({
    root:{
        // marginTop: theme.spacing(8) ,
        // marginBottom: theme.spacing(4),
        position: "fixed",
        top: "40pt",
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
        backgroundColor: "white",
        marginTop: theme.spacing(8) ,
        marginBottom: theme.spacing(4),
        marginLeft:theme.spacing(2),

    },
    container:{
        display: "flex",
        direction:"row",
        alignItems:"center",
    },

    imgRaised: {
        boxShadow:
            "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
})
export default withStyles(styles)(class Popup extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <GridContainer className={classes.container}spacing={2} xl={12} >
                    <GridItem xl={3} >
                        <img style={{height: "300px", width: "100%", display: "block"}} className={classes.imgRaised} className={classes.imgRaised} src={this.props.img}/>
                        <h1>{this.props.Title}</h1>
                    </GridItem>
                    <GridItem xl={3}>
                    <Card >
                        <CardBody>
                            <h3>{this.props.salary}</h3>
                            <h3>{this.props.credit_level}</h3>
                            <h3>{this.props.jobTag}</h3>
                            <h3>{this.props.contact}</h3>
                            <h3>{this.props.jobArea}</h3>
                            <p>{this.props.jobDetails}</p>
                        </CardBody>
                    </Card>
                        <GridItem xl={2}>
                            <Button color="primary" onClick={this.props.closePopup}>close</Button>
                            <Button color="rose" >apply</Button>
                        </GridItem>
                    </GridItem>

                </GridContainer>

            </div>
        );
    }
})

