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
import { Link } from "react-router-dom";

import Grid from "@mui/material/Grid";
import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import MicNoneIcon from '@mui/icons-material/MicNone';
import PartyModeIcon from '@mui/icons-material/PartyMode';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
//import person from "assets/images/home-decor-1.jpg";
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";


// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDAvatar from "components/MDAvatar";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";


// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import homeDecor1 from "assets/images/events/waruna.jpg";
import denon from "assets/images/events/denon.jpg";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { ListItemButton } from "@mui/material";
import Headphones from "@mui/icons-material/Headphones";
import LocalFireDepartment from "@mui/icons-material/LocalFireDepartment";

function refreshMessages() {
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return Array.from(new Array(50)).map(
    () => messageExamples[getRandomInt(messageExamples.length)],
  );
}

function Services() {
  //const { sales, tasks } = reportsLineChartData;

  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [messages, setMessages] = React.useState(() => refreshMessages());

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    setMessages(refreshMessages());
  }, [value, setMessages]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <SimpleBlogCard

                title="My Bookings"
                description=""
                action={{
                  type: "internal",
                  route: "/somewhere",
                  color: "info",
                  label: "check out services"
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="navigation"
                title="Complementary services"
                count="3"
                percentage={{
                  color: "success",
                  amount: "2",
                  label: "Remaining",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="explore"
                title="All Requested services"
                count="3"
                percentage={{
                  color: "success",
                  amount: "1",
                  label: "pending",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="error"
                icon="explore"
                title="Total Amount for services"
                count="10k"
                percentage={{
                  color: "success",
                  amount: "2022.10.12",
                  label: "- Last advance",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>


        <Box sx={{ pb: 7 }} ref={ref}>
          <CssBaseline />
          <List>
            {messages.map(({ primary, secondary, person, action }, index) => (
              <MDBox key={person + index} component="li" display="flex" alignItems="center" py={1} mb={1}>
                <MDBox mr={2}>
                  <MDAvatar src={person} alt="something here" shadow="md" />
                </MDBox>
                <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
                  <MDTypography variant="button" fontWeight="medium">
                    {primary}
                  </MDTypography>
                  <MDTypography variant="caption" color="text">
                    {secondary}
                  </MDTypography>
                </MDBox>
                <MDBox ml="auto">
                  {action.type === "internal" ? (
                    <MDButton component={Link} to={action.route} variant="text" color="info">
                      {action.label}
                    </MDButton>
                  ) : (
                    <MDButton
                      component="a"
                      href={action.route}
                      target="_blank"
                      rel="noreferrer"
                      variant="text"
                      color={action.color}
                    >
                      {action.label}
                    </MDButton>
                  )}
                </MDBox>


              </MDBox>
            ))}
          </List>
          <Paper sx={{ position: 'fixed', bottom: 0, left: '20%', right: 0 }} elevation={3}>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            >
              <BottomNavigationAction label="Poruwa Ashtaka" icon={<MicNoneIcon />} />
              <BottomNavigationAction label="Jayamangala" icon={<FavoriteIcon />} />
              <BottomNavigationAction label="Dancing teams" icon={<PartyModeIcon />} />
              <BottomNavigationAction label="Music" icon={<Headphones />} />
              <BottomNavigationAction label="Fireworks" icon={<LocalFireDepartment />} />
              <BottomNavigationAction label="Milk fountain" icon={<ArchiveIcon />} />
            </BottomNavigation>
          </Paper>
        </Box>


      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

const messageExamples = [
  {
    primary: 'Porua ashtaka - Waruna managala mandiraya',
    secondary: "Waruna Mangala Mandiraya Provide Sri Lankan Best Ashtaka",
    person: homeDecor1,
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Book now",
    },
  },
  {
    primary: 'Ultra D.J Music package - Denon Music Enternaitment',
    secondary: "THE BEST ENTERTAINMENT IN DOWN SOUTH ",
    person: denon,
    action: {
      type: "internal",
      route: "/pages/profile/profile-overview",
      color: "info",
      label: "Book now",
    },
  },
];

export default Services;
