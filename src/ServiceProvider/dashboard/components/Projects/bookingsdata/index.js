/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

import { useState, useEffect } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// @mui material components
// import Tooltip from "@mui/material/Tooltip";
// import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";
// import { Card } from "@mui/material";
// import MDAvatar from "components/MDAvatar";
// import MDProgress from "components/MDProgress";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
// import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

// import { useMaterialUIController, setDirection } from "context"; // important

import API from "../../../../../services/baseURL";

// function DateReturn(date) {
//   const today = date;
//   const yyyy = today.getFullYear();
//   const mm = today.getMonth() + 1; // Months start at 0
//   const dd = today.getDate();

//   // eslint-disable-next-line prefer-template
//   const formattedDay = yyyy + "-" + mm + "-" + dd;
//   return formattedDay;
// }

export const getbookingslist = async (event) => {
  const response = await API.get(`ServiceProvider/view_full_bookings`);
  console.log(response); // response -> data -> menus -> 0 -> event_id
  console.log(response.data.menus);
  return response.data.menus;
};

export default function bookingsdata() {
  // const [, dispatch] = useMaterialUIController();
  // useEffect(() => {
  //   setDirection(dispatch, "ServiceProvider");

  //   return () => setDirection(dispatch, "ltr");
  // }, []);

  // services.package_name, services.package_description, services.package_price,
  // services.service_type, services.service_provider_id,
  // banquet.name AS bname, client.name,
  // client.password,
  // banquet.description, banquet.address, banquet.image, banquet.capacity, banquet.email, banquet.contact_no,
  // my_event.event_name, my_event.event_status,
  // event.event_id, event.type, event.pax, event.time_slot, event.date, event.menu_id, event.user_id, event.banquet_id, event.package_id
  const [bookings, setbookings] = useState([
    { event_id: "", event_name: "", time_slot: "", date: "", type: "", bname: "", name: "" },
  ]);
  useEffect(() => {
    getbookingslist()
      .then((data) => {
        console.log(bookings);
        console.log(data);
        setbookings(data);
        console.log(bookings);
      })
      .catch((err) => {
        // console.log(err.error);
      }); // Had to use ; here.
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 0 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Customer</TableCell>
            <TableCell align="left">Time</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Event</TableCell>
            <TableCell align="left">Banquet</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings?.map((item) => (
            <TableRow
              key={item.event_id}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left" key={item.event_id}>
                {item.name}
              </TableCell>
              <TableCell align="left" key={item.event_id}>
                {item.time_slot}
              </TableCell>
              <TableCell align="left" key={item.event_id}>
                {item.date}
              </TableCell>
              <TableCell align="left" key={item.event_id}>
                {item.type}
              </TableCell>
              <TableCell align="left" key={item.event_id}>
                {item.bname}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
