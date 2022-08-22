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
title: "Big Meeting",
allDay: true,
start: new Date(2022, 7, 1),
end: new Date(2022, 7, 3),
},
{
title: "Vacation",
start: new Date(2022, 6, 7),
end: new Date(2022, 6, 9),
},
{
title: "day wedding",
start: new Date(2022, 6, 20),
end: new Date(2022, 6, 20),
},
{
title: "night wedding",
start: new Date(2022, 6, 21),
end: new Date(2022, 6, 21
),
},
];
function Calender() {
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
<h2>Add New Event</h2>
<div>
<input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
<DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
<DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
<button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
Add Event
</button>
</div>
<Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
</div>
<Footer />
</DashboardLayout>
);
}

export default Calender;
