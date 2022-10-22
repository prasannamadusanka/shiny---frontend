import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDInput from "components/MDInput";
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import axios from 'axios';

//import routes from "routes";
import './index.css'

import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import { Grid, Typography } from "@mui/material";

import DefaultInfoCard from "examples/Charts/MDevent";
import DataTable from "examples/Tables/DataTable";

import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";
import PieChart from "examples/Charts/PieChart";
import authorsTableData from "layouts/tables/data/authorsTableData";
import eventTableData from "./eventTableData"
import Select from "react-select";
import API from '../../services/baseURL';

import { NewsHeaderCard, ProductCard, UserCard } from 'react-ui-cards';
import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";

const EventSchedule = () => {

  const [, dispatch] = useMaterialUIController();
  //const { sales, tasks } = reportsLineChartData;
  useEffect(() => {
    setDirection(dispatch, "client");

    return () => setDirection(dispatch, "ltr");
  }, []);

  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = eventTableData();
  console.log(pRows)
  const options = [
    {value:'jdjd' , label:'select event'},
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const [formValues, setFormValues] = useState([{ name: "", email: "" }])

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", email: "" }])
  }

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  }

  const [events,setevents] = useState()
  useEffect(async() => {
    API.get(`client/viewevents`,{params:{
      user_id:localStorage.getItem('id')
  }})
      .then(res => {
        setevents(res.data.menus?res.data.menus.map((item) => {
            return {
              'value' : item.event_id,
              'label' : <p>{item.date.split('T')[0]} - {item.type}</p>
            }
        
        }
        ):console.log("sjjsj"))
      console.log("Your new array of modified objects here", data)
    })
    .catch(err => { console.log('Google api calendar error', err) })
  }, [])


  console.log("modi")
 
  const [eventId, seteventId] = useState(101)

  const changeeventId=(e)=>{
    seteventId(e.value)
  }
  

  
  const [data, setdata] = useState()

  //
  useEffect(async() => {
    API.get(`client/viewSchedule`,{
      params:{
        event_id:eventId
      }
    })
      .then(res => {
        setdata(res.data.menus?res.data.menus.map((item) => {
            return {
              "event": <p>{item.start_time}</p>,
              "start": item.start_time,
              "end": item.start_time,
              "status": item.start_time,
              "completion": <p>{item.start_time}</p>,
              "action": <p>{item.start_time}</p>,
            }
        
        }
        ):console.log("sjjsj"))
      console.log("Your new array of modified objects here", data)
    })
    .catch(err => { console.log('Google api calendar error', err) })
  }, [])
  
  
  //

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox py={3} >
        <Grid container spacing={3} >
          <Grid item xs={4} >
            <MDBox mb={1.5}>
              <SimpleBlogCard

                title="Shedule your event"
                description="Still not send you event details to us! hurry up"
                action={{
                  type: "internal",
                  route: "/client/eventSchedule/eventForm",
                  color: "info",
                  label: "Send details"
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={4} >
            <MDBox mb={1.5}>
              <DefaultInfoCard
                icon="ArrowBack"
                title="Completed"
                description="Home coming event 2022.10.12"
                value="10 Tasks"
              />
            </MDBox>
          </Grid>
          <Grid item xs={4} >
            <MDBox mb={1.5}>
              <DefaultInfoCard
                icon="forward"
                title="Remaining"
                description="Home coming event 2022.10.12"
                value="5 Tasks"
              />
            </MDBox>
          </Grid>



          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <div style={{ float: 'left' }}>
                  <MDTypography variant="h6" color="white">
                    Projects Table
                  </MDTypography>
                </div>
                <div style={{ float: 'right' }}>
                <Select  onChange={(e)=>{
                  seteventId(e.value)
                  console.log("event",eventId)
                     API.get(`client/viewSchedule`,{
      params:{
        event_id:eventId
      }
    })
      .then(res => {
        setdata(res.data.menus?res.data.menus.map((item) => {
            return {
              "event": <p>{item.start_time}</p>,
              "start": item.start_time,
              "end": item.start_time,
              "status": item.start_time,
              "completion": <p>{item.start_time}</p>,
              "action": <p>{item.start_time}</p>,
            }
        
        }
        ):console.log("sjjsj"))
      console.log("Your new array of modified objects here", data)
    })
    .catch(err => { console.log('Google api calendar error', err) })
                }} options={events} ></Select>
                </div>


              </MDBox>
              <MDBox pt={3} >
                
                <DataTable
                  table={{ columns: pColumns, rows: data?data:pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={true}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
      
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  )
}

export default EventSchedule;