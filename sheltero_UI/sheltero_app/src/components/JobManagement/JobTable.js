import React from "react";

import { getJobs } from "../../api";
import {
  Card,
  CardBody,
  CardFooter,
  CardImageHeader,
  CardText,
  CardTitle
} from "styled-card-component";
import { Button } from 'styled-button-component';
import { Column, Row } from 'styled-grid-system-component';



export class JobTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      jobs: []
    };
  }

  async fetchJobs() {
    const data = await getJobs();
    this.setState({ jobs: data, isLoaded: true });
  }

  componentDidMount() {
    this.fetchJobs();
  }

  render() {
    const { error, isLoaded, jobs } = this.state;
    if (error) {
      return <div> ERROR:{error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading..</div>;
    } else {
      return (
        <div>
          <Row >
          
          {jobs.map((value, index) => {
            return (<Column xl={6} >
            
              <Card active key={value._id}  style={{witdth:" 2.5vw"}}>
                <CardImageHeader style={{Width: "2vw",
                      Height: "1vw"}} src={"https://picsum.photos/350/150"} key={value._id}/>
                <CardBody >
                  <CardTitle >{value.jobTitle}</CardTitle>
                  <CardText >{value.jobDetail}</CardText>
                  <CardFooter >
                    Credit_level:{value.creditLevel}
                  </CardFooter >
                  <Button primary style={{
                    backgroundColor:"#99C015", 
                    borderColor:"#99C015",
                    fontSize: "14px"}}>
                      More Info
                      </Button>
                </CardBody>
              </Card></Column>

            );
          })}
          
        </Row>
        </div>
      );
    }
  }
}
