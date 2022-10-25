// /**
// =========================================================
// * Material Dashboard 2 React - v2.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/material-dashboard-react
// * Copyright 2022 Creative Tim (https://www.creative-tim.com)

// Coded by www.creative-tim.com

//  =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// */

// // @mui material components
// import Grid from "@mui/material/Grid";

// // Material Dashboard 2 React components
// import MDBox from "components/MDBox";

// // Material Dashboard 2 React example components
// import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
// import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import Footer from "examples/Footer";
// import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";


// import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";


// // Data



// // Dashboard components
// import Projects from "manager/myKitchen/components/Projects";
// import { useState, useEffect } from "react";
// import { useMaterialUIController, setDirection } from "context";



// import API from "../../services/baseURL";

// export const getbookingslist = async (event) => {
//   const response = await API.get(`http://localhost:3001/manager/view_pre_ingre_list`);
//   console.log(response); // response -> data -> Not_Accepted_Ingredient_List -> 0 -> event_id
//   console.log(response.data.Not_Accepted_Ingredient_List);
//   return response.data.Not_Accepted_Ingredient_List;
// };


// function Dashboard() {
//   const [, dispatch] = useMaterialUIController();

//   useEffect(() => {
//     setDirection(dispatch, "manager");

//     return () => setDirection(dispatch, "ltr");
//   }, []);

//    const [events, setevents] = useState([
//      { event_id: ""},
//    ]);
//    useEffect(() => {
//      getbookingslist()
//        .then((data) => {
//          console.log(events);
//          console.log(data);
//          setevents(data);
//          console.log(events);
//        })
//        .catch((err) => {
//           console.log(err.error);
//       }); // Had to use ; here.
//    }, []);

//   return (
//     <DashboardLayout>
//       <DashboardNavbar />
//       <MDBox py={3}>
//         <Grid container spacing={3}>
//         {events?.map((item) => (
//           <Grid item xs={18} md={8} lg={3}>
//             <MDBox mb={1.5}>
//             <DefaultInfoCard
//                     icon="coffee"
//                     title={item.event_id}
//                     description="Kitchen Item List"
//                     value="Not Accepted"
//                   />
//             </MDBox>
//           </Grid>
//            ))}
          
          
         
         
//         </Grid>
        
//         <MDBox>
//           <Grid container spacing={3}>
//             <Grid item xs={12} md={6} lg={9}>
//            <Projects/>
//             </Grid>
           
            
//           </Grid>
          
//         </MDBox>
//       </MDBox>
//       <Footer />
//     </DashboardLayout>
//   );
// }

// export default Dashboard;


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
import MDProgress from "components/MDProgress";
import Icon from "@mui/material/Icon";
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
import eventTableData from "./eventTableData"
import Select from "react-select";
import API from '../../services/baseURL';



import { NewsHeaderCard, ProductCard, UserCard } from 'react-ui-cards';
import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";

const Dashboard = () => {
  console.log(__dirname)
  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );


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
    API.get(`manager/view_ingredientlist`,{params:{
      banqet_id:localStorage.getItem('id')
  }})
      .then(res => {
        console.log("fbhebhv",res)
        setevents(res.data.Not_Accepted_Ingredient_List?res.data.Not_Accepted_Ingredient_List.map((item) => {
            return {
              'value' : item.event_id,
              'label' : <p>{item.date.split('T')[0]} - {item.type}</p>
            }
        
        }
        ):console.log("sjjsj"))
      console.log("Your new array of modified objects here-events", data)
    })
    .catch(err => { console.log('Google api calendar error', err) })
  }, [])


  console.log("modi")
 
  const [eventId, seteventId] = useState()

  const changeeventId=(e)=>{
    console.log("dbvhfb",e)
    seteventId(e.value)
  }
  

  
  const [data, setdata] = useState()

  //
  useEffect(async() => {
    API.get(`manager/view_pre_ingre_list`,{
      params:{
        event_id:eventId
      }
    })
      .then(res => {
        console.log(res.data.Not_Accepted_Ingredient_List)
        setdata(res.data.Not_Accepted_Ingredient_List?res.data.Not_Accepted_Ingredient_List.map((item) => {
            return {
              "item": item.ingedient_name,
              "amount": item.predicted_qty,
            }
        
        }
        ):console.log("sjjsj"))
      console.log("Your new arevents", data)
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
                  changeeventId(e)
                  console.log("event",eventId)
                     API.get(`client/viewSchedule`,{
      params:{
        event_id:eventId
      }
    })
      .then(res => {
        console.log("ne whfbrh",res)
        setdata(res.data.Not_Accepted_Ingredient_List?res.data.Not_Accepted_Ingredient_List.map((item) => {
            return {
              "event": <p>{item.description}</p>,
              "start": item.start_time,
              "end": item.end_time,
              "status":<p>Pending</p>,
              "completion":<Progress color="success" value={0} />,
              "action": <MDTypography component="a" href="#" color="text">
              <Icon>more_vert</Icon>
            </MDTypography>,
            }
        
        }
        ):console.log("sjjsj"))
      console.log("Your new array of schedule", data)
    })
    .catch(err => { console.log('Google api caledfdfffffffff', err) })
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

export default Dashboard;