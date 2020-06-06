import React, {Component} from 'react';
import { SecButton } from './theme';
import axios from 'axios';
import { withStyles, Button } from '@material-ui/core'; 
// @material-ui/core components
import TextField from '@material-ui/core/TextField';
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Card from "../components/Card/Card";
import CardHeader from "../components/Card/CardHeader.js";
import CardBody from "../components/Card/CardBody.js";
import Welcome from 'react-welcome-page';
import Container from "@material-ui/core/Container";

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    imgPreview: {
        width: '80%',
        height: '100%',
        alignSelf: 'center',
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
})


export default withStyles(styles) (class ReadFile extends Component {
    state = {
        selectedFile: null,
        imgPreview: 'http://www.sangathipl.com/wp-content/uploads/2016/07/no-image-avaliable.jpg',
    }
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
        console.log(event.target.files[0]); //log the file information (e.g., name, size...) in the console

        //to set up a image preview before uploading
        const reader = new FileReader();
        reader.onload = () => {
            if(reader.readyState === 2){ //readyState provides the current state of the reading operation, if file upload is complete
                this.setState({imgPreview: reader.result}) 
            }
        }
        reader.readAsDataURL(event.target.files[0]);
    }
    
    fileUploadHandler = () =>{
        //construct form data
        const formData = new FormData();
        formData.append('image', this.state.selectedFile.name);
        axios.post('https://shelteroinf.herokuapp.com', formData)
            .then(res => {
                console.log(res);
            })
    }

    fileRemoveHandler = (event) =>{
        //set handler to remove selected file 
        this.setState({
            selectedFile: event.target.value=null,
            imgPreview: 'http://www.sangathipl.com/wp-content/uploads/2016/07/no-image-avaliable.jpg',
        })
    }

    render() {
        const { classes } = this.props;
        const {imgPreview} = this.state;
        return(
            <div>
                <Container className={classes.paper}>
                    <GridContainer className={classes.paper} >
                        <GridItem xs={12} sm={12} md={12}>
                            <Card>
                                <CardHeader color="primary" >
                                    <h4 className={classes.cardTitleWhite}>Edit Profile Image</h4>
                                    <p className={classes.cardCategoryWhite}>upload new profile image</p>
                                </CardHeader>
                                <CardBody className={classes.paper}>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12} className={classes.paper}>
                                        <img src={imgPreview} alt="image preview" className={classes.imgPreview}/>
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem xs={12} sm={12} md={12}>
                                        <input type="file" name="file"
                                                style={{display: 'none'}}
                                                onChange={this.fileSelectedHandler}
                                                accept="image/png, image/jpeg"
                                                ref={fileInput => this.fileInput = fileInput} /> 
                                                {/* 'ref' provide way to get access to this input button in JSX code, 
                                                    use function to bind some property of our class to a reference of this input */}
                                        </GridItem>
                                        <GridItem xs={12} sm={12} md={12}>
                                            <SecButton onClick={()=>this.fileInput.click()} round>Choose File</SecButton>
                                            {/* <SecButton onClick={this.fileUploadHandler}>Upload</SecButton> */}
                                            <SecButton onClick={this.fileRemoveHandler} round>Remove</SecButton>
                                        </GridItem>
                                    </GridContainer>
                                </CardBody>
                            </Card>
                        </GridItem>
                    </GridContainer>
                </Container>
            
            </div>
        )
    }
})