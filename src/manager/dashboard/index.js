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

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";




// Data

import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
//import Calender from "layouts/dashboard/components/calender";
function Dashboard() {
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={18} md={8} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="event"
                count="08"
                title="July"
                description="Pax : 150,000 LKR"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "",
                  description: "Pax : 150,000  * * * * * * * * * * * * Client : Nimal Perera * * * * * * * * Event : Wedding * * * * * * * * * * * Contact : 0762846523 * * * * * * *  Menu : 05  * * * * * * * * * * * * *",
                  }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="event"
                title="July"
                count="18"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "",
                  description: "Pax : 150,000  * * * * * * * * * * * * Client : Nimal Perera * * * * * * * * Event : Wedding * * * * * * * * * * * Contact : 0762846523 * * * * * * *  Menu : 05  * * * * * * * * * * * * *",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="event"
                title="July"
                count="21"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "",
                  description: "Pax : 150,000  * * * * * * * * * * * * Client : Nimal Perera * * * * * * * * Event : Wedding * * * * * * * * * * * Contact : 0762846523 * * * * * * *  Menu : 05  * * * * * * * * * * * * *",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="event"
                title="July"
                count="22"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "",
                  description: "Pax : 150,000  * * * * * * * * * * * * Client : Nimal Perera * * * * * * * * Event : Wedding * * * * * * * * * * * Contact : 0762846523 * * * * * * *  Menu : 05  * * * * * * * * * * * * *",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={7}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <OrdersOverview/>
            
            </Grid>
            
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
