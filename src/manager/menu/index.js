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
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";


// Data

import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/menu/components/Projects";
import Proj from "layouts/menu/components/Proj";
import Header from "layouts/menu/components/Header";
//import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
//import Calender from "layouts/dashboard/components/calender";
function Dashboard() {
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
      <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
        <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Create New Menu
                </MDTypography>
              </MDBox>
      <MDBox pt={3}>
      <MDInput type="text" label="Menu Name" value="" />
      
      </MDBox>
      <MDBox pt={3}>
      <MDInput type="text" label="Food" value="" />
      <MDInput type="number" label="quantity" value="" />
      <MDButton variant="gradient" color="dark"  iconOnly>
      
  <Icon>add</Icon>
        </MDButton>
      </MDBox>
      <MDBox pt={3}>
      <MDButton variant="gradient" color="dark" size="medium">Done</MDButton>
      </MDBox>
      </Card>
      </Grid>
      </Grid>
      </MDBox>
      <MDBox py={3}>
        
        <Header>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={5}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <Proj />
            </Grid><Grid item xs={12} md={6} lg={5}>
              <Projects />
            </Grid><Grid item xs={12} md={6} lg={5}>
              <Projects />
            </Grid>
            
          </Grid>
        </MDBox>
        </Header>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
