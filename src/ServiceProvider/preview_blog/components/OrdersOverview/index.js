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
import MDInput from "components/MDInput";

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
            Our Events
          </MDTypography>
        </MDBox>
        <MDBox p={0}>
          <MDBox bgColor="light">
            <MDBox mb={0} bgColor="light">
              <Grid container spacing={0} mb={1} lg={15} pt={2} pl={1} pr={1}>
                <Grid item xs={4} sm={3} lg={7}>
                  <MDTypography variant="caption">Event&nbsp;23&nbsp;-&nbsp;12/03/22</MDTypography>
                </Grid>
                <Grid item xs={4} sm={3} lg={1} mt={1}>
                  <MDInput type="checkbox" variant="standard" />
                </Grid>
                <Grid item xs={4} sm={3} lg={2}>
                  <MDButton size="small">Remove</MDButton>
                </Grid>
              </Grid>
              <Grid container spacing={0} mb={1} lg={15} pt={1} pl={1} pr={1}>
                <Grid item xs={4} sm={3} lg={7}>
                  <MDTypography variant="caption" color="info">
                    Event&nbsp;12&nbsp;-&nbsp;16/05/21
                  </MDTypography>
                </Grid>
                <Grid item xs={4} sm={3} lg={1} mt={1}>
                  <MDInput type="checkbox" variant="standard" />
                </Grid>
                <Grid item xs={4} sm={3} lg={2}>
                  <MDButton size="small">Remove</MDButton>
                </Grid>
              </Grid>
              <Grid container spacing={0} mb={1} lg={15} pt={1} pl={1} pr={1}>
                <Grid item xs={4} sm={3} lg={7}>
                  <MDTypography variant="caption">Event&nbsp;34&nbsp;-&nbsp;19/04/22</MDTypography>
                </Grid>
                <Grid item xs={4} sm={3} lg={1} mt={1}>
                  <MDInput type="checkbox" variant="standard" />
                </Grid>
                <Grid item xs={4} sm={3} lg={2}>
                  <MDButton size="small">Remove</MDButton>
                </Grid>
              </Grid>
              <Grid container spacing={0} mb={1} lg={15} pt={1} pl={1} pr={1}>
                <Grid item xs={4} sm={3} lg={7}>
                  <MDTypography variant="caption">Event&nbsp;46&nbsp;-&nbsp;28/05/22</MDTypography>
                </Grid>
                <Grid item xs={4} sm={3} lg={1} mt={1}>
                  <MDInput type="checkbox" variant="standard" />
                </Grid>
                <Grid item xs={4} sm={3} lg={2}>
                  <MDButton size="small">Remove</MDButton>
                </Grid>
              </Grid>
              <Grid container spacing={0} mb={1} lg={15} pt={1} pl={1} pr={1}>
                <Grid item xs={4} sm={3} lg={7}>
                  <MDTypography variant="caption">Event&nbsp;57&nbsp;-&nbsp;04/07/22</MDTypography>
                </Grid>
                <Grid item xs={4} sm={3} lg={1} mt={1}>
                  <MDInput type="checkbox" variant="standard" />
                </Grid>
                <Grid item xs={4} sm={3} lg={2}>
                  <MDButton size="small">Remove</MDButton>
                </Grid>
              </Grid>
              <Grid container spacing={0} mb={0} lg={15} pt={1} pl={1} pr={1}>
                <Grid item xs={4} sm={3} lg={7}>
                  <MDTypography variant="caption">Event&nbsp;05&nbsp;-&nbsp;10/03/21</MDTypography>
                </Grid>
                <Grid item xs={4} sm={3} lg={1} mt={1}>
                  <MDInput type="checkbox" variant="standard" />
                </Grid>
                <Grid item xs={4} sm={3} lg={2}>
                  <MDButton size="small">Remove</MDButton>
                </Grid>
              </Grid>
            </MDBox>
          </MDBox>
          <MDBox pl={1} pt={2} pb={2} mt={0} bgColor="info">
            <Grid container spacing={1} mt={0} borderColor="success">
              <MDBox bgColor="light" mb={1} ml={2} pr={9} pb={1} pt={0}>
                <MDTypography variant="caption">&nbsp;|Add an event.</MDTypography>
              </MDBox>
              <MDBox mb={1} bgColor="info">
                <MDButton variant="gradient" color="secondary" size="small">
                  <MDTypography variant="h5">+</MDTypography>
                </MDButton>
              </MDBox>
            </Grid>
          </MDBox>
          <MDBox pl={2} pt={2} pb={2} bgColor="light">
            <MDTypography>Click an event to select..</MDTypography>
          </MDBox>
          <MDBox pl={4} pt={2} pb={2} bgColor="info">
            <Grid container spacing={1} mb={0} borderColor="success">
              <MDTypography pl={3}>Event Description</MDTypography>
              <MDBox bgColor="light" mt={1} mb={1} pl={12} pr={12} pb={10}>
                <MDTypography variant="caption" textAlign="left" pl={1}>
                  |
                </MDTypography>
              </MDBox>
            </Grid>
          </MDBox>
          <MDBox borderRadius="none" bgColor="dark" textAlign="center" mt={0} pb={3} pt={3}>
            <MDTypography variant="h4" color="info">
              Main Gallery
            </MDTypography>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
