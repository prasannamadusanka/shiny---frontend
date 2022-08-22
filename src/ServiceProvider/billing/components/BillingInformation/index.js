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
import Bill from "layouts/billing/components/Bill";

function BillingInformation() {
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Payments
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Bill
            id="5001"
            eventDate="09/09/2022"
            due="SLR 35,000"
            paid="SLR 35,000"
            datePaid="03/10/2022"
          />
          <Bill
            id="5012"
            eventDate="24/09/2022"
            due="SLR 25,000"
            paid="SLR 25,000"
            datePaid="01/10/2022"
            noGutter
          />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
