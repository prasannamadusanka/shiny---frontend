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
//
import { useState, useEffect} from "react";

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
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";
import ProfileInfoCard2 from "examples/Cards/InfoCards/ProfileInfoCard2";

//calendar
import { Calendar } from "react-calendar";
import 'react-calendar/dist/Calendar.css';

// import { Calendar, dateFnsLocalizer } from "react-big-calendar";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

import { Card, ImageList, ImageListItem } from "@mui/material";

import { Link } from "react-router-dom";

//
import Header from "chef/dashboard/components/Header";

//
import { useMaterialUIController, setDirection } from "context";

//
import API from '../../services/baseURL';
import { id } from "date-fns/locale";

function DateReturn(date){
  const today = date;
  const yyyy = today.getFullYear();
  let mm = today.getMonth()+1; // Months start at 0
  let dd = today.getDate();

  const formattedDay = yyyy + '-' + mm + '-' + dd;
  return formattedDay
}



export const getevent = async event => {
  var passingdate = "2022-08-17";
  //var params={date:passingdate}
  const response = await API.get('chef/view_event_general',{params:{"date":"2022-10-23"}});
  //const response = await API.get('chef/view_event_general');
  console.log(response.data.general_event)
  return response.data.general_event;
};

export const getnoofpendingingredients = async event => {
  const response = await API.get('chef/no_of_pending_ingredients');
  console.log(response.data.no_of_pending_ingredients)
  return response.data.no_of_pending_ingredients;
};

export const getnoofpendingingredientlists = async event => {
  const response = await API.get('chef/no_of_pending_ingredient_lists');
  console.log(response.data.no_of_pending_ingredient_lists)
  return response.data.no_of_pending_ingredient_lists;
};

export const getnoofremainingeventsforweek = async event => {
  const response = await API.get('chef/no_of_remaining_events_for_week');
  console.log(response.data.no_of_remaining_events_for_week)
  return response.data.no_of_remaining_events_for_week;
};





function Dashboard() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "chef");

    return () => setDirection(dispatch, "ltr");
  }, []);
  

  const [generalevent, setevent] = useState([]);
  useEffect(() => {
    getevent().then(data => {
      console.log(data)
      setevent(data)
        console.log(generalevent)
    }).catch(err => {
      
    })
  }, []);

  const [noofpendingingredients, setnoofpendingingredients] = useState([]);
  useEffect(() => {
    getnoofpendingingredients().then(data => {
      console.log(data)
      setnoofpendingingredients(data);
        console.log(noofpendingingredients)
    }).catch(err => {

    })
  }, []);

  const [noofpendingingredientlist, setnoofpendingingredientlist] = useState([]);
  useEffect(() => {
    getnoofpendingingredientlists().then(data => {
      console.log(data)
      setnoofpendingingredientlist(data);
      console.log(noofpendingingredientlist)
    }).catch(err => {

    })
  }, []);

  const [noofremainingeventsforweek, setnoofremainingeventsforweek] = useState([]);
  useEffect(() => {
    getnoofremainingeventsforweek().then(data => {
      console.log(data)
      setnoofremainingeventsforweek(data);
      console.log(noofremainingeventsforweek)
    }).catch(err => {

    })
  }, []);


  let passeventid = (event_id) => {
    console.log("event id")
    console.log(event_id)
  }




  //for calendar
  const [date, setDate] = useState(new Date());
  // console.log("vgfz",date)

  // console.log(generalevent.general_event)

  // generalevent.map((item,index)=>{
  //   console.log(item.type)
  // })

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Header>
      <MDBox py={3} mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              {noofpendingingredientlist.map((item,index)=>{
                return(
                  <Link to="/chef/pendingpredictions">
                <ComplexStatisticsCard
                  color="error"
                  icon="star"
                  title="Pending Predictions"
                  count={item.number}
                  percentage={{
                    color: "success",
                    amount: "",
                    label: "current",
                  }}
                />
              </Link>
                );
                
              })}
              
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <Link to="/chef/eventchef">
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
             {noofpendingingredients.map((item,index)=>{
                return(
              <Link to="/chef/ingredients">
                <ComplexStatisticsCard
                  color="secondary"
                  icon="list"
                  title="Pending Ingredients"
                  count={item.number}
                  percentage={{
                    color: "error",
                    amount: "",
                    label: "current",
                  }}
                />
              </Link>
              );
            })}
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
            {noofremainingeventsforweek.map((item,index)=>{
                return(
              <ComplexStatisticsCard
                color="dark"
                icon="star"
                title="Remaining Events"
                count={item.number}
                percentage={{
                  color: "success",
                  amount: "",
                  label: "coming seven days",
                }}
              />
              );
            })}
            </MDBox>
          </Grid>
        </Grid>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <Card>
                <p className='text-center'>
                <span className='bold'>Selected Date:</span>{' '} {DateReturn(date)}
                  {/* <span className='bold'>Selected Date:</span>{' '} {date.toISOString()} */}
                </p>
                <Calendar onChange={setDate} value={date}/>

                {/* <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} /> */}
                
              </Card>
            </Grid>
            <Grid xs={12} md={6} lg={6} container direction="column" >
              
              {generalevent.map((item,index)=>{
                return(  
              <Grid item xs={12}>
                <MDBox mt={3.3} ml={2}> 
                  <ProfileInfoCard2
                    title={item.type}
                    info={{
                      name: item.name,
                      mobile: item.contact_number,
                      email: item.email,
                      pax: item.pax,
                      menu: item.menu_name,
                      startTime: item.start_time,
                      endTime: item.end_time,
                      date:item.date,
                      id:item.event_id,
                    }}
                    action={{ route: "/chef/eventchef", tooltip: "Goto Event", onClick:() => passeventid(item.event_id) }}
                    shadow={false}
                  />
                </MDBox>
              </Grid>
                );
              
              })}

              {/* <Grid item xs={12}>
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
                    action={{ route: "/chef/eventchef", tooltip: "Goto Event" }}
                    shadow={false}
                  />
                </MDBox>
              </Grid> */}
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
