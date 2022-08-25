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
import MDAlert from "components/MDAlert";
import MDBadge from "components/MDBadge";

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
    <Card sx={{ height: "100%" }}>
      <MDBox pt={0} px={0}>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="none"
          coloredShadow="none"
          mx={0}
          mt={0}
          p={1}
          mb={0}
          textAlign="left"
        >
          <MDTypography variant="h6" fontWeight="small" paragraph="true">
            Name: P D J Silva
          </MDTypography>
          <MDTypography variant="h6" fontWeight="small" paragraph="true">
            Event: 5043 - Wedding
          </MDTypography>
          <MDTypography variant="h6" fontWeight="small" paragraph="true">
            Time: 9AM - 3PM 22/01/2023
          </MDTypography>
        </MDBox>
        <MDBox p={0}>
          <Grid container spacing={0} mt={2} mr={0} ml={0}>
            <Grid item xs={12} md={2} xl={6} p={1}>
              <MDBadge
                badgeContent="Hi, how much time it will take."
                size="lg"
                pt={1}
                px={-2}
                color="light"
                container
              />
            </Grid>
            <Grid item xs={12} md={2} xl={6} p={1}>
              &nbsp;
            </Grid>
            <Grid item xs={12} md={2} xl={5} p={1}>
              {/* use this xl value to adjust gap of service provider reply */}
              &nbsp;
            </Grid>
            <Grid item xs={12} md={2} xl={6} p={1}>
              <MDBadge
                badgeContent="It takes 20 minutes."
                size="lg"
                pt={1}
                px={-100}
                color="secondary"
                container
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} mb={1} pt={22} pb={0} pl={2} borderColor="success">
            <MDBox bgColor="light" textAlign="left" mt={1} mb={2} pl={0} pr={22} pt={1}>
              &nbsp;hi&nbsp;I
            </MDBox>
            <Grid item xs={12} sm={3} lg={4} pt={0}>
              <MDAlert variant="gradient" color="info">
                &nbsp;&nbsp;send
              </MDAlert>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
