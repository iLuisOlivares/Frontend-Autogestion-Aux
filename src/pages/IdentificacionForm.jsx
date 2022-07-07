import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const textfields = [  "Nombre", "Telefono", "Email", "Direccion" ]

export default function IdentificacionForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Formulario de identificacion
      </Typography>
      <Grid container spacing={3}>
        {
          textfields.map((item)=>
          <Grid item xs={12} md={6}>
          <TextField
            required
            id={item}
            label={item}
            fullWidth
            variant="outlined"
          />
        </Grid> )
        }
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="He leído y Acepto los Términos y condiciones y la Política de privacidad de datos"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}