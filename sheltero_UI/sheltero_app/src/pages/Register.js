import React from 'react';
import { LockOutlined } from '@ant-design/icons';
import { PrimButton, H1, H2, TextLink } from '../components/theme';
import EmployeeSignup from '../components/EmployeeSignup';
import EmployerSignup from '../components/EmployerSignup';
import { Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';


export default function Register()
  {
        return (
          <Box>
            <EmployerSignup />
          </Box>
        );

  }


  

