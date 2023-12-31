'use client'
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

 export const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "& .MuiInputLabel-root": {
        right: 0,
        textAlign: "center",
      },
    'label + &': {
      marginTop: theme.spacing(0),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      fontSize: 12,
      width: '25vw',
      height:'2rem',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));

  