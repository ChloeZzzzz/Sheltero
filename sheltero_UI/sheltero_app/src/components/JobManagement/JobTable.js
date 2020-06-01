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
import Button from "../../components/CustomButtons/Button.js";
import { Column, Row } from 'styled-grid-system-component';
import Popup from '../Popup/Popup';


export class JobTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      jobs: [],
      showPopup:false
    };
  }

  togglePopup(){
    this.setState({showPopup:!this.state.showPopup});
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
            return (<Column xl={4} style={{paddingTop: "10pt",
                  paddingBottom: "10pt"}}>

              <Card active key={value._id} style={{height: "100%",
                 flexDirection: "column"}} >
                <CardImageHeader style={{height: "200pt"}}src={"https://picsum.photos/350/200"} key={value._id}/>
                <CardBody>
                  <CardTitle >{value.jobTitle}</CardTitle>
                  <CardText >{value.jobDetail}</CardText>
                  <CardFooter >
                    Credit_level:{value.creditLevel}
                  </CardFooter >
                  <Button color={"primary"} onClick={this.togglePopup.bind(this)}>
                      More Info
                      </Button>
                  {this.state.showPopup ?
                      <Popup
                          Title={value.jobTitle}
                          salary={"salary:"+value.salary}
                          credit_level={"credit_level:"+value.creditLevel}
                          jobTag={"Tag:"+value.jobTag}
                          jobDetails={"Details:"+value.jobDetail}
                          contact={"company contact:"+value.contactEmail}
                          img={"https://picsum.photos/350/200"}
                          jobArea={"Area:"+value.jobArea}
                          closePopup={this.togglePopup.bind(this)}
                      />
                      : null
                  }
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
