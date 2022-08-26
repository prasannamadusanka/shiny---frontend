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


// Data



// Dashboard components
import View from "layouts/serviceproviders/components/View";
import Request from "layouts/serviceproviders/components/Request";

// @mui material components

import Divider from "@mui/material/Divider";
import MDButton from "components/MDButton";
// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components

import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components


import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/decor1.jpg";
import homeDecor2 from "assets/images/decor2.jpg";
import homeDecor3 from "assets/images/decor3.jpg";
import homeDecor4 from "assets/images/decor4.jpg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";

function Serviceprovider() {
  const [, dispatch] = useMaterialUIController();

  useEffect(() => {
    setDirection(dispatch, "manager");

    return () => setDirection(dispatch, "ltr");
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
     
        <MDBox p={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor1}
                label=""
                title="Dancing Team"
                
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "dark",
                  label: "",
                  
                }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor2}
                label=""
                title="Music Band"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "",
                }}
               
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor3}
                label=""
                title="Jayamangala Gatha"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "",
                }}
               
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <DefaultProjectCard
                image={homeDecor4}
                label=""
                title="Cake"
                action={{
                  type: "internal",
                  route: "/pages/profile/profile-overview",
                  color: "info",
                  label: "",
                }}
                
              />
            </Grid>
          </Grid>
        </MDBox>
        
        <MDBox>
          <Grid container spacing={3}>
          <Grid item xs={12} md={10}>
              <View />
            </Grid> 
           
          </Grid>
        </MDBox>

        
      </MDBox>
      <MDBox pt={8} pb={3} px={3}>
      <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={5}>
           New Service Provider Requests
          </MDTypography>
         
        </MDBox>
        <MDBox >
          <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
              <Request />
            </Grid> 
           
          </Grid>
          </MDBox>
        </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Serviceprovider;
