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

// Dashboard components
import View from "eventPlanner/serviceproviders/components/View";

import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";

// Images
import homeDecor1 from "assets/images/eventplanner/decor1.jpg";
import homeDecor2 from "assets/images/eventplanner/decor2.jpg";
import homeDecor3 from "assets/images/eventplanner/decor3.jpg";
import homeDecor4 from "assets/images/eventplanner/decor4.jpg";

//
import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";

function Serviceprovider() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "eventPlanner");

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
                  color: "light",
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
                  color: "light",
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
                  color: "light",
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
                  color: "light",
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
      <Footer />
    </DashboardLayout>
  );
}

export default Serviceprovider;
