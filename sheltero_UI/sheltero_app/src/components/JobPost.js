// this js file is the basic ui for job posting page
import React from 'react';
import { PrimButton, H2 } from './theme';
import ReadFile from './ReadFile';
import Copyright from './Copyright';
import {
    CssBaseline,
    TextField,
    FormControlLabel,
    FormGroup,
    Box,
    FormLabel,
    Radio,
    RadioGroup,
    Grid,
    withStyles,
    Container,
    FormControl,
    InputLabel,
    Select,
    MenuItem,} from '@material-ui/core';

const styles = theme => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80vw',
    },
    avatar: {
        marginBottom: theme.spacing(2),
        backgroundColor: '#99c040',
    },
    box: {
        margin: theme.spacing(8,0,2,0),
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    formItem: {
        margin: theme.spacing(3, 0, 0, 0),
    },
    positionLeft: {
        display: 'flex',
        alignItems: 'flex-start',
        
    },
    formControl: {
        minWidth: '100%',
    },
    radioGroup: {
        border: 1,
        borderRadius: 10,
    }
    }
)

export default withStyles(styles) (class JobPost extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         job_title: '',
    //         credit_level: {},
    //         salary: {},
    //         job_description: '',
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }
    
    // handleChange (e) {
    //     this.setState({
    //         [e.target.name] : e.target.value
    //     });
    // }

    // handleSubmit(event) {
    //     postNewJob((this.state))
    //         .then(res => {
    //             console.log(res);
    //             if (res === 'success') {
    //                 alert('You have successfully posted a new job: ' + this.state.job_title);
    //                 this.setState({ redirect: "/" });
    //               } else {
    //                 alert('Opps, something went wrong. Post job again.');
    //                 console.log("failed to post job")
    //               }
    //         }).catch((error) => {
    //             console.log(error)});
            
    //             event.preventDefault();
            
    // }

    render() {
        const { classes } = this.props;
        return(
        <Container component="main"  className={classes.paper}>
            <CssBaseline/>
            <div>
                <H2 className={classes.positionLeft}>Post New Job</H2>

            <form className={classes.form}>
                <Grid container sm={8} direction="column">
                    <Grid item sm={6} xs={3}>
                        <TextField
                            className={classes.formItem}
                            // value={this.state.job_title}
                            name="job_title"
                            variant="outlined" //add border to text field
                            required
                            fullWidth
                            id="job_title"
                            label="Job Title"
                        />
                    </Grid>
                    

                    <Grid item sm={6} xs={3}>
                        <TextField
                            className={classes.formItem}
                            // value={this.state.salary}
                            name="salary"
                            variant="outlined" //add border to text field
                            fullWidth
                            id="salary" //需要设置定义域
                            label="Salary"
                            type="number"
                        />
                    </Grid>

                    <Grid item sm={6} className={`${classes.positionLeft} ${classes.formItem}`}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            {/* <FormLabel component="legend">Credit Level</FormLabel> */}
                            <InputLabel>Credit Level</InputLabel>
                            <Select
                            // value={this.state.credit_level}
                            name="credit_level"
                            required
                            // fullWidth
                            id="credit_level"
                            label="Credit Level">
                            <MenuItem value="" disabled>Credit Level</MenuItem>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    
                    <Grid item xs={10} >
                        <TextField
                            className={classes.formItem}
                            // value={this.state.job_description}
                            name="job_description"
                            variant="outlined" //add border to text field
                            required
                            fullWidth
                            multiline
                            rows={10} //set long answer text field
                            id="job_description"
                            label="Job Description"
                        />
                    </Grid>

                    <Grid item sm={12} className={`${classes.positionLeft} ${classes.formItem}`}>
                        <FormControl variant="outlined" className={classes.formControl}>
                            <InputLabel>Select a Job Type</InputLabel>
                            <Select
                            name="job_type"
                            required
                            id="job_type"
                            label="Job Type">
                            <MenuItem value="" disabled>Job Type</MenuItem>
                            <MenuItem value="food">Agriculture, Food and Natural Resources</MenuItem>
                            <MenuItem value="arts">Arts, Audio/Video Technology and Communications</MenuItem>
                            <MenuItem value="education">Education and Training</MenuItem>
                            <MenuItem value="administration">Government and Public Administration</MenuItem>
                            <MenuItem value="tourism">Hospitality and Tourism</MenuItem>
                            <MenuItem value="IT">Information Technology</MenuItem>
                            <MenuItem value="manufacturing">Manufacturing</MenuItem>
                            <MenuItem value="science">Science, Technology, Engineering and Mathematics</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    {/* <Grid item xs={12} className={`${classes.positionLeft} ${classes.field}`}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Select a Job Type</FormLabel>
                                <RadioGroup name="job_type">
                                    <FormControlLabel value="food" control={<Radio />} label="Agriculture, Food and Natural Resources" />
                                    <FormControlLabel value="arts" control={<Radio />} label="Arts, Audio/Video Technology and Communications" />
                                    <FormControlLabel value="education" control={<Radio />} label="Education and Training" />
                                    <FormControlLabel value="administration" control={<Radio />} label="Government and Public Administration" />
                                    <FormControlLabel value="tourism" control={<Radio />} label="Hospitality and Tourism" />
                                    <FormControlLabel value="IT" control={<Radio />} label="Information Technology" />
                                    <FormControlLabel value="manufacturing" control={<Radio />} label="Manufacturing" />
                                    <FormControlLabel value="science" control={<Radio />} label="Science, Technology, Engineering and Mathematics" />
                                </RadioGroup>
                        </FormControl>
                    </Grid> */}

                    <Grid item xs={12}>
                        <ReadFile />
                    </Grid>
                    <br/><br/>
                    <PrimButton className={classes.formItem}>Post Job</PrimButton>
                </Grid>
            </form>

            </div>

            <Box mt={5} className={classes.box}>
                <Copyright />
            </Box>

        </Container>
        )
    }
})

