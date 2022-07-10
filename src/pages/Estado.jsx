import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = [
  {
    info: 'Lunes, 16 de mayo',
    estado: `Servicio solicitado`,
  },
  {
    info: 'Lunes, 16. de mayo',
    estado: 'Pago realizado',
  },
  {
    info: 'Pendiente por ejecutar',
    estado: `Empleada asignada`,
  },
  {
    info: '',
    estado: `Servicio completado`,
  },
];

export default function Estado({step}) {
    const [activeStep, setActiveStep] = React.useState(step || 2);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
  
  return (
    <>
    <Box m={1}>
    <Typography p>Estado del servicio:</Typography>
    </Box>
    <Grid container  justifyContent="center" alignItems="center"  spacing={0}>
      
      <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.estado}>
            <StepLabel
              optional={
                (
                  <Typography variant="caption">{step.info}</Typography>
                ) 
              }
            >
              {step.estado}
            </StepLabel>
           
          </Step>
        ))}
      </Stepper>
    
    </Box>
    

    
    </Grid>
    </>
  
  );
}