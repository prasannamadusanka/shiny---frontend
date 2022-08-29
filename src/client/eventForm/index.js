
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


import API from '../../services/baseURL';
import options from '../../services/functions';

const EventForm = () => {

  const [, dispatch] = useMaterialUIController();
//  const { sales, tasks } = reportsLineChartData;
  useEffect(() => {
    setDirection(dispatch, "client");

    return () => setDirection(dispatch, "ltr");
  }, []);


    const [formValues, setFormValues] = useState([{ name: "", email : ""}])

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
        console.log(JSON.stringify(formValues))
      // alert(JSON.stringify(formValues[0].name));
        const formValues2 = JSON.stringify(formValues)
        console.log(formValues2)
        
      for(var i=0;i<JSON.stringify(formValues).length;i++){
          var params = {event_id:JSON.stringify(formValues[i].event),startTime :JSON.stringify(formValues[i].startTime), endTime: JSON.stringify(formValues[i].endTime),description:JSON.stringify(formValues[i].name)}
          console.log(params)
          axios
          .post("http://localhost:3000/client/addSchedule",params)
          .then(res=>{
            console.log("sucess")
          })
         }


    }

    return (
        <DashboardLayout>
          <DashboardNavbar />
          <MDBox color="white"

  variant="gradient"
  borderRadius="lg"
  shadow="lg"
  opacity={1} py={3}>
          <Grid container spacing={3}>
          <Grid item xs={12}>
          <MDTypography variant="h3">Schedule Request Form </MDTypography>
          <MDTypography variant="h6">Wedding event 2022.10.12 </MDTypography>
        <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
             <MDTypography variant="subtitle1">Activity</MDTypography>
              <MDInput type="text" name="name" label="Text" value={element.name || ""} onChange={e => handleChange(index, e)} />
              <label>Time</label>
              {element.event="2022.10.12"}
              <MDInput style={{visibility:'hidden'}} name="event" value = {element.event}onChange={e => handleChange(index, e)}/>
              <MDInput type="time" name="startTime" label="Start Time" value={element.startTime || "10:30:00"} onChange={e => handleChange(index, e)} />
              <MDInput type="time" name="endTime" label="End Time" value={element.endTime || "10:30:00"} onChange={e => handleChange(index, e)} />
             
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
              <button className="button submit" type="submit">Submit</button>
          </div>
      </form>
      </Grid>
    
      </Grid>
      </MDBox>
      </DashboardLayout>
    )
}

export default EventForm;