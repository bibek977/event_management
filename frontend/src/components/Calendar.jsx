import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';
import multiMonthPlugin from '@fullcalendar/multimonth'

const Calendar = () => {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin, timeGridPlugin, listPlugin, multiMonthPlugin ]}
      initialView="multiMonthYear"
      events={[
        { title: 'event 1', date: '2024-06-19', end: '2024-06-21' },
        { title: 'event 2', date: '2024-06-02', end: '2024-06-02' }
      ]}
    //   views={{
    //     multiMonth3: {
    //         type: 'multiMonth',
    //         duration: {month: 3},
    //         titleFormat: {month: 'short', year: 'numeric'},
    //         columnHeaderFormat: {weekDay: 'short'}
    //     }
    // }}
      headerToolbar = {{
        left: "prev,next",
        center: "title",
        right: "multiMonthYear,dayGridMonth,dayGridWeek,listYear"
      }}
      
    />
  )
}

export default Calendar