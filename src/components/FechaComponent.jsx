import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DatePicker } from './DatePicker';
import { addDays } from 'date-fns';



export const FechaComponent = () => {
    const [open, setOpen] = React.useState(false);
    const [fecha, setFecha] = React.useState([
      {
        startDate: addDays(new Date(),2),
        endDate: addDays(new Date(), 2),
        key: 'selection'
      }
    ]);
    

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleConfirm = () =>{
      console.log(fecha);
      setOpen(false);
    }
    return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      Elegir fecha especifíca de servicio
      </Button>
      <Dialog  maxWidth={'xl'} open={open} onClose={handleClose}>
        <DialogTitle>Elegir fechas</DialogTitle>
        <DialogContent sx={{p:0}}>
          <DatePicker setFecha={setFecha} fecha={fecha} ></DatePicker>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  
}
