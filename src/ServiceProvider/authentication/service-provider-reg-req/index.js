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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// New components
import MDBadge from "components/MDBadge";

// Authentication layout components
import SPRRCoverLayout from "layouts/authentication/components/SPRRCoverLayout";

// Images
import bgImage from "assets/images/service_provider/cover1.jpg";

function Cover() {
  return (
    <SPRRCoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h5" fontWeight="medium" color="white" mt={1}>
            Register as a Service Provider with us!
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Fill the form and send the registration request to our Manager.
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={1}>
              <MDInput type="text" label="Your Name" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="text" label="Name of Business" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="text" label="Address" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="email" label="Email Address" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={1}>
              <MDInput type="text" label="Telephone No." variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="Credit Card No." variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={3}>
              <MDTypography variant="body2" fontWeight="small" color="grey" mt={5}>
                Select the service types you provide...
              </MDTypography>
              <Grid container spacing={1} mt={2}>
                <Grid item xs={12} md={2} xl={6} p={1}>
                  <MDBadge badgeContent="Ashtaka" size="lg" pt={1} px={1} color="info" container />
                </Grid>
                <Grid item xs={12} md={2} xl={6} p={1}>
                  <MDBadge
                    badgeContent="Dance Teams"
                    size="lg"
                    pt={1}
                    px={1}
                    color="info"
                    container
                  />
                </Grid>
                <Grid item xs={12} md={2} xl={6} p={1}>
                  <MDBadge
                    badgeContent="Wedding Cars"
                    size="lg"
                    pt={1}
                    px={1}
                    color="info"
                    container
                  />
                </Grid>
                <Grid item xs={12} md={2} xl={6} p={1}>
                  <MDBadge
                    badgeContent="Jayamangala Gatha"
                    size="lg"
                    pt={1}
                    px={1}
                    color="info"
                    container
                  />
                </Grid>
                <Grid item xs={12} md={2} xl={6} p={1}>
                  <MDBadge
                    badgeContent="Music Bands"
                    size="lg"
                    pt={1}
                    px={1}
                    color="info"
                    container
                  />
                </Grid>
                <Grid item xs={12} md={2} xl={6} p={1}>
                  <MDBadge
                    badgeContent="Fireworks"
                    size="lg"
                    pt={1}
                    px={1}
                    color="info"
                    container
                  />
                </Grid>
              </Grid>
            </MDBox>
            <MDBox
              variant="gradient"
              bgColor="secondary"
              borderRadius="lg"
              coloredShadow="success"
              mx={0}
              mt={3}
              p={1}
              mb={1}
              textAlign="left"
            >
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="white"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Select Service Type
              </MDTypography>
              <MDBox mb={1}>
                <MDInput type="text" label="Package Name" variant="standard" fullWidth />
              </MDBox>
              <MDBox mb={1}>
                <MDInput type="text" label="Package Description" variant="standard" fullWidth />
              </MDBox>
              <MDBox mb={3}>
                <MDInput type="text" label="Package Price" variant="standard" fullWidth />
              </MDBox>
              <Grid container spacing={1} mt={2}>
                <Grid item p={1}>
                  <MDBadge badgeContent="Bronze" size="sm" pt={1} px={1} color="dark" container />
                </Grid>
                <Grid item p={1}>
                  <MDBadge badgeContent="Silver" size="sm" pt={1} px={1} color="dark" container />
                </Grid>
                <Grid item p={1}>
                  <MDBadge badgeContent="+" size="sm" pt={1} px={1} color="dark" container />
                </Grid>
              </Grid>
            </MDBox>
            <MDBox mt={5} mb={3}>
              <MDInput type="password" label="Enter Password" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={3}>
              <MDInput type="password" label="Confirm Password" variant="standard" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                Send Request
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Log In
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </SPRRCoverLayout>
  );
}

export default Cover;
