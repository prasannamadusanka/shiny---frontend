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
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";
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
import Swal from 'sweetalert2'
import MDInput from "components/MDInput";

import Select from 'react-select'


const styles = {
  paperContainer: {
      backgroundImage: `url(${homeDecor1})`
  }
};

const opensweetalert=()=>
{
  Swal.fire({
    title: 'Are you sure to hoose menu?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, choose it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Completed',
        'Your choosen has been selected',
        'success'
      )
      window.location='/client/menu/menuselction'
    }
  })
}
function PricePlan() {
  const [, dispatch] = useMaterialUIController();
  //const { sales, tasks } = reportsLineChartData;
  useEffect(() => {
    setDirection(dispatch, "client");

    return () => setDirection(dispatch, "ltr");
  }, []);

 
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} ml={2}md={6} lg={3}>
        
       <MDInput style={{backgroundColor:'white'}}type="number" label="Pax" value="100"   />
       </Grid>
       <Grid item xs={12} md={6} lg={3}>
       <Select options={options} />
       </Grid>
       </Grid>
       </MDBox>
 
  <PricingTable  highlightColor='#1976D2'>
    <PricingSlot   onClick={opensweetalert} buttonText='SET AS MENU' title='EMARALD' priceText='Rs.3200/per person'>
        <PricingDetail> <b>Chose one</b> Soup</PricingDetail>
        <PricingDetail> <b>Chose two</b> Salad</PricingDetail>
        <PricingDetail> <b>Chose three</b>Rice Dishes</PricingDetail>
        <PricingDetail> <b>Chose two</b>Noodles/Pasta dishes	</PricingDetail>
        <PricingDetail> <b>Chose two</b>Vegetable dishes	</PricingDetail>
        <PricingDetail> <b>Chose one</b>Chicken dishes	</PricingDetail>
        <PricingDetail> <b>Chose three</b>Fish dishes	</PricingDetail>
        <PricingDetail> <b>Chose four</b>Condiments	</PricingDetail>
        <PricingDetail> <b>choose five</b>Desserts</PricingDetail>
    </PricingSlot>
    <PricingSlot highlighted buttonText='SET AS MENU' title='RUBY(best seller)' priceText='Rs.3250/per person'>
    <PricingDetail> <b>Chose one</b> Soup</PricingDetail>
        <PricingDetail> <b>Chose two</b> Salad</PricingDetail>
        <PricingDetail> <b>Chose three</b>Rice Dishes</PricingDetail>
        <PricingDetail> <b>Chose two</b>Noodles/Pasta dishes	</PricingDetail>
        <PricingDetail> <b>Chose two</b>Vegetable dishes	</PricingDetail>
        <PricingDetail> <b>Chose one</b>Chicken dishes	</PricingDetail>
        <PricingDetail> <b>Chose three</b>Fish dishes	</PricingDetail>
        <PricingDetail> <b>Chose four</b>Condiments	</PricingDetail>
        <PricingDetail> <b>choose five</b>Desserts</PricingDetail>
    </PricingSlot>
    <PricingSlot   buttonText='SET AS MENU' title='SAPPHIRE' priceText='Rs.3550/per person'>
    <PricingDetail> <b>Chose one</b> Soup</PricingDetail>
    <PricingDetail> <b>Chose two</b> Salad</PricingDetail>
        <PricingDetail> <b>Chose three</b>Rice Dishes</PricingDetail>
        <PricingDetail> <b>Chose two</b>Noodles/Pasta dishes	</PricingDetail>
        <PricingDetail> <b>Chose two</b>Vegetable dishes	</PricingDetail>
        <PricingDetail> <b>Chose one</b>Chicken dishes	</PricingDetail>
        <PricingDetail> <b>Chose three</b>Fish dishes	</PricingDetail>
        <PricingDetail> <b>Chose four</b>Condiments	</PricingDetail>
        <PricingDetail> <b>choose five</b>Desserts</PricingDetail>
    </PricingSlot>
    <PricingSlot   buttonText='SET AS MENU' title='TOPAZ' priceText='Rs.3850/per person'>
    <PricingDetail> <b>Chose one</b> Soup</PricingDetail>
    <PricingDetail> <b>Chose three</b>Rice Dishes</PricingDetail>
        <PricingDetail> <b>Chose two</b>Noodles/Pasta dishes	</PricingDetail>
        <PricingDetail> <b>Chose two</b>Vegetable dishes	</PricingDetail>
        <PricingDetail> <b>Chose one</b>Chicken dishes	</PricingDetail>
        <PricingDetail> <b>Chose three</b>Fish dishes	</PricingDetail>
        <PricingDetail> <b>Chose four</b>Condiments	</PricingDetail>
        <PricingDetail> <b>choose five</b>Desserts</PricingDetail>
    </PricingSlot>
    <PricingSlot   buttonText='SET AS MENU' title='JASPER' priceText='Rs.3250/per person'>
    <PricingDetail> <b>Chose one</b> Soup</PricingDetail>
        <PricingDetail> <b>Chose two</b> Salad</PricingDetail>
        <PricingDetail> <b>Chose three</b>Rice Dishes</PricingDetail>
        <PricingDetail> <b>Chose two</b>Noodles/Pasta dishes	</PricingDetail>
        <PricingDetail> <b>Chose two</b>Vegetable dishes	</PricingDetail>
        <PricingDetail> <b>Chose one</b>Chicken dishes	</PricingDetail>
        <PricingDetail> <b>Chose three</b>Fish dishes	</PricingDetail>
        <PricingDetail> <b>Chose four</b>Condiments	</PricingDetail>
        <PricingDetail> <b>choose five</b>Desserts</PricingDetail>
    </PricingSlot>
    <PricingSlot  buttonText='SET AS MENU' title='JASPER' priceText='Rs.3250/per person'>
    <PricingDetail> <b>Chose one</b> Soup</PricingDetail>
        <PricingDetail> <b>Chose two</b> Salad</PricingDetail>
        <PricingDetail> <b>Chose three</b>Rice Dishes</PricingDetail>
        <PricingDetail> <b>Chose two</b>Noodles/Pasta dishes	</PricingDetail>
        <PricingDetail> <b>Chose two</b>Vegetable dishes	</PricingDetail>
        <PricingDetail> <b>Chose one</b>Chicken dishes	</PricingDetail>
        <PricingDetail> <b>Chose three</b>Fish dishes	</PricingDetail>
        <PricingDetail> <b>Chose four</b>Condiments	</PricingDetail>
        <PricingDetail> <b>choose five</b>Desserts</PricingDetail>
    </PricingSlot>
    <PricingSlot  buttonText='SET AS MENU' title='JASPER' priceText='Rs.3250/per person'>
    <PricingDetail> <b>Chose one</b> Soup</PricingDetail>
        <PricingDetail> <b>Chose two</b> Salad</PricingDetail>
        <PricingDetail> <b>Chose three</b>Rice Dishes</PricingDetail>
        <PricingDetail> <b>Chose two</b>Noodles/Pasta dishes	</PricingDetail>
        <PricingDetail> <b>Chose two</b>Vegetable dishes	</PricingDetail>
        <PricingDetail> <b>Chose one</b>Chicken dishes	</PricingDetail>
        <PricingDetail> <b>Chose three</b>Fish dishes	</PricingDetail>
        <PricingDetail> <b>Chose four</b>Condiments	</PricingDetail>
        <PricingDetail> <b>choose five</b>Desserts</PricingDetail>
    </PricingSlot>
    <PricingSlot  buttonText='SET AS MENU' title='JASPER' priceText='Rs.3250/per person'>
    <PricingDetail> <b>Chose one</b> Soup</PricingDetail>
        <PricingDetail> <b>Chose two</b> Salad</PricingDetail>
        <PricingDetail> <b>Chose three</b>Rice Dishes</PricingDetail>
        <PricingDetail> <b>Chose two</b>Noodles/Pasta dishes	</PricingDetail>
        <PricingDetail> <b>Chose two</b>Vegetable dishes	</PricingDetail>
        <PricingDetail> <b>Chose one</b>Chicken dishes	</PricingDetail>
        <PricingDetail> <b>Chose three</b>Fish dishes	</PricingDetail>
        <PricingDetail> <b>Chose four</b>Condiments	</PricingDetail>
        <PricingDetail> <b>choose five</b>Desserts</PricingDetail>
    </PricingSlot>
</PricingTable>
      <Footer />
    </DashboardLayout>
  );
}




export default PricePlan;