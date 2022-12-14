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
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "ServiceProvider/chats/components/OrdersOverview";
// Components
import ProfilesList from "examples/Lists/ProfilesList";
// Data
import profilesListData from "ServiceProvider/chats/data/profilesListData";

import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";

function Chats() {
  // const { sales, tasks } = reportsLineChartData; // importing the charts with their values
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "ServiceProvider");

    return () => setDirection(dispatch, "ltr");
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} xl={7}>
            <ProfilesList title="conversations" profiles={profilesListData} shadow={false} />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrdersOverview /> {/* =Chatting */}
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Chats;
