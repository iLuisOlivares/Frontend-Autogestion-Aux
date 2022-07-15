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
import { TableComponent } from './components/TableComponent';

const URL = 'https://auxlimpieza.com/payu-payment-response/?merchantId=677180&merchant_name=Soluciones+Al+Alcance+de+Tu+Mano+SAS&merchant_address=Cra+43+%2360-28+Of+2A&telephone=3024213738&merchant_url=http%3A%2F%2Fwww.aux.com.co&transactionState=7&lapTransactionState=PENDING&message=PENDING&referenceCode=WP-AUX-SERV-4503&reference_pol=2054269009&transactionId=75c69b8c-331b-4fec-a4c7-06c37fb78e0d&description=Agendamiento+de+servicio+4503+&trazabilityCode=75c69b8c-331b-4fec-a4c7-06c37fb78e0d&cus=75c69b8c-331b-4fec-a4c7-06c37fb78e0d&orderLanguage=es&extra1=&extra2=&extra3=&polTransactionState=14&signature=c26a7a58ebd3f89b3876b4277e2473b1&polResponseCode=25&lapResponseCode=PENDING_TRANSACTION_CONFIRMATION&risk=&polPaymentMethod=34&lapPaymentMethod=OTHERS_CASH&polPaymentMethodType=7&lapPaymentMethodType=CASH&installmentsNumber=1&TX_VALUE=114000.00&TX_TAX=18202.00&currency=COP&lng=es&pseCycle=&buyerEmail=correo%40electroi.com&pseBank=&pseReference1=&pseReference2=&pseReference3=&authorizationCode=&TX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE=.00&processingDate=2022-07-07'


const steps = ['Solicitar', 'Informacion', 'Estado'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Solicitar />;
    case 1:
      return <IdentificacionForm />;
    case 2:
      return <Estado step={2} />;
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
                <TableComponent URL={URL}></TableComponent>
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