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

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// Data
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";

function Dashboard() {
  const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="alarm"
                title="Next Event"
                count={2}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "hours",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="star"
                title="New Events"
                count={15}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="secondary"
                icon="list"
                title="Pending Ingredients"
                count={20}
                percentage={{
                  color: "error",
                  amount: "",
                  label: "now",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="star"
                title="Remaining Events"
                count={11}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "this week",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
      
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <Projects />
            </Grid>
            <Grid xs={12} md={6} lg={6} container direction="row" rowspacing={1}>
              <Grid item xs={12}>
                <MDBox mt={3.3} ml={2}>
                <ProfileInfoCard
                  title="Wedding"
                  description="special notice by chef"
                  info={{
                    fullName: "Alec M. Thompson",
                    mobile: "(+94) 123 548 123",
                    email: "alecthompson@mail.com",
                    address: "Gold street,Hikkaduwa",
                  }}
                  social={[
                    {
                      link: "https://www.facebook.com/CreativeTim/",
                      icon: <FacebookIcon />,
                      color: "facebook",
                    },
                  ]}
                  action={{ route: "", tooltip: "Goto Event" }}
                  shadow={false}
                />
                </MDBox>
              </Grid>
              <Grid item xs={12}>
              <MDBox mt={3.5} ml={2}>
                <ProfileInfoCard
                  title="Birthday"
                  description="special notice by chef"
                  info={{
                    fullName: "Alec M. Thompson",
                    mobile: "(+94) 856 234 123",
                    email: "alecthompson@mail.com",
                    address: "Temple junction,Mathara",
                  }}
                  social={[
                    {
                      link: "https://www.facebook.com/CreativeTim/",
                      icon: <FacebookIcon />,
                      color: "facebook",
                    },
                  ]}
                  action={{ route: "", tooltip: "Goto Event" }}
                  shadow={false}
                />
                </MDBox>
              </Grid>
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
