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



// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";


// Overview page components
import Header from "manager/event/components/Header";
import Projects from "manager/dashboard/components/Projects";

// Data
import Item from "manager/event/components/items";
import Pay from "manager/event/components/Pay";
//calender
import OrdersOverview from "manager/event/components/Calender";
import OrdersOverview1 from "manager/event/components/Calender1";
import { Payment } from "@mui/icons-material";

import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";


function Overview() {
  const [, dispatch] = useMaterialUIController();

  useEffect(() => {
    setDirection(dispatch, "manager");

    return () => setDirection(dispatch, "ltr");
  }, []);
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox>
          <Grid container spacing={3}>
              <OrdersOverview1/>
          </Grid>
        </MDBox>
        <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4}>
            <ProfileInfoCard
                title="Event Description"
                description=""
                info={{
                  Event: "Wedding",
                  Date: "2022-07-08",
                  Client: "Kamal Perera",
                  Advance: "LKR 15,000 PAID",
                  Payment:"LKR 200,000 PAID"
                }}
                social={[
                 
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="Selected Service Providers"
                description=""
                info={{
                  Dancing_Group: "Alec M. Thompson",
                  Music_Band: "Shine",
                  Jayamangala_Gatha: "Swarna",
                  Cake: "Amana",
                }}
                social={[
                  
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
            <Item />
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <Projects />
            </Grid>
            
            <Grid item xs={12} xl={6}>
            <Pay />
            </Grid>
          </Grid>
        </MDBox>
        
        
      </Header>
      
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
