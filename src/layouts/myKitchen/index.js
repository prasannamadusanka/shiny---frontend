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


import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";


// Data

import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/myKitchen/components/Projects";

function Dashboard() {
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={18} md={8} lg={3}>
            <MDBox mb={1.5}>
            <DefaultInfoCard
                    icon="coffee"
                    title="Event No 08"
                    description="Kitchen Item List"
                    value="Not Accepted"
                  />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
            <DefaultInfoCard
                    icon="umbrella"
                    title="Event No 12"
                    description="Ingrediant List"
                    value="Not Accepted"
                  />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
            <DefaultInfoCard
                    icon="coffee"
                    title="Event No 22"
                    description="Kitchen Item List"
                    value="Not Accepted"
                  />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
            <DefaultInfoCard
                    icon="coffee"
                    title="Event No 23"
                    description="Kitchen Item List"
                    value="Not Accepted"
                  />
            </MDBox>
          </Grid>
        </Grid>
        
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={9}>
              <Projects />
            </Grid>
           
            
          </Grid>
          
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
