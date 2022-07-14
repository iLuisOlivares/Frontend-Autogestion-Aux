import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(nombre, valor) {
  const URL = 'https://auxlimpieza.com/payu-payment-response/?merchantId=677180&merchant_name=Soluciones+Al+Alcance+de+Tu+Mano+SAS&merchant_address=Cra+43+%2360-28+Of+2A&telephone=3024213738&merchant_url=http%3A%2F%2Fwww.aux.com.co&transactionState=7&lapTransactionState=PENDING&message=PENDING&referenceCode=WP-AUX-SERV-4503&reference_pol=2054269009&transactionId=75c69b8c-331b-4fec-a4c7-06c37fb78e0d&description=Agendamiento+de+servicio+4503+&trazabilityCode=75c69b8c-331b-4fec-a4c7-06c37fb78e0d&cus=75c69b8c-331b-4fec-a4c7-06c37fb78e0d&orderLanguage=es&extra1=&extra2=&extra3=&polTransactionState=14&signature=c26a7a58ebd3f89b3876b4277e2473b1&polResponseCode=25&lapResponseCode=PENDING_TRANSACTION_CONFIRMATION&risk=&polPaymentMethod=34&lapPaymentMethod=OTHERS_CASH&polPaymentMethodType=7&lapPaymentMethodType=CASH&installmentsNumber=1&TX_VALUE=114000.00&TX_TAX=18202.00&currency=COP&lng=es&pseCycle=&buyerEmail=correo%40electroi.com&pseBank=&pseReference1=&pseReference2=&pseReference3=&authorizationCode=&TX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE=.00&processingDate=2022-07-07'
  var urlParams = new URLSearchParams(URL);
  var parametro = urlParams.get(valor);
  console.log(parametro);
  return { nombre, parametro };
}

function createData2(rows2) {
  const URL = 'https://auxlimpieza.com/payu-payment-response/?merchantId=677180&merchant_name=Soluciones+Al+Alcance+de+Tu+Mano+SAS&merchant_address=Cra+43+%2360-28+Of+2A&telephone=3024213738&merchant_url=http%3A%2F%2Fwww.aux.com.co&transactionState=7&lapTransactionState=PENDING&message=PENDING&referenceCode=WP-AUX-SERV-4503&reference_pol=2054269009&transactionId=75c69b8c-331b-4fec-a4c7-06c37fb78e0d&description=Agendamiento+de+servicio+4503+&trazabilityCode=75c69b8c-331b-4fec-a4c7-06c37fb78e0d&cus=75c69b8c-331b-4fec-a4c7-06c37fb78e0d&orderLanguage=es&extra1=&extra2=&extra3=&polTransactionState=14&signature=c26a7a58ebd3f89b3876b4277e2473b1&polResponseCode=25&lapResponseCode=PENDING_TRANSACTION_CONFIRMATION&risk=&polPaymentMethod=34&lapPaymentMethod=OTHERS_CASH&polPaymentMethodType=7&lapPaymentMethodType=CASH&installmentsNumber=1&TX_VALUE=114000.00&TX_TAX=18202.00&currency=COP&lng=es&pseCycle=&buyerEmail=correo%40electroi.com&pseBank=&pseReference1=&pseReference2=&pseReference3=&authorizationCode=&TX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE=.00&TX_TAX_ADMINISTRATIVE_FEE_RETURN_BASE=.00&processingDate=2022-07-07'
  var urlParams = new URLSearchParams(URL);
  for (let row in rows2) {
    rows2[row].value=urlParams.get(rows2[row].key);
    console.log(rows2[row]);
  }
}

const rows = [
  createData('Estado de la transaccion', 'lapTransactionState'),
  createData('ID de la transaccion', 'transactionId'),
  createData('Referencia de la venta', 'reference_pol'),
  createData('Referencia de la transaccion', 'referenceCode'),
  createData('Valor total', 'TX_VALUE'),
  createData('Moneda', 'currency'),
  createData('Descripción', 'description'),
  createData('Entidad', 'lapPaymentMethod'),
];

const rows2 = {
  estado:{
    label: "Estado de la transaccion",
    key:"lapTransactionState",
    value:""
  },
  idTransaccion:{
    label: "ID de la transaccion",
    key:"transactionId",
    value:""
  },
  referenciaVenta:{
    label: "Referencia de la venta",
    key:"reference_pol",
    value:""
  },
  referenciaTransaccion:{
    label: "Referencia de la transaccion",
    key:"referenceCode",
    value:""
  },
  valorTotal:{
    label: "Valor total",
    key:"TX_VALUE",
    value:""
  },
  moneda:{
    label: "Moneda",
    key:"currency",
    value:""
  },
  descripcion:{
    label: "Descripcion",
    key:"description",
    value:""
  },
  entidad:{
    label: "Entidad",
    key:"lapPaymentMethod",
    value:""
  },
}
 

export const TableComponent = () => {

  React.useEffect(() => {
    createData2(rows2);
   
  }, [])
  
  
  
  return (
    <TableContainer component={Paper}>
    <Table sx={{ maxWidth: 650 }} aria-label="simple table">
     <Button onClick={()=> console.log("ola")}>ola</Button>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.nombre}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center" >
              {row.nombre}
            </TableCell>
            <TableCell align="left">{row.parametro}</TableCell>
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
