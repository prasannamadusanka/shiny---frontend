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
import Transaction from "manager/event/components/Transaction";

function Pay() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Wedding Event 2022.07.08
        </MDTypography>
        <MDBox display="flex" alignItems="flex-start">
          <MDBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
              
            </Icon>
          </MDBox>
          <MDTypography variant="button" color="text" fontWeight="regular">
           Accepted
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox pt={3} pb={2} px={2}>
        <MDBox mb={2}>
          <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
            service subscriptions
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
            color="error"
            icon="add"
            name1="Menu Selection"
            description1="27 March 2022,at 12.30 PM"
            name2="Topaz"
            description2="2750*340"
            value="LKR 2,500"
          />
          <Transaction
            color="error"
            icon="add"
            name1="Reserve Service Providers"
            description1="27 March 2022,at 12.30 PM"
            name2="Jayamangala Gatha"
            description2="15,000*1"
            value="LKR 15,500"
          />
          <Transaction
            color="error"
            icon="add"
            name1="Reserve Service Providers"
            description1="27 March 2022,at 12.30 PM"
            name2="Jayamangala Gatha"
            description2="15,000*1"
            value="LKR 15,500"
          />
       
        
       
          
          
           </MDBox>
        </MDBox>
      
    </Card>
  );
}

export default Pay;
