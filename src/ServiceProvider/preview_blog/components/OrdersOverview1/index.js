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
            Service Provider
          </MDTypography>
        </MDBox>
        <MDBox p={0}>
          <MDBox pl={10} pt={2} bgColor="info">
            <MDTypography variant="body1" fontWeight="medium">
              Edit Name
            </MDTypography>
          </MDBox>
          <MDBox pl={6} pt={2} pr={6} bgColor="info">
            <Grid container spacing={1} mb={0} borderColor="success">
              <MDBox bgColor="light" textAlign="center" mb={1} mt={0} pr={4} pb={2} pt={1}>
                <MDTypography variant="caption" pl={1}>
                  Shri Jaya Mangala Gatha Service
                </MDTypography>
              </MDBox>
            </Grid>
          </MDBox>
          <MDBox pl={10} pt={2} bgColor="info">
            <MDTypography variant="body1" fontWeight="medium">
              Edit About
            </MDTypography>
          </MDBox>
          <MDBox pl={4} pt={2} pr={4} bgColor="info">
            <Grid container spacing={1} mb={0} borderColor="success">
              <MDBox bgColor="light" textAlign="center" mb={1} mt={0} pr={8} pb={1} pt={1}>
                <MDTypography variant="caption" pl={1}>
                  D R Vishaka Vimansi&nbsp;&nbsp;
                </MDTypography>
              </MDBox>
            </Grid>
          </MDBox>
          <MDBox pl={4} pt={2} pr={4} bgColor="info">
            <Grid container spacing={1} mb={0} borderColor="success">
              <MDBox bgColor="light" textAlign="center" mb={1} mt={0} pr={4} pb={1} pt={1}>
                <MDTypography variant="caption" pl={1}>
                  073 567 8930 / 011 2 343 456
                </MDTypography>
              </MDBox>
            </Grid>
          </MDBox>
          <MDBox pl={4} pt={2} pr={4} bgColor="info">
            <Grid container spacing={1} mb={0} borderColor="success">
              <MDBox bgColor="light" textAlign="center" mb={1} mt={0} pr={4} pb={1} pt={1}>
                <MDTypography variant="caption" pl={1}>
                  5/23, Ja-Ela Road, Gampaha
                </MDTypography>
              </MDBox>
            </Grid>
          </MDBox>
          <MDBox pl={10} pt={2} bgColor="info">
            <MDTypography variant="body1" fontWeight="medium">
              Edit Prices
            </MDTypography>
          </MDBox>
          <MDBox pl={8} pt={2} pr={6} bgColor="info" pb={6}>
            <Grid container spacing={1} borderColor="success">
              <MDBox bgColor="light" textAlign="center" mb={1} mt={0} pr={3} pl={3} pb={2} pt={1}>
                <MDTypography variant="body1" color="dark" pl={0}>
                  - Bronze -
                </MDTypography>
                <MDTypography variant="body2" fontWeight="medium" pl={0}>
                  Rs. 35,000/=
                </MDTypography>
              </MDBox>
            </Grid>
          </MDBox>
          <MDBox borderRadius="none" bgColor="info" pl={10} mt={0} pb={2} pt={4}>
            <MDButton variant="contained" size="large">
              save
            </MDButton>
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
