import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


export default function RadioButton(value, label) {
  return (
        <FormControlLabel
          value={value}
          control={<Radio color="primary" />}
          label={label}
          labelPlacement="start"
        />
  );
}