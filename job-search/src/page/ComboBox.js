import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export default function ComboBox() {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={JobCategories}
            getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        />
    );

}
    const JobCategories = [
        {
            "jobID":"10001",
            "jobTitle":"delivery",
            "salary":"80",
            "credit_level":"1",
            "jobDetail":"delivery package for 4 hours",
            "companyID":"Delivero",
            "jobTag":"physical",
            "contact":"j_robbins@gmail.com",
            "jobArea":"Southbank",
        },
        {
            "jobID":"10002",
            "jobTitle":"delivery",
            "salary":"100",
            "credit_level":"1",
            "jobDetail":"delivery package for 5 hours",
            "companyID":"Delivero",
            "jobTag":"physical",
            "contact":"j_robbins@gmail.com",
            "jobArea":"Parkvile",
        }
    ]
