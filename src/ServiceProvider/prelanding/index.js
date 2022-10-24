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
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook"; // Do not remove this - it causes white screen error!
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
// import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Overview page components
import Header from "layouts/prelanding/components/Header";
// import PlatformSettings from "layouts/prelanding/components/PlatformSettings";

// Data
// import profilesListData from "layouts/prelanding/data/profilesListData";

// Images
import homeDecor1 from "assets/images/service_provider/beachjg.jpg";
import homeDecor2 from "assets/images/service_provider/dance.jpg";
import homeDecor3 from "assets/images/service_provider/ashtaka1.jpg";
import homeDecor4 from "assets/images/service_provider/music1.jpg";

// import DashboardNavbar from "examples/Navbars/DashboardNavbar";

/*
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
*/
/*
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
*/

function Overview() {
  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
      <MDBox mb={2} />
      <Header>
        <MDBox mt={1} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="profile information"
                description="These are your account details"
                info={{
                  fullName: "D R Vishaka Vimansi",
                  mobile: "+94 (0)77 123 1234",
                  email: "drvvimansi@mail.com",
                  location: "No: 67/9, Galle Road, Dehiwala",
                }}
                social={[
                  {
                    link: "https://www.facebook.com/Shiny_Service_Providers/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                ]}
                action={{ route: ".", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={8}>
              <MDBox pt={2} lineHeight={1.25}>
                <MDTypography variant="h6" fontWeight="medium">
                  Your Services
                </MDTypography>
                <MDBox mb={0} mt={2}>
                  <MDTypography variant="button" color="text">
                    Go to the Home Page of each service
                  </MDTypography>
                </MDBox>
              </MDBox>
              <MDBox p={2}>
                <Grid container spacing={1}>
                  <Grid item xs={12} md={2} xl={6} p={1}>
                    <DefaultProjectCard
                      image={homeDecor1}
                      label="service 1"
                      title="Jayamangala Gatha"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "info",
                        label: "Go",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={2} xl={6} p={1}>
                    <DefaultProjectCard
                      image={homeDecor2}
                      label="service 2"
                      title="Dance Teams"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "info",
                        label: "Go",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={2} xl={6} p={1}>
                    <DefaultProjectCard
                      image={homeDecor3}
                      label="service 3"
                      title="Ashtaka"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "info",
                        label: "Go",
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={2} xl={6} p={1}>
                    <DefaultProjectCard
                      image={homeDecor4}
                      label="service 4"
                      title="Musical Bands"
                      action={{
                        type: "internal",
                        route: "/pages/profile/profile-overview",
                        color: "info",
                        label: "Go",
                      }}
                    />
                  </Grid>
                </Grid>
              </MDBox>
            </Grid>
            {/*
            <Grid item xs={12} xl={4}>
              <ProfilesList title="conversations" profiles={profilesListData} shadow={false} />
            </Grid>
            */}
          </Grid>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
