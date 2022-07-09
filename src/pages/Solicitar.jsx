import * as React from 'react';
import "../App.css";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Button } from '@mui/material';
import { DisponibilidadCard } from '../components/DisponibilidadCard';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Ciudadeselect } from '../components/Ciudadeselect';

const cartas = [
  {
    dia:'Jueves, 19 de mayo' ,
    inicio:'07:00 am', 
    fin: '11:00 am',
    precio:'62,700',

  },
  {
    dia:'Jueves, 19 de mayo' ,
    inicio:'07:00 am', 
    fin: '11:00 am',
    precio:'62,700',

  },
  {
    dia:'Jueves, 19 de mayo' ,
    inicio:'07:00 am', 
    fin: '11:00 am',
    precio:'62,700',
  },
  {  
  dia:'Jueves, 19 de mayo' ,
  inicio:'07:00 am', 
  fin: '11:00 am',
  precio:'62,700',
  }
]


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
  const [ciudad, setCiudad] = React.useState('');
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Solicitar servicio
      </Typography>
      <Grid container spacing={3}>
      <Ciudadeselect
      ciudad={ciudad}
      setCiudad={setCiudad}>
      </Ciudadeselect>
        
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

        <div className="wrapper">
        {
            cartas.map(({dia,inicio,fin,precio})=>(
          <Box sx={{ m:2,  minWidth: '200' }} >
          <DisponibilidadCard  dia={dia} isnicio={inicio} fin={fin} precio={precio}/>
          </Box>

            ))
          }

        </div>
      
        </Grid>

        <Grid container justifyContent="center" item xs={12} sm={12}>
        <Button variant="contained" >Elegir fecha especifíca de servicio</Button>
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}