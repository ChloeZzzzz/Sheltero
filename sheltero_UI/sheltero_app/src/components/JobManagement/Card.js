import React from 'react';

import { makeStyles } from "@material-ui/core/styles";

import {
    CardBody,
    CardFooter,
    CardImageHeader,
    CardText,
    CardTitle
  } from "styled-card-component";
import Card from "../Card/Card";
import Button from "../CustomButtons/Button.js";
import buttonStyle from '../CustomButtons/buttonStyle';

export default class CardSaint extends React.Component{
    constructor(props){
        super(props);
        this.updateInfo = this.updateInfo.bind(this);
    }

    updateInfo(){
        let values = {
            jobTitle:this.props.value.jobTitle,
            salary:this.props.value.salary,
            creditLevel:this.props.value.creditLevel,
            jobTag:this.props.value.jobTag,
            jobDetail:this.props.value.jobDetail,
            contactEmail:this.props.value.contactEmail,
            imgUrl:this.props.value.imgUrl,//this.props.value.imageurl,
            jobArea:this.props.value.jobArea
        }
        this.props.updateInfo(values);
    }

    render(){
        return(
            <div>
                <Card active key={this.props.value._id}>
                    <CardImageHeader style={{height: "200pt"}}src={this.props.value.imgUrl} key={this.props._id}/>
                    <CardBody>
                        <CardTitle>{this.props.value.jobTitle}</CardTitle>
                        <CardText>{this.props.value.jobDetail}</CardText>
                        <CardFooter>
                        Credit_level:{this.props.value.creditLevel}
                        </CardFooter >
                    </CardBody>
                    <Button onClick={this.updateInfo} style={buttonStyle.primary}>
                        More info:
                    </Button>
                </Card>
            </div>
        );  
    }
}