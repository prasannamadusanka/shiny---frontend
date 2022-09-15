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
import { Link } from "react-router-dom";


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
import React from 'react';
import { useState, useEffect } from "react";
import { PricingTable, PricingSlot, PricingDetail } from 'react-pricing-table';

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import MDButton from "components/MDButton";
import { Box, Paper, Stack, Typography } from "@mui/material";
import API from '../../services/baseURL';


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
function PricePlan() {
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

          <MDButton variant="contained" color="warning">
            Food Items
            &nbsp;
            <Icon>store</Icon>
          </MDButton>

          <MDButton variant="contained" color="warning" style={{ float: 'right' }}>
            Price Plan&nbsp;
            <Icon>add_shopping_cart</Icon></MDButton>
        </MDBox>
      </Stack>
      <div>
        {
          menu.map(
            (item, index) => {
              console.log("madhuni")
              console.log(item.menu_id)

              //     <PricingSlot   buttonText='Select as menu' title={item.name} priceText='Rs.3200/per person'>
              //     <PricingDetail> <b>Chose </b> Soup</PricingDetail>
              //     <PricingDetail> <b>Chose two</b> Salad</PricingDetail>
              //     <PricingDetail> <b>Chose three</b>Rice Dishes</PricingDetail>
              //     <PricingDetail> <b>Chose two</b>Noodles/Pasta dishes	</PricingDetail>
              //     <PricingDetail> <b>Chose two</b>Vegetable dishes	</PricingDetail>
              //     <PricingDetail> <b>Chose one</b>Chicken dishes	</PricingDetail>
              //     <PricingDetail> <b>Chose three</b>Fish dishes	</PricingDetail>
              //     <PricingDetail> <b>Chose four</b>Condiments	</PricingDetail>
              //     <PricingDetail> <b>choose five</b>Desserts</PricingDetail>
              // </PricingSlot>
            }
          )
        }
      </div>
      <PricingTable highlightColor='#1976D2'>
        {/* <PricingSlot   buttonText='Select as menu' title='EMARALD' priceText='Rs.3200/per person'>
        <PricingDetail> <b>Chose </b> Soup</PricingDetail>
        <PricingDetail> <b>Chose two</b> Salad</PricingDetail>
        <PricingDetail> <b>Chose three</b>Rice Dishes</PricingDetail>
        <PricingDetail> <b>Chose two</b>Noodles/Pasta dishes	</PricingDetail>
        <PricingDetail> <b>Chose two</b>Vegetable dishes	</PricingDetail>
        <PricingDetail> <b>Chose one</b>Chicken dishes	</PricingDetail>
        <PricingDetail> <b>Chose three</b>Fish dishes	</PricingDetail>
        <PricingDetail> <b>Chose four</b>Condiments	</PricingDetail>
        <PricingDetail> <b>choose five</b>Desserts</PricingDetail>
    </PricingSlot> */}
        {
          menu.map((item, index) => {
            //  let rate = item.rate;
            return (

              // console.log(item.menu_id)
              <PricingSlot highlighted buttonText='' title={item.name} priceText={item.rate}>
                <PricingDetail> <b>Chose {item.welcome_drink_count}</b> Soup</PricingDetail>
                <PricingDetail> <b>Chose {item.salad}</b> Salad</PricingDetail>
                <PricingDetail> <b>Chose three</b>Rice Dishes</PricingDetail>
                <PricingDetail> <b>Chose two</b>Noodles/Pasta dishes	</PricingDetail>
                <PricingDetail> <b>Chose two</b>Vegetable dishes	</PricingDetail>
                <PricingDetail> <b>Chose one</b>Chicken dishes	</PricingDetail>
                <PricingDetail> <b>Chose three</b>Fish dishes	</PricingDetail>
                <PricingDetail> <b>Chose four</b>Condiments	</PricingDetail>
                <PricingDetail> <b>choose five</b>Desserts</PricingDetail>
              </PricingSlot>
            );

          })
        }

      </PricingTable>
      <Footer />
    </DashboardLayout>
  );
}




export default PricePlan;