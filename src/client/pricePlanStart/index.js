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
import Parser from 'html-react-parser';

import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from '@mui/icons-material/Send';
import Icon from "@mui/material/Icon";

import {Link, useNavigate} from "react-router-dom";

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
//import PricingCard from "examples/Cards/PricingCard";
// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data

import { useState, useEffect } from "react";
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";

import MDButton from "components/MDButton";
import { Box, Paper, Stack, Typography } from "@mui/material";
import API from '../../services/baseURL';
 //dialog box

 import PropTypes from 'prop-types';
 
 
 import { styled } from '@mui/material/styles';
 import Dialog from '@mui/material/Dialog';
 import DialogTitle from '@mui/material/DialogTitle';
 import DialogContent from '@mui/material/DialogContent';
 import DialogActions from '@mui/material/DialogActions';
 import IconButton from '@mui/material/IconButton';
 import CloseIcon from '@mui/icons-material/Close';
 import DialogContentText from "@mui/material/DialogContentText";
 import TextField from "@mui/material/TextField";
 
import { useMaterialUIController, setDirection } from "context";
import { setLayout } from 'context';


const styles = {
  paperContainer: {
    backgroundImage: `url(${homeDecor1})`
  }
};
export const getMenuList = async event => {
  // const headers = {
  //   'Content-Type': 'application/json',
  //   'Authorization': accessToken
  // }
  const response = await API.get(`client/view_menus`,
    // {
    //   headers: headers
    // }

  );
  console.log("hi")
  console.log(response.data.menus)
  return response.data.menus;
};

//dialog box

function PricePlanStart() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch,"client");

    return () => setDirection(dispatch, "ltr");
  }, []);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
   console.log("vxhsbcv") 
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOnClick = () => navigate('/client/menu/pricePlan');


  const [menu, setmenu] = useState([]);
  useEffect(() => {
    getMenuList().then(data => {
      console.log(data)
      setmenu(data)
      console.log(menu)
      // console.log(JSON.parse(data))
      // const [ItemList, setItemList] = useState(data.menus);
    }).catch(err => {
      //  console.log(err.error)
    })
  }, []);
  //console.log(menu.menu_id)
  menu.map(
    (item, index) => {
      console.log(item.menu_id)
    }
  )
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Reason for this action</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        This message will show on this users window
                    </DialogContentText>
                    hhhhhhh
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save changes</Button>
                </DialogActions>
            </Dialog>
      <Stack spacing={2}>
        <Typography variant="h2" align="center">You can select your elegant menu items</Typography>
        <Typography variant="h2" align="center">From Our desired collection</Typography>
        <Typography variant="subtitle1" align="center">tthere are massive collection of menus</Typography>
        <Box textAlign='center'>
          <Button endIcon={<SendIcon />} style={{ color: 'white', marginLeft: 'auto', marginRight: 'auto' }} variant="contained" >
            Getting Started
          </Button>
        </Box>
        <MDBox mt={3}>

          <MDButton onClick={()=>{handleOnClick()}}variant="contained" color="warning">

            Food Items
            &nbsp;
            <Icon>store</Icon>
          </MDButton>

          <MDButton variant="contained" color="warning" style={{ float: 'right' }}>
            Price Plan&nbsp;
            <Icon>add_shopping_cart</Icon></MDButton>
        </MDBox>
      </Stack>
    
      <PricingTable highlightColor='#1976D2'>
      
        {
          menu.map((item, index) => {
            //  let rate = item.rate;
            return (

              // console.log(item.menu_id)
              <PricingSlot highlighted title={item.name} priceText={item.rate} >
                <PricingDetail> <b>Choose {item.welcome_drink_count}</b> Welcome Drink</PricingDetail>
                <PricingDetail> <b>Choose {item.salad}</b> Salad</PricingDetail>
                <PricingDetail> <b>Choose {item.rice_dishes}</b> Rice Dishes</PricingDetail>
                <PricingDetail> <b>Choose {item.noodles_pasta}</b> Noodles/Pasta dishes	</PricingDetail>
                <PricingDetail> <b>Choose {item.vegetable_dishes}</b> Vegetable dishes	</PricingDetail>
                <PricingDetail> <b>Choose {item.chicken_dishes}</b> Chicken dishes	</PricingDetail>
                <PricingDetail> <b>Choose {item.fish_dishes}</b> Fish dishes	</PricingDetail>
                <PricingDetail> <b>Choose {item.pork_dishes}</b> Pork dishes	</PricingDetail>
                <PricingDetail> <b>choose {item.desserts}</b> Desserts</PricingDetail>
              </PricingSlot>
            );

          })
        }

      </PricingTable>
      <Footer />
    </DashboardLayout>
  );
}




export default PricePlanStart;