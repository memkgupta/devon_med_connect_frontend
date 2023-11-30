import React, { useEffect, useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import dayjs from 'dayjs';
import { da } from 'date-fns/locale';
function Calendar({setdate}) {
    const [date,setDate] = useState(dayjs(new Date()));

    useEffect(()=>{
      setdate(date);
    },[date]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDatePicker minDate={dayjs(new Date())} value={date} onChange={(e)=>{setDate(e.toDate())}} orientation="landscape" />
    </LocalizationProvider>
  )
}

export default Calendar