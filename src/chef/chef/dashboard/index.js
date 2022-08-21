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
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";

//calendar
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

import { useState } from "react";
import { Card, ImageList, ImageListItem } from "@mui/material";

import { Link } from "react-router-dom";

function Dashboard() {

  //for calendar
  const [date, setDate] = useState(new Date());

  const images = [

    {
      img: 'https://i0.wp.com/ratemybistro.co.uk/wp-content/uploads/2016/11/20161022_125954-Medium.jpg?ssl=1',
      title: 'Tomato basil',
    },
    {
      img: 'https://www.studiovolpi.com/uploads/casehistory/ACT.O/Kitchen_.jpeg',
      title: 'Sea star',
    },
    {
      img: 'https://th.bing.com/th/id/R.ecfc734d619d2ed16d96139b59ca2fed?rik=zBEGkAA%2bvcLBgg&pid=ImgRaw&r=0',
      title: 'Bike',
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDBox mb={3}>
        <ImageList sx={{ width: 1140, height: 160 }} cols={3} rowHeight={164}>
          {images.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        </MDBox>
        {/* <img src={bgImage} height="150" width={1140}></img> */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <Link to="/pendingpredictions">
                <ComplexStatisticsCard
                  color="error"
                  icon="star"
                  title="Pending Predictions"
                  count={2}
                  percentage={{
                    color: "success",
                    amount: "",
                    label: "immediate",
                  }}
                />
              </Link>
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <Link to="/eventchef">
                <ComplexStatisticsCard
                  icon="alarm"
                  title="Next Event"
                  count={15}
                  percentage={{
                    color: "success",
                    amount: "",
                    label: "hours",
                  }}
                />
              </Link>
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
              <Card>
                <p className='text-center'>
                  <span className='bold'>Selected Date:</span>{' '} {date.toDateString()}
                </p>
                <Calendar onChange={setDate} value={date}/>
                
              </Card>
            </Grid>
            <Grid xs={12} md={6} lg={6} container direction="column" >
              <Grid item xs={12}>
                <MDBox mt={3.3} ml={2}>
                <ProfileInfoCard
                  title="Wedding"
                  description="any special notice by chef"
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
                  action={{ route: "/event", tooltip: "Goto Event" }}
                  shadow={false}
                />
                </MDBox>
              </Grid>
              <Grid item xs={12}>
                <MDBox mt={3.5} ml={2}>
                  <ProfileInfoCard
                    title="Birthday"
                    description="any notice by chef of this event"
                    info={{
                      fullName: "Mary Andrew",
                      mobile: "(+94) 856 234 123",
                      email: "maryandrew@mail.com",
                      address: "Temple junction,Mathara",
                    }}
                    social={[
                      {
                        link: "https://www.facebook.com/CreativeTim/",
                        icon: <FacebookIcon />,
                        color: "facebook",
                      },
                    ]}
                    action={{ route: "/event", tooltip: "Goto Event" }}
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
