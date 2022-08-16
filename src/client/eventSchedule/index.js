import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDInput from "components/MDInput";
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';

//import routes from "routes";
import './index.css'

import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import { Grid, Typography } from "@mui/material";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultInfoCard from "examples/Charts/MDevent";
import DataTable from "examples/Tables/DataTable";

import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";
import PieChart from "examples/Charts/PieChart";
import authorsTableData from "layouts/tables/data/authorsTableData";
import eventTableData from "./eventTableData"
import Select from "react-select";

import { NewsHeaderCard, ProductCard, UserCard } from 'react-ui-cards';

const EventSchedule = () => {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = eventTableData();
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
                <Select options={options}></Select>
                </div>

              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
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