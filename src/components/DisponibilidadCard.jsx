import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const DisponibilidadCard = ({dia,inicio,fin,precio}) => {
  return (
    <Grid   item xs={6} sm={4}>
      <Paper elevation={3}>
        <Box alignItems="center"
        justifyContent="center"  padding={2}>
        <Typography align="center" variant="subtitle2" gutterBottom>
        Dia: {dia}
        </Typography>
        <Typography align="center" variant="body2" gutterBottom>
        Hora inicio: {inicio}
        </Typography>
        <Typography align="center" variant="body2" gutterBottom>
        Hora fin: {fin}
        </Typography>
        <Typography  align="center" variant="subtitle2" gutterBottom>
        Precio: {precio}
        </Typography>

        <Grid container justifyContent="center">
        <Button  size="small" variant="outlined" >seleccionar</Button>
        </Grid>

        
        </Box>

        </Paper> 
    </Grid>
  )
}
