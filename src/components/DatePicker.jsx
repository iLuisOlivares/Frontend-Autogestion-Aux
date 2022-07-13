import React from 'react'
import { Calendar } from "react-multi-date-picker"
import DatePanel from "react-multi-date-picker/plugins/date_panel"

const weekDays = ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"]
const months = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]

export const DatePickerComponent = ({date,setDate}) => {

    const handleChange = (value) =>{
        setDate(value)
    }
  return (
    <Calendar 
    value={date}
    multiple
    plugins={[
        <DatePanel />
       ]}
    onChange={handleChange}
    weekDays={weekDays}
    months ={months}
    />
    
  )
}
