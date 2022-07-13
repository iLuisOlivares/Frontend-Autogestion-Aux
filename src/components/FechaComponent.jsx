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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

const periodos = [1,2,3]

export const FechaComponent = () => {
    const [open, setOpen] = React.useState(false);
    const [periodo, setPeriodo] = React.useState(1);
    var ranges ={
      selection0: {
        startDate: addDays(new Date(), 2),
        endDate: addDays(new Date(), 2),
        key: 'selection0',
      }
    };

    const [fecha, setFecha] = React.useState(ranges);

    const handleChange = (e)=>{
      setPeriodo(e.target.value);
      for (var i = 0; i < e.target.value; i++) {
        
          ranges['selection'+i]={
            startDate: addDays(new Date(), 2+i),
            endDate: addDays(new Date(), 2+i),
            key: 'selection'+i,
            autoFocus: (i === 0 ) ? true : false,
         
        }
        
     }
     setFecha(ranges);

    }
    

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
        <Stack spacing={2}>
         
            <Select
              value={periodo}
              label="Numero de periodos"
              sx={{m:2, width:300}}
              onChange={handleChange}
            >
              {
                periodos.map((periodo)=>
                  <MenuItem value={periodo}>{periodo} </MenuItem>
                )
              }
              
           
            </Select>
      

    
            <DatePicker ranges={ranges} setFecha={setFecha} fecha={fecha} ></DatePicker>
       

        </Stack>
   
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleConfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  
}
