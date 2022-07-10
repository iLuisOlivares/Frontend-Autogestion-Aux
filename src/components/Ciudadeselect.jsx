import React from 'react'
import "../App.css";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';


const ciudades = [
  "Tolima",
  "Cartagena"
]
  

export const Ciudadeselect = ({ciudad,setCiudad}) => {
  
  return (
    <Grid item xs={12} >
      <Typography variant="body1" gutterBottom>
        Ciudad donde se realizará el servicio:
      </Typography>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
        <FormControl sx={{ m: 1, width:{xs:'320px', sm:'600px'} }}>
        <InputLabel id="ciudadLabel">Ciudad</InputLabel>
        <Select
        labelId="ciudadSelectId"
        id="ciudadSelect"
        value={ciudad}
        label="ciudad"
        onChange={(e)=>{setCiudad(e.target.value)}}
        >
        {
          ciudades.map((ciudad)=>(
            <MenuItem value={ciudad}>{ciudad}</MenuItem>
          ))
        }
     
  
        </Select>
      </FormControl>
         
        </Box>
        
     
        </Grid>
  )
}
