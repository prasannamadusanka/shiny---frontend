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
// import Grid from "@mui/material/Grid";

import cover from "assets/images/service_provider/cover1.jpg";
import cover0 from "assets/images/service_provider/cover4.jpg";

// Material Dashboard 2 React components
// import MDButton from "components/MDButton";
// import MDAlert from "components/MDAlert";
// import MDButton from "components/MDButton";
// import MDInput from "components/MDInput";
// import MDBadge from "components/MDBadge";
// import MDBadge from "components/MDBadge";

function OrdersOverview() {
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
            Gallery
          </MDTypography>
        </MDBox>
        <MDBox p={1} bgColor="light">
          <card>
            <MDBox component="img" src={cover} alt="cover" width="100%" mr={2} />
            <MDBox component="img" src={cover0} alt="cover" width="100%" mr={2} />
          </card>
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
