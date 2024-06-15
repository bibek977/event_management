import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list';

const EventList = () => {
  return (
    <FullCalendar
      plugins={[ dayGridPlugin, timeGridPlugin, listPlugin ]}
      initialView="listYear"
      events={[
        { title: 'event 1', date: '2024-06-19', end: '2024-06-21' },
        { title: 'event 2', date: '2024-06-02', end: '2024-06-02' }
      ]}
      views={{
        listWeek : {

            buttonText: 'week'
        },
        listMonth : {

            buttonText: 'month'
        },
        listYear : {

            buttonText: 'year'
        }, 
      }}
      headerToolbar = {{
        left: "prev,next",
        center: "title",
        right: "listWeek,listMonth,listYear"
      }}
    />
  )
}

export default EventList