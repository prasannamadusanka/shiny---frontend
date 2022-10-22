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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "client/billing/components/BillingInformation";
import Transactions from "client/billing/components/Transactions";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import API from '../../services/baseURL';

import { useMaterialUIController, setDirection } from "context";
import { useEffect, useState } from "react";

function Billing() {
  const [, dispatch] = useMaterialUIController();
  //const { sales, tasks } = reportsLineChartData;
  useEffect(() => {
    setDirection(dispatch, "client");

    return () => setDirection(dispatch, "ltr");
  }, []);
  const [bills, setbills] = useState()
  useEffect(async () => {
    API.get(`client/total`, {
      params: {
        user_id: localStorage.getItem('id')
      }
    })
      .then(res => {
        console.log(res)
        setbills(res.data.food1 ? res.data.food1.map((item) => {
          console.log(item.date)
          const newdate = item.date.split('T')[0]
          console.log("newddate", newdate)

          var dt = new Date(newdate);
          dt.setDate(dt.getDate() - 14);
          console.log(dt)
          let today = new Date()
          console.log(
            today.toLocaleString('en-US', {
              timeZone: 'America/New_York',
            }),
          );
          const todaynew = today.toLocaleString('en-US', {
            timeZone: 'America/New_York',
          }).split(',')[0]
          const dueDate = today.toLocaleString('en-US', {
            timeZone: 'America/New_York',
          }).split(',')[0]
          console.log(todaynew)
        
          if (todaynew > dueDate) {
            const x = item.type + " event(" + `${item.date}` + ")"
            const remaining = `${item.subsciption}` - `${item.advance}`
            console.log("x", x)
            return {
              'id':`${item.event_id}`,
              'type': x,
              'total': `${item.subsciption}`,
              'advance': `${item.advance}`,
              'remaining': `${item.remaining}`,
              'due': dt,




            }
          }
          else {
            const x = item.type + " event(" + `${item.date}` + ")"
            const remaining = `${item.subsciption}` - `${item.advance}`
            console.log("x", x)
            return {
              'id':`${item.event_id}`,
              'type': x,
              'total': `${item.subsciption}`,
              'advance': `${item.advance}`,
              'remaining': `${item.remaining}`,
              'due': "-",





            }
          }


        }
        ) : console.log("sjjsj"))
        console.log("Your new array of modified objects here", data)
      })
      .catch(err => { console.log('Google api calendar error', err) })
  }, [])

  console.log("ncnc", bills)

  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
              <DefaultInfoCard
                icon="restaurant_menu"
                title="Food and Beverages"
                description="Upcoming event"
                value="Rs.225.00k"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <DefaultInfoCard
                icon="local_shipping"
                title="Outside Services"
                description="Upcoming event"
                value="Rs.22.00k"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <DefaultInfoCard
                icon="local_bar"
                title="Bar services"
                description="Upcoming event"
                value="Rs.20.00k"
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <DefaultInfoCard
                icon="trending_down"
                title="Total Amount"
                description="Upcoming event"
                value="Rs.545.00k"
                dueDate="2022.11.10"
              />
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation trans={bills} />
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
