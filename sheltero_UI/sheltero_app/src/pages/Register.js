import React from 'react';
import EmployeeSignup from '../components/EmployeeSignup';
import EmployerSignup from '../components/EmployerSignup';
import { makeStyles, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  formControl: {
    minWidth: 200,
    display: 'flex',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  formLabel: {
    marginBottom: theme.spacing(1),
    fontWeight:'bold',
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '1vw',
  }
}))


export default function Register () {
  const classes = useStyles(); /* to implement styles */
  const [value, setValue] = React.useState('');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <br/>
    <form className={classes.form}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" className={classes.formLabel} >Select Your User Type</FormLabel>
        <RadioGroup row name="userType" onChange={handleRadioChange} className={classes.container}>
          <FormControlLabel
            className={classes.formControl}
            // onChange={this.handleChange}
            name="type"
            value="Employee"
            control={<Radio color="primary" />}
            label="Employee"
            labelPlacement="end"
          />
          <FormControlLabel
            className={classes.formControl}
            // onChange={this.handleChange}
            name="type"
            value="Employer"
            control={<Radio color="primary" />}
            label="Employer"
            labelPlacement="end"
          />
        </RadioGroup>
      </FormControl>
    </form>
    <div>
      {(() => {
      if (value === 'Employer') {
        return(<EmployerSignup workType="Employer"/>)
      } else if (value === 'Employee') {
        return(<EmployeeSignup workType="Employee"/>)
      } 
    })()}
    </div>
    </div>
  );

  }


  

