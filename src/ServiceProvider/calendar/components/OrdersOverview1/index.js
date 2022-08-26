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

// import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
// import MDButton from "components/MDButton";
// import MDAlert from "components/MDAlert";
import MDButton from "components/MDButton";
// import MDBadge from "components/MDBadge";

function OrdersOverview() {
  /*
  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);
  */
  return (
    <Card mr={0} nl={40} sx={{ height: "100%", width: "100%" }}>
      <MDBox pt={0} px={0}>
        <MDBox
          variant="gradient"
          bgColor="dark"
          borderRadius="none"
          coloredShadow="none"
          mx={0}
          mt={0}
          p={1}
          mb={0}
          textAlign="left"
        >
          <MDTypography variant="h3" fontWeight="medium" textAlign="center" color="info">
            2023-01-22
          </MDTypography>
        </MDBox>
        <MDBox p={0}>
          <MDBox pl={4} pt={2} bgColor="info">
            <MDTypography>
              Client:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;P&nbsp;D&nbsp;J&nbsp;Silva
            </MDTypography>
            <MDTypography>
              Event ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5043
            </MDTypography>
            <MDTypography>Event Type: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wedding</MDTypography>
            <MDTypography>
              Time:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.00&nbsp;AM&nbsp;-&nbsp;3.00&nbsp;PM
            </MDTypography>
          </MDBox>
          <MDBox pl={10} pt={4} bgColor="info">
            <Grid container spacing={1} mb={1} borderColor="success">
              <MDTypography>Notes: </MDTypography>
              <MDBox bgColor="light" textAlign="left" mb={2} ml={7} pr={25} pb={4} pt={1}>
                &nbsp;&nbsp;I
              </MDBox>
            </Grid>
            <Grid container spacing={1} mt={2} borderColor="success">
              <MDTypography>Schedule: </MDTypography>
              <MDBox bgColor="light" textAlign="left" mb={2} ml={3} pr={25} pb={5} pt={1}>
                &nbsp;&nbsp;-
              </MDBox>
            </Grid>
          </MDBox>
          <MDBox pl={4} pt={2} pb={2} bgColor="secondary">
            <MDTypography>Event: 5043 - Birthday Party</MDTypography>
            <MDTypography>Time:&nbsp; 6.00 PM - 11.00 PM</MDTypography>
          </MDBox>
          <Grid container spacing={1} mb={1} pt={3} pl={2}>
            <Grid item xs={12} sm={3} lg={4} pt={0} ml={6} mr={5}>
              <MDButton variant="gradient" color="info" textAlign="center" size="small">
                Change Availability
              </MDButton>
            </Grid>
            <Grid item xs={12} sm={3} lg={4} pt={0} ml={0} mr={5}>
              <MDButton variant="gradient" color="info" textAlign="center" size="large">
                &nbsp;&nbsp;&nbsp;&nbsp;OK&nbsp;&nbsp;&nbsp;&nbsp;
              </MDButton>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
