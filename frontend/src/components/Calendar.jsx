import React, { useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import multiMonthPlugin from '@fullcalendar/multimonth'
import AxiosInstance from './AxiosInstance';

const Calendar = () => {
  const [getEvent,setEvent]=useState([])

  const getData = ()=>{
    AxiosInstance.get(`api/`)
    .then((res)=>{

      setEvent(res.data.data)
    })
    }
    useEffect(()=>{
        getData()
      },[])
      
  return (
    <FullCalendar
      plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, multiMonthPlugin ]}
      initialView="dayGridMonth"
      events={getEvent}
      selectable="true"
      headerToolbar = {{
        left: "prev,next",
        center: "title",
        right: "dayGridMonth,multiMonthYear,dayGridWeek,listYear"
      }}
      
    />
  )
}

export default Calendar