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
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";


// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
// Dashboard components


import DataTable from "examples/Tables/DataTable";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";


import Ownerreportscard from "examples/Cards/ProjectCards/Ownerreportscard";
import hotel from "assets/images/hotel.jpg";
import sundream from "assets/images/sundream.jpg"
import riverpark from "assets/images/riverpark.jpg"
import shinylakeside from "assets/images/shinylakeside.jpg"
import shinygarden from "assets/images/shinygarden.jpg"

// import homeDecor2 from "assets/images/home-decor-2.jpg";
// import homeDecor3 from "assets/images/home-decor-3.jpg";
// import homeDecor4 from "assets/images/home-decor-4.jpeg";



function Reports(){
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
       
        <Grid item xs={12} md={6} lg={12}>
               <MDBox mb={1.5}>
            
                              <VerticalBarChart
                  icon={{ color: "info", component: "leaderboard" }}
                  title="Events"
                  description="Day and night events"
                  chart={{
                    labels: ["Jan", "Feb", "March", "April", "May", "June"],
                    datasets: [{
                      label: "Sales by age",
                      color: "primary",
                      data: [15, 20, 12, 60, 20, 15],
                     
                    },
                    {
                      label: "Sales by ageS",
                      color: "info",
                      data: [15, 20, 12, 60, 20, 15],
                     
                    },],
                  }}
                />


               </MDBox>
          </Grid>
        
           <Grid item xs={12} md={6} lg={3}>
               <MDBox mb={1.5}>
              
                 <Ownerreportscard
                image={sundream}
                // label="Sunshine"
                title="SUNDREAM"
                profit="Profit = 10000"
                description="Profit rank = 1"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "secondary",
                  label: "view report",
                }}
                
              />

            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              
            <Ownerreportscard
                image={riverpark}
                // label="Sunshine"
                title="RIVER PARK"
                profit="Profit = 10000"
                description="Profit rank = 2"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view report",
                }}
                
              />

            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
            <Ownerreportscard
                image={shinylakeside}
                // label="Sunshine"
                title="SHINY LAKESIDE"
                profit="Profit = 10000"
                description="Profit rank = 3"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "secondary",
                  label: "view report",
                }}
                
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
            <Ownerreportscard
                image={shinygarden}
                // label="Sunshine"
                title="SHINY GARDEN"
                profit=" Profit = 10000"
                description="Profit rank = 4"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "view report",
                }}
                
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          
            <Grid item xs={12} md={6} lg={4}>
             
            <Grid item xs={12} md={6} lg={8}>
              <MDBox mb={3}>


                      
                {/* <ReportsLineChart
                  color="success"
                  title="daily sales"
                  description={
                    <>
                      (<strong>+15%</strong>) increase in today sales.
                    </>
                  }
                  date="updated 4 min ago"
                  chart={sales}
                /> */}
              </MDBox>
            </Grid>
            {/* {
               
             <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="completed tasks"
                  description="Last Campaign Performance"
                  date="just updated"
                  chart={tasks}
                />
              </MDBox>
            </Grid> } */}
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Reports;
