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
import MDProgress from "components/MDProgress";
import MDButton from "components/MDButton";
// import MDButton from "components/MDButton";

// Billing page components
import Transaction from "chef/incomplete ceased event/components/Transaction";

function Item() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Kitchen Ingrediant List
        </MDTypography>
        <MDBox display="flex" alignItems="flex-start">
          <MDBox color="text" mr={0.5} lineHeight={0}>
            <Icon color="inherit" fontSize="small">
            </Icon>
          </MDBox>
          <MDTypography variant="button" color="text" fontWeight="regular">
           Ceased
          </MDTypography>
        </MDBox>
      </MDBox>
       <MDBox pt={3} pb={2} px={2}>
        <MDBox
          component="ul"
          display="flex"
          flexDirection="column"
          p={0}
          m={0}
          sx={{ listStyle: "none" }}
        >
          <Transaction
            name="pumkin"
            description="kg"
            orderedQty="10 kg"
          />
          <Transaction
            name="potato"
            description="kg"
            orderedQty="15 kg"
          />
          <Transaction
            name="beans"
            description="kg"
            orderedQty="5 kg"
          />
          <Transaction
            name="carrot"
            description="kg"
            orderedQty="8 kg"
          />
          <Transaction
            name="tomato"
            description="kg"
            orderedQty="1"
          />
          <Transaction
            name="apple"
            description="kg"
            orderedQty="1 kg"
          />
          <Transaction
            name="orange"
            description="kg"
            orderedQty="2 kg"
          />
          <Transaction
            name="pinaple"
            description="kg"
            orderedQty="3 kg"
          />
        </MDBox>
      </MDBox>
      {/* <MDBox sx={{ width: '35%',  justifyContent: 'flex-end'}}> */}
      <MDButton variant="contained" color="info" size="medium" fullwidth>
        Send
      </MDButton>
    </Card>
  );
}

export default Item;
