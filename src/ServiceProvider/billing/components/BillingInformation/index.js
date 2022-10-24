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

import { useState, useEffect } from "react";
import * as React from "react";

// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "ServiceProvider/billing/components/Bill";

import { useMaterialUIController, setDirection } from "context";

import API from "../../../../services/baseURL";

export const getpaymentslist = async (event) => {
  const response = await API.get(`ServiceProvider/view_full_payments`);
  console.log(response); // response -> data -> menus -> 0 -> event_id
  console.log(response.data.menus);
  return response.data.menus;
};

export default function BillingInformation() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "ServiceProvider");

    return () => setDirection(dispatch, "ltr");
  }, []);

  const [payments, setpayments] = useState([
    {
      event_id: "",
      date: "",
      payment_notes: "",
      total_amount: "",
      proceed_date: "",
      package_price: "",
    },
  ]);
  useEffect(() => {
    getpaymentslist()
      .then((data) => {
        console.log(payments);
        console.log(data);
        setpayments(data);
        console.log(payments);
      })
      .catch((err) => {
        // console.log(err.error);
      }); // Had to use ; here.
  }, []);

  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Payments
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {/* <Bill
            id="5001"
            eventDate="09/09/2022"
            due="SLR 35,000"
            paid="SLR 35,000"
            datePaid="03/10/2022"
          /> */}
          {payments?.map((item) => (
            <Bill
              key={item.event_id}
              id={item.event_id}
              eventDate={item.date}
              due={item.package_price}
              paid={item.total_amount}
              datePaid={item.proceed_date}
              noGutter
            />
          ))}
        </MDBox>
      </MDBox>
    </Card>
  );
}
