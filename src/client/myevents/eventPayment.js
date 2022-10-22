
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDInput from "components/MDInput";
import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CssBaseline from '@mui/material/CssBaseline';
import Card from '@mui/material/Card';
import axios from 'axios';

//import routes from "routes";

import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import { Grid, Typography } from "@mui/material";

import DefaultInfoCard from "examples/Charts/MDevent";
import DataTable from "examples/Tables/DataTable";

import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";
import PieChart from "examples/Charts/PieChart";
import authorsTableData from "layouts/tables/data/authorsTableData";
import TasksData from "./TasksData"
import SubscriptionData from "./MyPayments"

import Select from "react-select";
import API from '../../services/baseURL';



function EventPayment({ id }) {
  const { columns: pColumns, rows: pRows } = TasksData();

  const { columns: Columnss, rows: pRowss } = SubscriptionData();

  const [data, setdata] = useState(pRows)
  const [subscriptions, setsubscriptions] = useState(pRowss)

  useEffect(async () => {
    API.get(`client/advancePayments`, {
      params: {
        event_id: id
      }
    })

      .then(res => {
        console.log("dhvdhfg", res)

        setdata(res.data.food1 ? res.data.food1.map((item, index) => {
          return {
            "id": `${item.payment_id}`,
            "amount": `${item.amount}`,
            "date": `${item.paid_date}`,
            "type": `${item.pay_by}`,
            "description": `${item.pay_for}`,
          }

        }
        ) : setdata(pRows))
        console.log("Your new array of modified objects here", data)
      })
      .catch(err => { console.log('Google api calendar error', err) })
  }, [])
  
  useEffect(async () => {
    API.get(`client/subscriptions`, {
      params: {
        event_id: id
      }
    })

      .then(res => {
        console.log("dhvdhfgklmn", res)

        setsubscriptions(res.data.food1 ? res.data.food1.map((item, index) => {
          return {
             "id": `${item.subscription_id}`,
            "description": `${item.description}`,
             "date": `${item.date}`,
           "rate": `${item.rate}`,
             "quantity": `${item.quantity}`,
            "amount": `${item.quantity}*${item.rate}`,
          
          }

        }
        ) : setdata(pRows))
        console.log("Your new array of modified objects here", data)
      })
      .catch(err => { console.log('subscription error', err) })
  }, [])

  console.log("subscription", subscriptions)
  return (

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
                  Previous payments
                </MDTypography>
              </div>
              <div style={{ float: 'right' }}>

              </div>


            </MDBox>
            <MDBox pt={3} >

              <DataTable
                table={{ columns: pColumns, rows: data}}
                isSorted={false}
                entriesPerPage={false}
                showTotalEntries={true}
                noEndBorder
              />
            </MDBox>
          </Card>
        </Grid>

        <Grid mt={2} item xs={12}>
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
                  My Subscrptions
                </MDTypography>
              </div>
              <div style={{ float: 'right' }}>

              </div>


            </MDBox>
            <MDBox  pt={3} >

              <DataTable
                table={{ columns: Columnss, rows: subscriptions}}
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
  )
}

export default EventPayment