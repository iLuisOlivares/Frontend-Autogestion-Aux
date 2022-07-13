import React, {useState} from 'react'
import { Calendar } from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"

const weekDays = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

export const DatePickerComponent = ({date,setDate}) => {

    var today = new Date();

    today.setDate(today.getDate() + 2);
    

    const handleChange = (value) =>{
        setDate(value)
    }
  return (
    <Calendar 
    value={date}
    multiple
    onChange={handleChange}
    weekDays={weekDays}
    months ={months}
    minDate={today}
    plugins={[
        <DatePanel sort="date" />
      ]}
    />
    
  )
}
