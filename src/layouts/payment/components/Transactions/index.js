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
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";

function Transactions() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
         Payment History
        </MDTypography>
       
      </MDBox>
      <MDBox pt={3} pb={2} px={2}>
        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            newest
          </MDTypography>
        </MDBox>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="star"
            name="Lavan Music Band"
            description="02 August 2022, at 12:30 PM"
            value="LKR 2,500"
          />
          <Transaction
            color="success"
            icon="star"
            name="Swetha Jayamangala Gatha"
            description="02 August 2022, at 04:30 AM"
            value="LKR 2,000"
          />
        </MDBox>
        <MDBox mt={1} mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            yesterday
          </MDTypography>
        </MDBox>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            color="success"
            icon="star"
            name="Nilkamal Dancing Group"
            description="01 August 2022, at 04:30 AM"
            value="LKR 750"
          />
          <Transaction
            color="success"
            icon="star"
            name="Swarna Dancing Group"
            description="01 August 2022, at 04:30 AM"
            value="LKR 1,000"
          />
          <Transaction
            color="success"
            icon="star"
            name="Creative Tim Music Band"
            description="02 August 2022, at 04:30 AM"
            value="LKR 2,500"
          />
          <Transaction
            color="dark"
            icon="priority_high"
            name="Webflow Dancing Group"
            description="02 August 2022, at 04:30 AM"
            value="Pending"
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Transactions;
