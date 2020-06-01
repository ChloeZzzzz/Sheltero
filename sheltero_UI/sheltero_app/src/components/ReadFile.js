import React, {Component} from 'react';
import { SecButton } from './theme';
import axios from 'axios';
import { withStyles } from '@material-ui/core'; 


const styles = theme => ({
    paper: {
        marginTop: theme.spacing(4),
        // display: 'flex',
        // flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    imgPreview: {
        width: '80%',
    }
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
            <fieldset className={classes.paper}>
                <legend>Upload Job Image</legend>
                <div>
                    <img src={imgPreview} alt="image preview" 
                            className={classes.imgPreview}/>
                </div>
                <input type="file" name="file"
                        style={{display: 'none'}}
                        onChange={this.fileSelectedHandler}
                        accept="image/png, image/jpeg"
                        ref={fileInput => this.fileInput = fileInput} /> 
                        {/* 'ref' provide way to get access to this input button in JSX code, 
                            use function to bind some property of our class to a reference of this input */}
                <div>
                    <SecButton onClick={()=>this.fileInput.click()}>Choose File</SecButton>
                    {/* <SecButton onClick={this.fileUploadHandler}>Upload</SecButton> */}
                    <SecButton onClick={this.fileRemoveHandler}>Remove</SecButton>

                </div>
            </fieldset>
            </div>
        )
    }
})