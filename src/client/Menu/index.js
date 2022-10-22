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
import Button from "@mui/material/Button";

import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from '@mui/icons-material/Send';
import Icon from "@mui/material/Icon";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import ItemCard from "examples/Cards/ProjectCards/ItemCard";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import Dialog from '@mui/material/Dialog';
 import DialogTitle from '@mui/material/DialogTitle';
 import DialogContent from '@mui/material/DialogContent';
 import DialogActions from '@mui/material/DialogActions';
 import IconButton from '@mui/material/IconButton';
 import CloseIcon from '@mui/icons-material/Close';
 import DialogContentText from "@mui/material/DialogContentText";
 import TextField from "@mui/material/TextField";
import MDButton from "components/MDButton";
import { Box, Paper, Stack, Typography } from "@mui/material";
import { Fragment, useState, } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

// import urls
import API from '../../services/baseURL';
//import options from '../../services/services';
import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";

//const navigate = useNavigate()
// function for getting data
export const getItemList = async event => {
  const response = await API.get(`client/view_items`);
  // console.log(response.data[students])
  return response.data;
};

export const getTypeList = async event => {
  const response = await API.get(`client/view_types`);
  // console.log(response.data[students])
  return response.data;
};

const styles = {
  paperContainer: {
    backgroundImage: `url(${homeDecor1})`
  }
};
function Menu() {

  const [, dispatch] = useMaterialUIController();
  //const { sales, tasks } = reportsLineChartData;
  useEffect(() => {
    setDirection(dispatch, "client");

    return () => setDirection(dispatch, "ltr");
  }, []);


  // const {palette} = useTheme();
  const { id } = useParams();
  const [itemList, setItemList] = useState(null);
  console.log("location")
  console.log(id)

  useEffect(() => {
    getItemList().then(data => {
      console.log(data)
      // console.log(JSON.parse(data))
      setItemList(data);
    }).catch(err => {
      console.log(err.error)
    })
  }, []);


  useEffect(async () => {
    console.log("set");
    console.log(itemList);

  }, [itemList]);
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
  console.log(events)


  const inputObject = {
    "foodList":
      [{
        "name": "Tropican Nasi Goreang 1",
        "age": "It is a best delicious food in our menu. it vcan be av"
      }, {
        "name": "Tropican Nasi Goreang 2",
        "age": "It is a best delicious food in our menu. it vcan be av"
      },{
        "name": "Tropican Nasi Goreang 1",
        "age": "It is a best delicious food in our menu. it vcan be av"
      }, {
        "name": "Tropican Nasi Goreang 2",
        "age": "It is a best delicious food in our menu. it vcan be av"
      },{
        "name": "Tropican Nasi Goreang 1",
        "age": "It is a best delicious food in our menu. it vcan be av"
      }, {
        "name": "Tropican Nasi Goreang 2",
        "age": "It is a best delicious food in our menu. it vcan be av"
      }]
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
   console.log("vxhsbcv") 
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const [event,setEvent] = useState()
  const selectEvent = (e)=>{
   // e.preventdefault()
   console.log(e.target.value)
   setEvent(e.target.value)
  // localStorage.setItem("id", response.data.data2)

  }
  const myUrl = (window.location.protocol + "//" + window.location.hostname + ":" + window.location.port).split("/s/")[0];

  const handleCloseOne = ()=>{

  // const navigate =useNavigate()
  // const handleOnClick = () => navigate('/Client/menu/pricePlan', {replace: false});
  //handleOnClick()
    localStorage.setItem("event_selected_food", event)
    window.location.href = myUrl + '/' + 'Client' + '/' + 'menu'+'/'+'pricePlan';

    handleClose()
  }




  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Reason for this action</DialogTitle>
                {/* <DialogContent>
                    <DialogContentText>
                        This message will show on this users window
                    </DialogContentText>
                    hhhhhhh
                </DialogContent> */}
                <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
      {
        
        events?events.map(
          (item,index)=>{
            return(
            <FormControlLabel value={item['value']} control={<Radio />} label={item['label']}   onChange={selectEvent}/>
            )
          }
        ):console.log("djjd")
      }

        
  
      </RadioGroup>
    </FormControl>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleCloseOne}>Save changes</Button>
                </DialogActions>
            </Dialog>
      <Typography variant="h2" align="center">You can select your elegant menu items</Typography>
      <Typography variant="h2" align="center">From Our desired collection</Typography>
      <Typography variant="subtitle1" align="center">tthere are massive collection of menus</Typography>
      <Box textAlign='center'></Box>

      
        <Button onClick={handleClickOpen} endIcon={<SendIcon />} style={{ color: 'white', marginLeft: 'auto', marginRight: 'auto' }} variant="contained" >
          Getting Started
        </Button>
      
      {/* </Box>
      </Stack>  */}
      <MDButton variant="contained" color="warning">
        Food Items
        &nbsp;
        <Icon>store</Icon>
      </MDButton>
      <Link to="/Client/menu/pricePlan">
      <MDButton variant="contained" color="warning" style={{ float: 'right' }}>
        Price Plan&nbsp;
        <Icon>add_shopping_cart</Icon></MDButton>
        </Link>

      {/* <Stack spacing={2}> */}
      <div>
        {/* map the object */}
        {
          itemList ? itemList.food1.map((item, index) => {

            return (
              <>
                {/* <h1 key={index}> {item.name}</h1> */}
                <MDBox pt={2} px={2} lineHeight={1.25}>
                </MDBox>
                <MDBox p={2}>
                  <MDBox mt={2} mb={1}>
                    <MDTypography variant="h6" color="text" >
                      {item.name}
                    </MDTypography>

                  </MDBox>
                  <Grid container spacing={6}>
                    {

                      inputObject.foodList.map((i, index) => {
                        return (


                          <Grid item xs={12} md={6} xl={3}>
                            <ItemCard
                              image='/images/item-4.jpg'
                              availability={i.name}
                              title="Chicken Biriyani"
                              description={i.age}

                            />
                          </Grid>


                        )
                      })

                    }
                  </Grid>

                </MDBox>

              </>)
          }) : <h1> Data 1 Loading</h1>
        }
      </div>
      <Footer />
    </DashboardLayout>
  );
}



export default Menu;