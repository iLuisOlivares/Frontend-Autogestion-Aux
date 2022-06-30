import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import { Button } from '@mui/material';
import { DisponibilidadCard } from '../components/DisponibilidadCard';

const marks = [
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
  {
    value: 6,
    label: '6',
  },
  {
    value: 7,
    label: '7',
  },
  {
    value: 8,
    label: '8',
  },
 
];

function valuetext(value) {
  return `${value}`;
}
export default function Solicitar() {
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Solicitar servicio
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        <Typography variant="body1" gutterBottom>
        Ciudad donde se realizará el servicio:
      </Typography>
          <TextField
            required
            id="firstName"
            name="firstName"
            variant="outlined"
            label="Ciudad donde se realizará el servicio:"
            fullWidth
            autoComplete="given-name"
            
          />
        </Grid>
        <Grid item xs={12} sm={12}>
        <Typography variant="body1" gutterBottom>
        Cantidad de horas a solicitar:
      </Typography>
        <Slider
        aria-label="Custom marks"
        defaultValue={4}
        min={2}
        getAriaValueText={valuetext}
        step={1}
        max={8}
        valueLabelDisplay="auto"
        marks={marks}
      />
        </Grid>
        <Grid item xs={12} >   
        <Typography variant="body1" gutterBottom>
        Disponibilidad sugerida:
        </Typography>
        <Grid container  justifyContent="center" alignItems="center"  spacing={3}>
       
        <DisponibilidadCard dia={'Jueves, 19 de mayo'} inicio={'7:00 am'} fin={'11:00 am'} precio={'62,700'}/>
        <DisponibilidadCard  dia={'Jueves, 19 de mayo'}  inicio={'2:00 am'} fin={'6:00 am'} precio={'62,700'}/>
        <DisponibilidadCard  dia={'Jueves, 20 de mayo'} inicio={'2:00 am'} fin={'6:00 am'} precio={'62,700'}/>  

        </Grid>
      
        </Grid>

        <Grid container justifyContent="center" item xs={12} sm={12}>
        <Button variant="contained" >Elegir fecha especifíca de servicio</Button>
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}