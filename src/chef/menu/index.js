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

// Dashboard components
import Projects from "chef/menu/components/Projects";
import Proj from "chef/menu/components/Proj";
import Header from "chef/menu/components/Header";
//import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
//import Calender from "layouts/dashboard/components/calender";


//
import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";


function Dashboard() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "chef");

    return () => setDirection(dispatch, "ltr");
  }, []);
  
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
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
