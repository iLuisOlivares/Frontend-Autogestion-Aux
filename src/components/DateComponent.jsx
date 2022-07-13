import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import { DatePickerComponent } from './DatePicker';


export const DateComponent = () => {
    const [open, setOpen] = React.useState(false);

    const [date, setDate] = React.useState(new Date());


    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleConfirm = () =>{
      setOpen(false);
      console.log(date);
    }
    return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
      Elegir días especifícos de servicio
      </Button> 
      <Dialog  maxWidth={'xl'} open={open} onClose={handleClose}>
        <DialogTitle>Selecciona los días</DialogTitle>
        <DialogContent sx={{p:0}}>
        <Stack spacing={2}>
     
    
           <DatePickerComponent date={date} setDate={setDate}></DatePickerComponent>
       

        </Stack>
   
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleConfirm}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  
}
