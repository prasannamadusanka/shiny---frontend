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
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
// import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
// import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
// import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
// import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "ServiceProvider/preview_blog/components/OrdersOverview";
import OrdersOverview1 from "ServiceProvider/preview_blog/components/OrdersOverview1";
import OrdersOverviewA from "ServiceProvider/preview_blog/components/OrdersOverviewA";

import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";

function Calendar() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "ServiceProvider");

    return () => setDirection(dispatch, "ltr");
  }, []);
  // const { sales, tasks } = reportsLineChartData; // importing the charts with their values

  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <MDBox py={1}>
        <MDBox>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} lg={6}>
              <OrdersOverviewA /> {/* =Analyze */}
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <OrdersOverview /> {/* =Calendar & numbers */}
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <OrdersOverview1 /> {/* =Details */}
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Calendar;
