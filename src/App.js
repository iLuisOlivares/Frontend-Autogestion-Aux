import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Estado from './pages/Estado';
import IdentificacionForm from './pages/IdentificacionForm';
import Solicitar from './pages/Solicitar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Header } from './components/Header';
import { Copyright } from './components/Copyright';


const steps = ['Solicitar', 'Informacion', 'Estado'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Solicitar />;
    case 1:
      return <IdentificacionForm />;
    case 2:
<<<<<<< HEAD
      return <Estado step={2} />;
=======
      return <Estado />;
>>>>>>> main
    default:
      throw new Error('Unknown step');
  }
}
const theme = createTheme();

export default function App() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header></Header>
      <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Reserva
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
<<<<<<< HEAD
                  Parte final
                </Typography>
                <Typography variant="subtitle1">
                  descripcion
=======
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
>>>>>>> main
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      startIcon={<ArrowBackIcon />}
                      sx={{ mt: 3, ml: 1 }}>
                      Regresar
                    </Button>
                  )}
                  {
                    activeStep === steps.length - 3 ?
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        endIcon={<ArrowForwardIcon />}
                        sx={{ mt: 3, ml: 1 }}
                      >Continuar</Button> :
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                      > Pagar</Button>
                  }

                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
        <Copyright link={"google.com"} />
      </Container>
    </ThemeProvider>
  );
}