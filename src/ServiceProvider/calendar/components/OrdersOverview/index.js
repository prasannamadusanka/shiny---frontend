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

// @mui material components
import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
// import TimelineItem from "examples/Timeline/TimelineItem";

// import { styled } from "@mui/material/styles";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell, { tableCellClasses } from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

// New components
import MDBadge from "components/MDBadge";

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

/*
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
})); */

/*
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
})); */

/*
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
*/

/*
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
]; */

function OrdersOverview() {
  const [value, onChange] = useState(new Date());
  return (
    <Card sx={{ height: "100%", width: "100%", borderRadius: "none" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h3" textAlign="center" fontWeight="medium" pt={2} pb={2}>
          My Calendar
        </MDTypography>
        <MDBox>
          <div align="center">
            <Calendar onChange={onChange} value={value} />
          </div>
        </MDBox>
        {/* <Calendar /> */}
        <MDBox mt={4} textAlign="center">
          &nbsp;&nbsp;
          <MDBadge badgeContent="My Event" size="lg" color="warning" container />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <MDBadge badgeContent="Not Available" size="lg" color="secondary" container />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <MDBadge badgeContent="Event" size="lg" color="info" container />
          &nbsp;&nbsp;&nbsp;&nbsp;
        </MDBox>
        {/*
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            this month
          </MDTypography>
        </MDBox>
        */}
      </MDBox>
      {/*
        <Calendar
          initialView="dayGridMonth"
          initialDate="2021-11-10"
          events={[
          //events
          ]}
          selectable
          editable
        />
      */}
      {/*
      <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="$2400, Design changes"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="New order #1832412"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Server payments for April"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="New card added for order #4395133"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="New card added for order #4395133"
          dateTime="18 DEC 4:54 AM"
          lastItem
        />
      </MDBox>
      */}
    </Card>
  );
}

export default OrdersOverview;
