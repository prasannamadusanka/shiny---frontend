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
            Service Provider
          </MDTypography>
        </MDBox>
        <MDBox p={0}>
          <MDBox textAlign="center" pl={0} pt={2} bgColor="info">
            <MDTypography variant="h4" fontWeight="medium" color="light">
              Shri Jaya Mangala Gatha Service
            </MDTypography>
          </MDBox>
          <MDBox pl={5} pt={4} pr={3} bgColor="info">
            <MDTypography variant="h6" color="light" fontWeight="small" pl={1}>
              D R Vishaka Vimansi
            </MDTypography>
          </MDBox>
          <MDBox pl={2} pt={2} pr={0} bgColor="info">
            <MDTypography variant="h6" color="light">
              073 567 8930 / 011 2 343 456
            </MDTypography>
          </MDBox>
          <MDBox pl={2} pt={2} pr={2} bgColor="info">
            <MDTypography variant="h6" color="light">
              5/23, Ja-Ela Road, Gampaha
            </MDTypography>
          </MDBox>
          <MDBox pl={7} pt={2} bgColor="info">
            <MDTypography variant="body1" fontWeight="medium">
              Chat with us...
            </MDTypography>
          </MDBox>
          <MDBox pl={3} pt={2} pr={2} bgColor="info" pb={2}>
            <Grid container spacing={1} borderColor="success">
              <MDBox bgColor="light" textAlign="center" mb={1} mt={0} pr={1} pl={1} pb={2} pt={1}>
                <MDTypography variant="caption" color="dark" fontWeight="medium" pl={0}>
                  Basic
                </MDTypography>
                <MDTypography variant="body2" color="dark" pl={0}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3&nbsp;Singers&nbsp;+&nbsp;Violin&nbsp;Player&nbsp;&nbsp;
                </MDTypography>
                <MDTypography variant="h4" fontWeight="medium" color="success" pl={0}>
                  SLR 25,000/=
                </MDTypography>
              </MDBox>
              <MDBox bgColor="light" textAlign="center" mb={1} mt={0} pr={3} pl={3} pb={2} pt={1}>
                <MDTypography variant="caption" color="dark" fontWeight="medium" pl={0}>
                  Special
                </MDTypography>
                <MDTypography variant="body2" color="dark" pl={0}>
                  4 Singers + Violin Player + Welcome Song
                </MDTypography>
                <MDTypography variant="h4" fontWeight="medium" color="success" pl={0}>
                  SLR 35,000/=
                </MDTypography>
              </MDBox>
              <MDBox bgColor="light" textAlign="center" mb={1} mt={0} pr={3} pl={3} pb={2} pt={1}>
                <MDTypography variant="caption" color="dark" fontWeight="medium" pl={0}>
                  Best
                </MDTypography>
                <MDTypography variant="body2" color="dark" pl={0}>
                  6 Singers + Violin Player + Theme-costumes
                </MDTypography>
                <MDTypography variant="h4" fontWeight="medium" color="success" pl={0}>
                  SLR 50,000/=
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
