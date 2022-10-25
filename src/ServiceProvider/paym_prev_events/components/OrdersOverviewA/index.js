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
import MDInput from "components/MDInput";
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
            Analyze
          </MDTypography>
        </MDBox>
        <MDBox p={1} bgColor="info">
          <MDBox component="form" role="form">
            <MDBox mb={0} bgColor="light">
              <MDTypography variant="caption">&nbsp;Start Date</MDTypography>
              <MDInput type="text" label="DD-MM-YYYY" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={0} bgColor="light">
              <MDTypography variant="caption">&nbsp;End Date</MDTypography>
              <MDInput type="text" label="DD-MM-YYYY" variant="standard" fullWidth />
            </MDBox>
            <MDBox mt={2} bgColor="light">
              <MDTypography variant="caption">&nbsp;Add Filters</MDTypography>
              <MDInput type="text" label="All Rates" variant="standard" fullWidth />
              <MDInput type="text" label="All Event Types" variant="standard" fullWidth />
              <MDInput type="text" label="All Banquets" variant="standard" fullWidth />
            </MDBox>
            <Grid container spacing={1} mb={4} pt={3} pl={8} pr={2}>
              <Grid item xs={12} sm={3} lg={4} ml={5} mr={5}>
                <MDButton variant="gradient" color="info" textAlign="center" size="large">
                  &nbsp;&nbsp;&nbsp;&nbsp;GO&nbsp;&nbsp;&nbsp;&nbsp;
                </MDButton>
              </Grid>
            </Grid>
            <MDBox pl={2} pr={2} pt={2} pb={2} bgColor="light">
              <MDTypography variant="body1" color="dark" fontWeight="medium">
                Total Revenue
              </MDTypography>
              <MDTypography variant="body1" color="warning" fontWeight="large">
                &nbsp;&nbsp;&nbsp;&nbsp;SLR&nbsp;4,678,000/=
              </MDTypography>
              <MDTypography variant="body1" color="dark" fontWeight="medium">
                Total No. of Events
              </MDTypography>
              <MDTypography variant="body1" color="warning" fontWeight="large">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;143
              </MDTypography>
            </MDBox>
            <MDBox borderRadius="none" bgColor="info">
              &nbsp;
            </MDBox>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
