import React from 'react';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';

import { createMuiTheme } from '@material-ui/core/styles';


// export const theme = {
//     primaryDark: '#002E18',
//     primaryLight: '#E8F2D8',
//     primaryButton:'#C9DC86',
//     primaryColor: '#99C015',
//     primaryHighlight: '#638709',
//     specialHighlight: '#FBDF3D',
//     mobile: '576px',
//   }

export const PrimButton = styled(Button)({
    background: '#99C015',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    '&:hover': {
        background: "#638709",
    },
    fontFamily: [
        'futura',
        'serif',
    ].join(','),
});

export const H2 = styled(Typography)({
    color: "#002E18",
    fontFamily: [
        'futura',
        'serif',
    ].join(','),
    fontSize: 28,
    letterSpacing: 3,
})

export const FormLabel = styled(Typography)({
    color: "#002E18",
    fontFamily: [
        'futura',
        'serif',
    ].join(','),
    fontSize: 14,
})

export const TextLink = styled(Link)({
    color: "#638709",
    fontFamily: [
        'roboto',
        'futura',
    ].join(','),
    fontSize: 14,
    letterSpacing: 0,
})
