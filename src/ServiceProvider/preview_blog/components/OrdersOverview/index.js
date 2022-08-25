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
// import MDInput from "components/MDInput";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
// import MDButton from "components/MDButton";
// import MDAlert from "components/MDAlert";
// import MDButton from "components/MDButton";
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
            Our Events
          </MDTypography>
        </MDBox>
        <MDBox p={0}>
          <MDBox bgColor="light">
            <MDBox ml={1} mb={0} bgColor="light">
              <Grid container spacing={0} mb={1} lg={15} pt={2} pl={1} pr={1}>
                <Grid item xs={4} sm={3} lg={10}>
                  <MDTypography variant="body1">Event&nbsp;23&nbsp;-&nbsp;12/03/22</MDTypography>
                </Grid>
              </Grid>
              <Grid container spacing={0} mb={1} lg={15} pt={1} pl={1} pr={1}>
                <Grid item xs={4} sm={3} lg={10}>
                  <MDTypography variant="body1">Event&nbsp;12&nbsp;-&nbsp;16/05/21</MDTypography>
                </Grid>
              </Grid>
              <Grid container spacing={0} mb={1} lg={15} pt={1} pl={1} pr={1}>
                <Grid item xs={4} sm={3} lg={10}>
                  <MDTypography variant="body1">Event&nbsp;34&nbsp;-&nbsp;19/04/22</MDTypography>
                </Grid>
              </Grid>
              <Grid container spacing={0} mb={1} lg={15} pt={1} pl={1} pr={1}>
                <Grid item xs={4} sm={3} lg={10}>
                  <MDTypography variant="body1">Event&nbsp;46&nbsp;-&nbsp;28/05/22</MDTypography>
                </Grid>
              </Grid>
              <Grid container spacing={0} mb={1} lg={15} pt={1} pl={1} pr={1}>
                <Grid item xs={4} sm={3} lg={10}>
                  <MDTypography variant="body1">Event&nbsp;57&nbsp;-&nbsp;04/07/22</MDTypography>
                </Grid>
              </Grid>
            </MDBox>
          </MDBox>
          <MDBox mt={2} mb={2} pl={2} pt={3} pb={3} bgColor="light">
            <MDTypography>Click an event to select..</MDTypography>
          </MDBox>
          <MDBox pl={4} pt={2} pb={2} bgColor="info">
            <Grid container spacing={1} mb={0} borderColor="success">
              <MDTypography pl={3}>Event Description</MDTypography>
              <MDBox bgColor="light" mt={1} mb={1} pl={12} pr={12} pb={10}>
                <MDTypography variant="caption" color="secondary" textAlign="left" pl={1}>
                  |
                </MDTypography>
              </MDBox>
            </Grid>
          </MDBox>
          <MDBox mt={2} pl={4} pt={2} pb={2} bgColor="info">
            <Grid container spacing={1} mb={0} borderColor="success">
              <MDTypography pl={3}>Client&apos;s Review</MDTypography>
              <MDBox bgColor="light" mt={1} mb={1} pl={12} pr={12} pb={10}>
                <MDTypography variant="caption" color="secondary" textAlign="left" pl={1}>
                  |
                </MDTypography>
              </MDBox>
            </Grid>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
