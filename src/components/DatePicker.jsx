import * as React from 'react';


import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import { addDays } from 'date-fns';
import 'react-date-range/dist/theme/default.css'; // theme css file
export const DatePicker = ({fecha,setFecha}) => {
 

  const handleChange = (item) =>{
    setFecha({...fecha,...item});
  }
 
  return (
    <DateRange
    
    showSelectionPreview={true}
    moveRangeOnFirstSelection={false}
    minDate={addDays(new Date(),2)}
    months={2}
    onChange={item => setFecha({ ...fecha, ...item })}
    ranges={Object.keys(fecha).map(function (key) {return fecha[key];})}
    staticRanges={false}
    direction="vertical"
    ></DateRange>
  )
}
