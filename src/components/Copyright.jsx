import React from 'react'
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export const Copyright = ({link}) => {
  return (
        <Typography variant="body2" color="text.secondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href={link}>
            Auxlimpieza.com
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
    
  )
}
