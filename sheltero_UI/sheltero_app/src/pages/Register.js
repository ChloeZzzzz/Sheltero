import React from 'react';
import EmployeeSignup from '../components/EmployeeSignup';
import EmployerSignup from '../components/EmployerSignup';
import { makeStyles, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  formLabel: {
    marginBottom: theme.spacing(1),
    fontWeight:'bold',
  }
}))

export default function Register () {
  const classes = useStyles(); /* to implement styles */
  const [value, setValue] = React.useState('');

  const handleRadioChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
        return (
          <div>
          <form onSubmit={handleSubmit} className={classes.form}>
            <FormControl component="fieldset">
              <FormLabel component="legend" className={classes.formLabel} >Select Your User Type</FormLabel>
              <RadioGroup row name="userType" onChange={handleRadioChange}>
                <FormControlLabel
                  className={classes.formControl}
                  value="employee"
                  control={<Radio color="primary" />}
                  label="Employee"
                  labelPlacement="end"
                />
                <FormControlLabel
                  className={classes.formControl}
                  value="employer"
                  control={<Radio color="primary" />}
                  label="Employer"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>
          </form>
          <div>
            {(() => {
            if (value === 'employer') {
              return(<EmployerSignup workType="Employer"/>)
            } else if (value === 'employee') {
              return(<EmployeeSignup workType="Employee"/>)
            } 
          })()}
          </div>
          </div>
        );

  }


  

