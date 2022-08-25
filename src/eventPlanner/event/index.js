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
import Header from "chef/event/components/Header";
import Projects from "chef/event/components/Projects";

// Data
import Item from "chef/event/components/items";
//calender
import OrdersOverview from "chef/event/components/Calender";

// Data
import profilesListData from "chef/event/components/serviceproviders";

//
import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";

function event() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "eventPlanner");

    return () => setDirection(dispatch, "ltr");
  }, []);
  


  return (
    <DashboardLayout>
      <DashboardNavbar />
        <MDBox mt={3}>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} md={6} lg={6}>
              <OrdersOverview/>
            </Grid> */}
          </Grid>
        </MDBox>
        <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
          <Grid display={"flex"} xs={12}>
            <MDBox sx={{ width: "30%" }} mr={30} ml={2}>
              <ProfileInfoCard
                title="Event Description"
                description=""
                info={{
                  Date: "2022-07-08",
                  Start: "08.00AM",
                  End:"03.00PM",
                  Client: "Kamal Perera",
                  Pax:500,
                  Theme:"greeenary"
                }}
                social={[
                 
                ]}
                action={{ route: "", tooltip: "" }}
                shadow={false}
              />
            </MDBox>
            <MDBox sx={{ width: "45%" }}>
              <ProfilesList title="Service Providers" profiles={profilesListData} shadow={false} />
            </MDBox>
            </Grid>

            <Grid display={"flex"} xs={12}>
              {/* <MDBox sx={{ width: "50%" }} ml={2} mr={5} >
                <Item />
              </MDBox>  */}
              <MDBox sx={{ width: "50%" }}> 
                <Projects />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        
        
      </Header>
      
      <Footer />
    </DashboardLayout>
  );
}

export default event;
