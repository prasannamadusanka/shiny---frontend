
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import React, { useState } from 'react'
import './index.css'
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import { Grid, Typography } from "@mui/material";
const axios = require("axios");
import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";
import Select from 'react-select'

import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import API from '../../services/baseURL';
import options from '../../services/functions';

const options1 = [
  { value: 'Poruwa', label: 'Poruwa' },
  { value: 'Flower Colours', label: 'Flower Colours' },
  { value: 'Sitting Back', label: 'Sitting Back' },
  { value: 'Table Decorations', label: 'Table Decorations' },
  { value: 'Entrance Decorations', label: 'Entrance Decorations' }
]



const EventForm = () => {

  const [events, setevents] = useState()
  useEffect(async () => {
    API.get(`client/viewevents`, {
      params: {
        user_id: localStorage.getItem('id')
      }
    })
      .then(res => {
        setevents(res.data.menus ? res.data.menus.map((item) => {
          localStorage.setItem('schedule',item.event_id)
          return {
            'value': item.event_id,
            'label': <p>{item.date.split('T')[0]} - {item.type}</p>
          }

        }
        ) : console.log("sjjsj"))
        console.log("Your new array of modified objects here", data)
      })
      .catch(err => { console.log('Google api calendar error', err) })
  }, [])

  const [, dispatch] = useMaterialUIController();
  //  const { sales, tasks } = reportsLineChartData;
  useEffect(() => {
    setDirection(dispatch, "client");

    return () => setDirection(dispatch, "ltr");
  }, []);


  const [formValues, setFormValues] = useState([{ name: "", email: "" }])
  const [eventDate, setEventDate] = useState()
  console.log(eventDate)

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    console.log(e.target.value)
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  }
  let handleSelect = (e) => {
    console.log(e.target.value)
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
    console.log(JSON.stringify(formValues))
    // alert(JSON.stringify(formValues[0].name));
    const formValues2 = JSON.stringify(formValues)
    console.log("dmnfnf",formValues)


    for (var i = 0; i < JSON.stringify(formValues).length; i++) {
      console.log("start",formValues[i].startTime)
      var params = { event_id: eventDate, startTime: formValues[i].startTime, endTime: JSON.stringify(formValues[i].endTime), description: JSON.stringify(formValues[i].name) }
      console.log("hdcdbhv hfg ",params)
      axios
        .post("http://localhost:3000/client/addSchedule", params)
        .then(res => {
          console.log("sucess")
        })
    }


  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <MDBox color="white" */}

      {/* variant="gradient"
        borderRadius="lg"
        shadow="lg"
        opacity={1} py={3}> */}
      <Grid container spacing={3} style={{ backgroundColor: 'white', padding: '35px', marginTop: '20px', marginLeft: '15px' ,marginRight:'60px'}}>
        {/* <Grid item xs={12}> */}
        <MDTypography variant="h3">Schedule Request Form </MDTypography>
      
        <form onSubmit={handleSubmit}>
          <div style={{marginBottom:'30px'}}>
          <Select
            options={events} onChange={(e) => {
              setEventDate(e.value)
            }}>
          </Select>
          </div>

          {formValues.map((element, index) => (
            <div className="form-inline" style={{ padding: '3px' }} key={index}>
              {/* <MDTypography variant="subtitle1">Activity</MDTypography> */}
              <MDInput style={{ width:'327px' }} type="text" label="Type the activity" name="name"  value={element.name || ""} onChange={e => handleChange(index, e)} />
              {/* <label>Time</label> */}
              {/* {element.event = "2022.10.12"} */}
              <div style={{display:'flex',padding:'30px'}}>
              <MDInput style={{ visibility: 'hidden' }} name="event" value={element.event} onChange={e => handleChange(index, e)} />
              <div style={{marginLeft:'100px'}}>
              <MDInput style={{marginRight:'50px'}} type="time" name="startTime" label="Start Time" value={element.startTime} onChange={e => handleChange(index, e)} />
              <MDInput type="time" name="endTime" label="End Time" value={element.endTime} onChange={e => handleChange(index, e)} />
              </div>
              </div>

              {
                index ?
                  <button type="button" className="button remove" onClick={() => removeFormFields(index)}>Remove</button>
                  : null
              }
            </div>
          ))}
          <div>
            <button style={{width:'150px',marginRight:'40px',borderRadius:'5px'}} className="button add" type="button" onClick={() => addFormFields()}>Add</button>
            <button style={{width:'150px',borderRadius:'5px'}} className="button submit" type="submit">Submit</button>
          </div>
        </form>
        {/* </Grid> */}

      </Grid>
      {/* </MDBox> */}
    </DashboardLayout>
  )
}

export default EventForm;