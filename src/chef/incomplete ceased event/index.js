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
import ProfilesList from "examples/Lists/ProfilesList";

// Overview page components
import Header from "chef/incomplete ceased event/components/Header";

// Data
import Item from "chef/incomplete ceased event/components/items";

//
import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";


function event() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "chef");

    return () => setDirection(dispatch, "ltr");
  }, []);
  
  return (
    <DashboardLayout>
      <DashboardNavbar />
        <MDBox mt={3}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} md={6} lg={6}>
              <Calander/>
            </Grid> */}
          </Grid>
        </MDBox>
        <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
          <Grid display={"flex"} xs={12}>
            <MDBox sx={{ width: "50%" }} ml={2} mr={5} >
              <Item />
            </MDBox>
            <MDBox sx={{ width: "30%" }} mr={30} ml={2}>
              <ProfileInfoCard
                title="Event Description"
                description=""
                info={{
                  Date: "2022-07-08",
                  Client: "Kamal Perera",
                  Pax:500,
                  Menue:"Emarald"
                }}
                social={[
                 
                ]}
                action={{ route: "", tooltip: "" }}
                shadow={false}
              />
            </MDBox>
            </Grid>
            <Grid display={"flex"} xs={12}>
              
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      
      <Footer />
    </DashboardLayout>
  );
}

export default event;
