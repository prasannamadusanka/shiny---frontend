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
import MDButton from "components/MDButton";

// Billing page components
import Invoice from "layouts/billing/components/Invoice";

function Invoices() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={2} px={2} display="box" justifyContent="left" alignItems="left">
        <MDBox pt={2} px={0} display="flex" justifyContent="left" alignItems="left">
          <MDTypography variant="h6" fontWeight="medium" px={0}>
            To be paid...
          </MDTypography>
        </MDBox>
        <MDBox pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center">
          <MDTypography variant="body2" fontWeight="small" fontSize="1">
            Sort by:
          </MDTypography>
          <MDButton variant="outlined" color="info" size="small">
            DATE
          </MDButton>
          <MDButton variant="outlined" color="info" size="small">
            RATE
          </MDButton>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          <Invoice date="20/09/2022" id="5010" price="SLR 35,000" />
          <Invoice date="10/09/2022" id="5003" price="SLR 25,000" />
          <Invoice date="26/09/2022" id="5016" price="SLR 25,000" />
          <Invoice date="12/09/2021" id="5005" price="SLR 35,000" />
          <Invoice date="02/01/2022" id="5020" price="SLR 25,000" noGutter />
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Invoices;
