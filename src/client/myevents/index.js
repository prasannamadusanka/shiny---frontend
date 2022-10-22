import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { Tabs } from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

import { useMaterialUIController, setDirection } from "context";
import { useEffect, useState } from "react";


// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import DataTable from "examples/Tables/DataTable";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import Event from "./event";
import API from '../../services/baseURL';



function MyEvents() {
  const [, dispatch] = useMaterialUIController();
  // const { sales, tasks } = reportsLineChartData;
  useEffect(() => {
    setDirection(dispatch, "client");

    return () => setDirection(dispatch, "ltr");
  }, []);




  const [value, setValue] = React.useState('1');

  const [events, setevents] = useState()
  useEffect(async () => {
    API.get(`client/viewevents`, {
      params: {
        user_id: localStorage.getItem('id')
      }
    })
      .then(res => {
        setevents(res.data.menus ? res.data.menus.map((item) => {
          return {
            'id': item.event_id,
            'label': <p>{item.date.split('T')[0]} - {item.type}</p>
          }

        }
        ) : console.log("sjjsj"))
        console.log("Your new array of modified objects here", data)
      })
      .catch(err => { console.log('Google api calendar error', err) })
  }, [])
  console.log(events)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  //const { columns: pColumns, rows: pRows } = TasksData();
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
            <TabList style={{ margin: '0px 25px', borderBottom: 'none' }} variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example" onChange={handleChange} aria-label="lab API tabs example">
              {
                events ? events.map(
                  (item, index) => {
                    // console.log(item)
                    return (

                      <Tab style={{ width: '500px', margin: '0px 10px', fontSize: '.9em', backgroundColor: 'InfoBackground', font: '10px', fontStyle: 'mute' }} label={item.label} value={item.id}></Tab>
                    )


                  }
                ) : console.log("dh")
              }

            </TabList>
          </Box>
          {
            events ? events.map(
              (item, index) => {
                console.log("item id")
                console.log(item.id)
                return (

                  <TabPanel value={item.id}><Event id={item.id}></Event></TabPanel>)


              }
            ) : console.log("dh")
          }
        </TabContext>
      </Box>
      <Footer />
    </DashboardLayout>
  );
}

export default MyEvents;
