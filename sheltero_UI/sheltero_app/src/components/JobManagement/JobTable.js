import React from "react";

import { getJobsByTag , getJobsByArea, getAllJobs} from "../../api";
import { Column, Row } from 'styled-grid-system-component';
import Popup from '../Popup/Popup';

import Card from "./Card";


export class JobTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      jobs: [],
      showPopup:false,
      values: {
        _id:"",
        jobTitle:"",
        salary:"",
        creditLevel:"",
        jobTag:"",
        jobDetail:"",
        contactEmail:"",
        imgUrl:"",
        jobArea:""
      },
      area_tags:[],
      cat_tags:[],
    };
    this.togglePopup=this.togglePopup.bind(this);
    this.updateInfo= this.updateInfo.bind(this);
  }

  togglePopup(){
    this.setState({showPopup:!this.state.showPopup});
  }

  async fetchJobsByTag(tag) {
    const data = await getJobsByTag(tag);
    return data;
  }

  async fetchJobsByArea(area){
    let job = await getJobsByArea(area);
    this.setState({jobs:job});
    this.setState({isLoaded:true});
  }

  async fetchJobs(){
    console.log("+==jobs)");
    let job = await getAllJobs();
    console.log(job);
    console.log("==== job _id ===");
    console.log(this.state.values._id);
    this.setState({jobs:job});
    this.setState({isLoaded:true});
  }

  componentDidMount(){
    if (window.sessionStorage.getItem("searchingArea") == "false") {
      this.fetchJobs();
    } else {
      this.fetchJobsByArea(window.sessionStorage.getItem("searchingArea"));
    }

  }

  updateInfo(info){
    this.setState({
      values:{
        _id:info._id,
        jobTitle:info.jobTitle,
        salary:info.salary,
        creditLevel:info.creditLevel,
        jobTag:info.jobTag,
        jobDetail:info.jobDetail,
        contactEmail:info.contactEmail,
        imgUrl:info.imgUrl,
        jobArea:info.jobArea
      }
    });
    this.togglePopup();
  }

  render() {

    const { error, isLoaded, jobs } = this.state;
    if (error) {
      return <div> ERROR:{error.message}</div>;
    } 
    else if (!isLoaded) {
      return <div style = {{textAlign: "center"}}>Loading..</div>;
    } 
    else {
      return (
        <div>
          <Row >
          {jobs.map((value, index) => {
            value.imgUrl ="https://picsum.photos/1080/400";
            return (
              <Column xl={4} xs={12} sm={12} md={6} style={{paddingTop: "10pt", paddingBottom: "10pt"}}>
                <Card value={value} style = {{height: "100%", flexDirection: "column"}} updateInfo={this.updateInfo}/>
                    {this.state.showPopup ?
                        <Popup
                            Title={this.state.values.jobTitle}
                            salary={"salary:"+this.state.values.salary}
                            credit_level={"credit_level:"+this.state.values.creditLevel}
                            jobTag={"Tag:"+this.state.values.jobTag}
                            jobDetails={"Details:"+this.state.values.jobDetail}
                            contact={"company contact:"+this.state.values.contactEmail}
                            img={this.state.values.imgUrl}
                            jobArea={"Area:"+value.jobArea}
                            closePopup={this.togglePopup}
                        />
                        : null
                    }
              </Column>
            );
          })}
        </Row>
        </div>
      );
    }
  }
}
