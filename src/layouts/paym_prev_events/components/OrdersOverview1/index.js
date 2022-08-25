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
            2020-01-02
          </MDTypography>
        </MDBox>
        <MDBox p={0}>
          <MDBox pl={4} pt={2} bgColor="info">
            <MDTypography>
              Client:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;N&nbsp;D&nbsp;J&nbsp;Siripala
            </MDTypography>
            <MDTypography>
              Event ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2044
            </MDTypography>
            <MDTypography>Event Type: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Wedding</MDTypography>
            <MDTypography>
              Time:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9.00&nbsp;AM&nbsp;-&nbsp;3.00&nbsp;PM
            </MDTypography>
          </MDBox>
          <MDBox pl={10} pt={4} bgColor="info">
            <Grid container spacing={1} mb={0} borderColor="success">
              <MDTypography>Notes: </MDTypography>
              <MDBox bgColor="light" textAlign="left" mb={1} mr={2} pr={0} pb={0} pt={1}>
                <MDTypography variant="caption" pl={1}>
                  Home coming of Janaka and Dilini. Gold &nbsp;&nbsp;coloured costumes. Great!
                </MDTypography>
              </MDBox>
            </Grid>
          </MDBox>
          <MDBox pl={4} pt={1} bgColor="info">
            <MDTypography>
              Service:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Special
            </MDTypography>
            <MDTypography>
              Rate:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SLR&nbsp;35,000/=
            </MDTypography>
            <MDTypography>
              Paid Date: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20/01/2020
            </MDTypography>
            <MDTypography fontWeight="medium" color="warning">
              Value&nbsp;Paid:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SLR&nbsp;35,000/=
            </MDTypography>
          </MDBox>
          <MDBox pl={10} pt={2} pb={3} bgColor="info">
            <Grid container spacing={1} mt={2} borderColor="success">
              <MDTypography>Notes:&nbsp;&nbsp;&nbsp;&nbsp;Paid All </MDTypography>
              <MDBox bgColor="light" mb={4} ml={10} pr={12} pb={1} pt={1}>
                &nbsp; &apos;
              </MDBox>
              <MDBox mb={2} bgColor="info">
                <MDButton variant="gradient" color="secondary" size="large">
                  +
                </MDButton>
              </MDBox>
            </Grid>
          </MDBox>
          <MDBox borderRadius="none" bgColor="info" mb={0} pb={0} pt={3.7}>
            &nbsp;
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
