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
import MDBadge from "components/MDBadge";
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
            Gallery - Event 12
          </MDTypography>
        </MDBox>
        <MDBox p={1} bgColor="light">
          <MDBox component="form" role="form">
            <MDBox mb={0} bgColor="light">
              <Grid container spacing={0} mb={2} lg={15} pt={2} pl={2} pr={2}>
                <Grid item xs={4} sm={3} lg={4}>
                  <MDTypography variant="body1">Image 7001</MDTypography>
                </Grid>
                <Grid item xs={4} sm={3} lg={2} mt={1}>
                  <MDInput type="checkbox" variant="standard" />
                </Grid>
                <Grid item xs={4} sm={3} lg={4}>
                  <MDButton size="small">Remove</MDButton>
                </Grid>
              </Grid>
            </MDBox>
            <MDBox mb={0} bgColor="light">
              <Grid container spacing={0} mb={2} lg={15} pt={0} pl={2} pr={2}>
                <Grid item xs={4} sm={3} lg={4}>
                  <MDTypography variant="body1">Image 6004</MDTypography>
                </Grid>
                <Grid item xs={4} sm={3} lg={2} mt={1}>
                  <MDInput type="checkbox" variant="standard" />
                </Grid>
                <Grid item xs={4} sm={3} lg={4}>
                  <MDButton size="small">Remove</MDButton>
                </Grid>
              </Grid>
            </MDBox>
            <MDBox mb={0} bgColor="light">
              <Grid container spacing={0} mb={2} lg={15} pt={0} pl={2} pr={2}>
                <Grid item xs={4} sm={3} lg={4}>
                  <MDTypography variant="body1">Image 3402</MDTypography>
                </Grid>
                <Grid item xs={4} sm={3} lg={2} mt={1}>
                  <MDInput type="checkbox" variant="standard" />
                </Grid>
                <Grid item xs={4} sm={3} lg={4}>
                  <MDButton size="small">Remove</MDButton>
                </Grid>
              </Grid>
            </MDBox>
            <MDBox mb={0} bgColor="light">
              <Grid container spacing={0} mb={2} lg={15} pt={0} pl={2} pr={2}>
                <Grid item xs={4} sm={3} lg={4}>
                  <MDTypography variant="body1">Image 4564</MDTypography>
                </Grid>
                <Grid item xs={4} sm={3} lg={2} mt={1}>
                  <MDInput type="checkbox" variant="standard" />
                </Grid>
                <Grid item xs={4} sm={3} lg={4}>
                  <MDButton size="small">Remove</MDButton>
                </Grid>
              </Grid>
            </MDBox>
            <MDBox mb={0} bgColor="light">
              <Grid container spacing={0} mb={2} lg={15} pt={0} pl={2} pr={2}>
                <Grid item xs={4} sm={3} lg={4}>
                  <MDTypography variant="body1">Video 7002</MDTypography>
                </Grid>
                <Grid item xs={4} sm={3} lg={2} mt={1}>
                  <MDInput type="checkbox" variant="standard" />
                </Grid>
                <Grid item xs={4} sm={3} lg={4}>
                  <MDButton size="small">Remove</MDButton>
                </Grid>
              </Grid>
            </MDBox>
            <Grid container spacing={1} mt={8} mb={2} pl={4} pr={4}>
              <Grid item xs={12} sm={3} lg={4} ml={18} mr={5} mb={4}>
                <MDButton variant="gradient" color="info" textAlign="center" size="large">
                  &nbsp;&nbsp;&nbsp;&nbsp;Upload&nbsp;&nbsp;&nbsp;&nbsp;
                </MDButton>
              </Grid>
              <Grid item xs={12} sm={3} lg={12} ml={2} mr={2}>
                <MDBox bgColor="info" pl={0} pr={0} pt={2} pb={2}>
                  <MDBadge variant="gradient" bgColor="info" textAlign="center" size="large">
                    &nbsp;&nbsp;&nbsp;&nbsp;Preview&nbsp;&nbsp;&nbsp;&nbsp;
                  </MDBadge>
                  <MDBox bgColor="light" mt={2} ml={2} mr={2} mb={0.2} pt={10} pb={10}>
                    &nbsp;
                  </MDBox>
                </MDBox>
              </Grid>
            </Grid>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
