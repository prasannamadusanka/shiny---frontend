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
import * as React from 'react';
import Grid from "@mui/material/Grid";
import { useMaterialUIController, setDirection } from "context";
import { useEffect,useState } from "react";
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from 'react-select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

//import StripeCheckout from "react-stripe-checkout";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import StripeCheckout from "react-stripe-checkout";
import MDInput from 'components/MDInput';

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";
import API from '../../services/baseURL';


// Dashboard components
import Projects from "client/dashboard/components/Projects";
import OrdersOverview from "client/dashboard/components/OrdersOverview";
import { setLayout } from "context";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

function Dashboard() {

  const [data, setdata] = useState()
  console.log(localStorage.getItem('id'))
 

  
  const [, dispatch] = useMaterialUIController();
  //const { sales, tasks } = reportsLineChartData;
  useEffect(() => {
    setDirection(dispatch, "client");

    return () => setDirection(dispatch, "ltr");
  }, []);


  const { sales, tasks } = reportsLineChartData;
  const options=[
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
 
 
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  async function handleToken(token, addresses) {
    console.log(token)
   }
  const x=40000;

  
  const [eventCount,setEventCount] = useState()
  const [billTotal,setbillTotal] = useState()
  const [advanceTotal,setadvanceTotal] = useState()

  var date = new Date();
  console.log(date)
  var curr_date = date.getDate();
   useEffect(async() => {
    API.get(`client/getEventCount`,{
      params:{
        user_id:localStorage.getItem('id')
      }
    })
      .then(res => {
        console.log("vdbv",res)
        setEventCount(res.data.menus[0].eventCount)
      console.log("Your new array vbjbvof modified objects here", data)
    })

  }, [])
  useEffect(async() => {
    API.get(`client/getBillTotal`,{
      params:{
        user_id:localStorage.getItem('id')
      }
    })
      .then(res => {
        console.log("vdbv",res)
        setbillTotal(res.data.menus[0].amount)
      console.log("Your new array vbjbvof modified objects here", data)
    })

  }, [])
  useEffect(async() => {
    API.get(`client/getAdvanceotal`,{
      params:{
        user_id:localStorage.getItem('id')
      }
    })
      .then(res => {
        console.log("vdbv",res)
        setadvanceTotal(res.data.menus[0].amount)
      console.log("Your new array vbjbvof modified objects here", data)
    })

  }, [])
console.log("chdj",advanceTotal)
  return (
    <DashboardLayout>
      <DashboardNavbar />
      
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Upcoming Events"
                count={eventCount}
                percentage={{
                  color: "success",
                  amount: "3",
                  label: "events in this year",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Events Still Pending"
                count={billTotal}
                percentage={{
                  color: "success",
                  amount: "13k",
                  label: "Have to pay",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Total Bill Amount"
                count={billTotal}
                percentage={{
                  color: "success",
                  amount: "+4%",
                  label: "upcoming event",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Total payments"
                count={advanceTotal}
                percentage={{
                  color: "success",
                  amount: "2022.10.12",
                  label: "- Last advance",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
   
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview id={localStorage.getItem('id')} />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
 
}

export default Dashboard;
