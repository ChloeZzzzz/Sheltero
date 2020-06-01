import React from 'react';
import './style.css';
import Button from "../../components/CustomButtons/Button.js";

class Popup extends React.Component {
    render() {
        return (
            <div className='popup'>
                <div className='popup\_inner'>
                    <h1>{this.props.Title}</h1>
                    <h3>{this.props.salary}</h3>
                    <h3>{this.props.credit_level}</h3>
                    <h3>{this.props.jobTag}</h3>
                    <h3>{this.props.contact}</h3>
                    <h3>{this.props.jobArea}</h3>
                    <img src={this.props.img}/>
                    <p>{this.props.jobDetails}</p>
                    <Button color="primary" onClick={this.props.closePopup}>close</Button>
                    <Button color="rose"className='closeButton'>apply</Button>
                    <Button color="info">save</Button>
                </div>
            </div>
        );
    }
}

export default Popup;