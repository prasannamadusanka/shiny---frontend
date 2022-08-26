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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "layouts/payment/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Due Payments
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            name="Nilkamal Dancing Group"
            amount="LKR 11,999"
            event="12"
            date="2022-07-11"
          />
          <Bill
             name="Nilkamal Dancing Group"
             amount="LKR 51,250"
             event="45"
             date="2022-07-10"
          />
          <Bill
            name="Nilkamal Dancing Group"
            amount="LKR 12,000"
            event="47"
            date="2022-07-05"
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
