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
import ProfileInfoCard2 from "examples/Cards/InfoCards/ProfileInfoCard2";
import ProfilesList from "examples/Lists/ProfilesList";

// Overview page components
import Header from "chef/event/components/Header";
import Projects from "eventPlanner/event/components/Projects";

// Data
import Item from "chef/event/components/items";
//calender
import Calander from "eventPlanner/event/components/Calender";

// Data
import profilesListData from "chef/event/components/serviceproviders";

//
import { useMaterialUIController, setDirection } from "context";
import { useEffect, useState } from "react";

//
import API from '../../services/baseURL';

export const getevent = async event => {
  const response = await API.get('chef/view_full_event',{params:{"event_id":3}});
  console.log(response.data.event)
  return response.data.event;
};


function event() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "chef");

    return () => setDirection(dispatch, "ltr");
  }, []);


  const [generalevent, setevent] = useState([]);
  useEffect(() => {
    getevent().then(data => {
      console.log(data)
      setevent(data)
      console.log(generalevent)
    }).catch(err => {
      
    })
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
          {generalevent.map((item,index)=>{
            return(
            <MDBox sx={{ width: "30%" }} mr={30} ml={2}>
              <ProfileInfoCard2
                title={item.type}
                info={{
                  name: item.name,
                  mobile: item.contact_number,
                  email: item.email,
                  date:item.date,
                  pax: item.pax,
                  menu: item.menu_name,
                  startTime: item.start_time,
                  endTime: item.end_time,
                  id:item.event_id,
                }}
                action={{ route: "", tooltip: "" }}
                shadow={false}
              />
            </MDBox>
            );
          })}
            <MDBox sx={{ width: "45%" }}>
              <ProfilesList title="Service Providers" profiles={profilesListData} shadow={false} />
            </MDBox>
            </Grid>

            <Grid display={"flex"} xs={12}>
              <MDBox sx={{ width: "50%" }} ml={2} mr={5} >
                <Item />
              </MDBox> 
              {/* <MDBox sx={{ width: "50%" }}> 
                <Projects />
              </MDBox> */}
            </Grid>
          </Grid>
        </MDBox>
      </Header>
      
      <Footer />
    </DashboardLayout>
  );
}

export default event;
