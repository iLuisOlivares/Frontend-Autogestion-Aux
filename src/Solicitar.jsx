import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Solicitar() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Solicitar servicio
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Ciudad donde se realizará el servicio:"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
}