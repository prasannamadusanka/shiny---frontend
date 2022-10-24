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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
//import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";

import BillingInformation from "manager/payment/components/BillingInformation";
import Transactions from "manager/payment/components/Transactions";
import { useState, useEffect } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

//import BasicLayout from "layouts/authentication/components/BasicLayout";
import { useMaterialUIController, setDirection } from "context";

import API from "../../services/baseURL";
export const getbookingslist = async (event) => {
  const response = await API.get(`http://localhost:3001/manager/view_invoices`);
  console.log(response); // response -> data -> menus -> 0 -> event_id
  console.log(response.data.invoices);
  return response.data.invoices;
};





function Billing() {
  const [, dispatch] = useMaterialUIController();

  useEffect(() => {
    setDirection(dispatch, "manager");

    return () => setDirection(dispatch, "ltr");
  }, []);

  const [bookings, setbookings] = useState([
    { event_id: "", serviceprovider_id: "", total_amount: "" },
  ]);
  useEffect(() => {
    getbookingslist()
      .then((data) => {
        console.log(bookings);
        console.log(data);
        setbookings(data);
        console.log(bookings);
      })
      .catch((err) => {
        // console.log(err.error);
      }); // Had to use ; here.
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
      <MDBox mb={3}>
          <Grid container spacing={3}>
           
            
      <Grid item xs={12} lg={8}>
  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 0 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Service Provider Id</TableCell>
            <TableCell align="left">Event Id</TableCell>
            <TableCell align="left">Total Amount</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings?.map((item) => (
            <TableRow
              key={"3"}
              // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left" key={item.event_id}>
                {item.event_id}
              </TableCell>
              <TableCell align="left" key={item.serviceprovider_id}>
                {item.serviceprovider_id}
              </TableCell>
              <TableCell align="left" key={item.total_amount}>
                {item.total_amount}
              </TableCell>
              <TableCell align="left">
              <MDButton variant="gradient" color="dark" halfWidth type="submit">
                 Pay
               </MDButton>
              </TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  

            </Grid>
          </Grid>
        </MDBox>



    
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
