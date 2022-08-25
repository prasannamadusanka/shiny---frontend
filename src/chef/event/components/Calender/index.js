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
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
//import Calendar from 'react-calendar';
// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './index.css';


function Calander() {
  const [date, setDate] = useState(new Date());
  return (
    <Card sx={{ height: "90%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
         Event Shedule
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>star</Icon>
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>star</Icon>
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>star</Icon>
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>star</Icon>
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>star</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              
            </MDTypography>
            
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={8}>
      <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
        />

      </MDBox>
    </Card>
  );
}

export default Calander;
