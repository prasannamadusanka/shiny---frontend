/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/



// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";



const locales = {
"en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
format,
parse,
startOfWeek,
getDay,
locales,
});

const events = [
{
title: "Day  wedding (Hotel Shiny)",
allDay: true,
start: new Date(2022, 7, 1),
end: new Date(2022, 7, 3),
},

{
    title: "Night function (Hotel Shiny)",
    allDay: true,
    start: new Date(2022, 7, 10),
    end: new Date(2022, 7, 11),
    },

    {
        title: "Day  wedding (Hotel River Park)",
        allDay: true,
        start: new Date(2022, 7, 15),
        end: new Date(2022, 7, 17),
        },
        

    {
        title: "Day  wedding (Hotel Sundream)",
        allDay: true,
        start: new Date(2022, 7, 20),
        end: new Date(2022, 7, 22),
        },
        {
            title: "Night function(Hotel Sundream)",
            allDay: true,
            start: new Date(2022, 7, 24),
            end: new Date(2022, 7, 26),
            },     
    
{
title: "Night wedding (Hotel Sundream)",
allDay: true,
start: new Date(2022, 6, 7),
end: new Date(2022, 6, 9),
},

{
    title: "Day function (Hotel Shiny)",
    allDay: true,
    start: new Date(2022, 8, 25),
    end: new Date(2022, 8, 27),
    },

    {
        title: "Day function (Hotel Shiny)",
        allDay: true,
        start: new Date(2022, 8, 10),
        end: new Date(2022, 8, 11),
        },

        {
            title: "Night  function (Hotel River Park)",
            allDay: true,
            start: new Date(2022, 8, 1),
            end: new Date(2022, 8, 2),
            
            },

            {
                title: "Day  wedding (Hotel Shiny)",
                allDay: true,
                start: new Date(2022, 8, 11),
                end: new Date(2022, 8, 13),
                },

                {
                    title: "Day  wedding (Hotel Shiny)",
                    allDay: true,
                    start: new Date(2022, 8, 21),
                    end: new Date(2022, 8, 23),
                    },

                    {
                        title: "Day  wedding (Hotel Shiny)",
                        allDay: true,
                        start: new Date(2022, 8, 5),
                        end: new Date(2022, 8, 6),
                        },
                              
                        
                   
            

    {
         title: "Day function (Hotel Shiny)",
         allDay: true,
         start: new Date(2022, 9, 20),
        end: new Date(2022, 9, 20),
     },

    {
          title: "Day Wedding (Hotel SunDream)",
          allDay: true,
          start: new Date(2022, 9, 28),
          end: new Date(2022, 9, 28),
    },


     {
         title: "Night function (Hotel Shiny)",
         allDay: false,
         start: new Date(2022, 10, 10),
         end: new Date(2022, 10, 10),
     },

     {
        title: "Day function (Hotel RiverParl)",
        allDay: true,
        start: new Date(2022, 10, 14),
        end: new Date(2022, 10, 15),
    },

    {
        title: "Night function (Hotel Shiny Lakeside)",
        allDay: true,
        start: new Date(2022, 10, 8),
        end: new Date(2022, 10, 8),
    },

    // {
    //     title: "Night function (Hotel Shiny Garden)",
    //     allDay: false,
    //     start: new Date(2022, 9, 25),
    //     end: new Date(2022, 9, 25),
    // },

    {
        title: "Night function (Hotel Shiny Garden)",
        allDay: true,
        start: new Date(2022, 9, 25),
        end: new Date(2022, 9, 26),
    },



                    {
title: "Day function (Hotel RiverPark)",
allDay: true,
start: new Date(2022, 10, 18),
end: new Date(2022, 10, 18),
},    

{
title: "Night function (Hotel ShinyGarden)",
allDay: true,
start: new Date(2022, 6, 21),
end: new Date(2022, 6, 21
),
},
];
function Calender() {
    const [, dispatch] = useMaterialUIController();
    //const { sales, tasks } = reportsLineChartData;
    useEffect(() => {
      setDirection(dispatch, "owner");
  
      return () => setDirection(dispatch, "ltr");
    }, []);


const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
const [allEvents, setAllEvents] = useState(events);

function handleAddEvent() {
setAllEvents([...allEvents, newEvent]);
}
return (
<DashboardLayout>
<DashboardNavbar />
<div className="App">
<h1>Calendar</h1>
{/* <h2>Add New Event</h2>
<div>
<input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
<DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
<DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
<button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
Add Event
</button>
</div> */}
<Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
</div>
<Footer />
</DashboardLayout>
);
}

export default Calender;
