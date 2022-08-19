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

// @mui material components
import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%", width: "100%" }}>
      <MDBox pt={1} px={0} borderRadius="none">
        <MDBox>
          <MDTypography ml={12} mr={6} variant="title" fontWeight="medium">
            JANUARY&nbsp;2020
          </MDTypography>
        </MDBox>
        {/* <Calendar /> */}
        <MDBox pl={2} mt={47} mb={0} bgColor="dark">
          <MDTypography variant="caption" fontWeight="medium" color="light">
            Prev. Month: December 2019
          </MDTypography>
        </MDBox>
        <MDBox pl={2} mt={0} mb={0} bgColor="dark">
          <MDTypography variant="caption" fontWeight="medium" color="light">
            No. of Events: 8 |+3|
          </MDTypography>
        </MDBox>
        <MDBox pl={2} mt={0} mb={0} bgColor="dark">
          <MDTypography variant="caption" fontWeight="medium" color="light">
            Revenue: SLR 275,000/= |+80,000|
          </MDTypography>
        </MDBox>
        <MDBox pl={2} mt={0} mb={0} bgColor="dark">
          <MDTypography variant="caption" fontWeight="medium" color="warning">
            Month: January 2020
          </MDTypography>
        </MDBox>
        <MDBox pl={2} mt={0} mb={0} bgColor="dark">
          <MDTypography variant="caption" fontWeight="medium" color="warning">
            No. of Events: 5
          </MDTypography>
        </MDBox>
        <MDBox pl={2} mt={0} mb={0} bgColor="dark">
          <MDTypography variant="caption" fontWeight="medium" color="warning">
            Revenue: SLR 195,000/=
          </MDTypography>
        </MDBox>
        <MDBox pl={2} mt={0} mb={0} bgColor="dark">
          <MDTypography variant="caption" fontWeight="medium" color="light">
            Next Month: February 2020
          </MDTypography>
        </MDBox>
        <MDBox pl={2} mt={0} mb={0} bgColor="dark">
          <MDTypography variant="caption" fontWeight="medium" color="light">
            No. of Events: 6 |+1|
          </MDTypography>
        </MDBox>
        <MDBox pl={2} mt={0} mb={0} bgColor="dark">
          <MDTypography variant="caption" fontWeight="medium" color="light">
            Revenue: SLR 170,000/= |-25,000|
          </MDTypography>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
