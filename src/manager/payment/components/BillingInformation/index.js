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
import { useState, useEffect } from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "manager/payment/components/Bill";
import { useMaterialUIController, setDirection } from "context";

import API from "../../../../services/baseURL";


export const getnewpay = async pay => {
  const paynow = await API.get('manager/view_paid_invoice');
  console.log(response.data.invoices);
  return response.data.invoices;
};





function BillingInformation() {

  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "manager");

    return () => setDirection(dispatch, "ltr");
  }, []);
  

  const [newpay, setevent] = useState([{ event_id: "", invoice_id: "", total_amount: ""},]);
  useEffect(() => {
    getnewpay().then(data => {
      console.log(data)
      setevent(data)
        console.log(newpay)
    }).catch(err => {
      
    })
  }, []);

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Due Payments
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
        {newpay?.map(function (item) {
          //return (
            <Bill
              name={item.event_id}
              amount={item.total_amount}
              event={item.invoice_id}
              date="2022-07-11" />
          //);
        })}
         
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
