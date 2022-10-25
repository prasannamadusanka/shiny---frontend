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
import { useState, useEffect } from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";

// Billing page components
import Transaction from "layouts/billing/components/Transaction";
import { useMaterialUIController, setDirection } from "context";

import API from "../../../../services/baseURL";

export const getpayed = async pay => {
  const paynow = await API.get('http://localhost:3001/manager/view_paid_invoice');
  console.log(response.data.menus);
  return response.data.menus;
};






function Transactions() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "manager");

    return () => setDirection(dispatch, "ltr");
  }, []);
  

  const [payed, setevent] = useState([{ event_id: "",total_amount: ""}]);
  useEffect(() => {
    getpayed().then(data => {
      console.log(data)
      setevent(data)
        console.log(payed)
    }).catch(err => {
      
    })
  }, []);




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
          {payed.map((item)=>{
               
          <Transaction
            color="success"
            icon="star"
            name={item.event_id}
            description={item.total_amount}
            value="LKR 2,500"
          />
          
                
              })}
          
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
          
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default Transactions;
