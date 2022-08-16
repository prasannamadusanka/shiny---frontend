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

import Divider from "@mui/material/Divider";

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
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import MDButton from "components/MDButton";
import { Box, Paper, Stack, Typography } from "@mui/material";



const styles = {
  paperContainer: {
    backgroundImage: `url(${homeDecor1})`
  }
};
function Menu() {


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
      </Stack>
      <MDBox pt={2} px={2} lineHeight={1.25}>

        <MDButton variant="contained" color="warning">
          Food Items
          &nbsp;
          <Icon>store</Icon>
        </MDButton>
        <MDButton variant="contained" color="warning" style={{ float: 'right' }}>
          Price Plan&nbsp;
          <Icon>add_shopping_cart</Icon></MDButton>

      </MDBox>
      <MDBox p={2}>
        <MDBox mt={2} mb={1}>
          <MDTypography variant="h6" color="text" >
            Rice And Pastas
          </MDTypography>

        </MDBox>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6} xl={3}>
            <ItemCard
              image='./images/item-4.jpg'
              availability="Tropican Nasi Goreang"
              title="Chicken Biriyani"
              description="It is a best delicious food in our menu. it vcan be av"

            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <ItemCard
              image='./images/item-4.jpg'
              availability="Tropican Nasi Goreang"
              title="Chicken Biriyani"
              description="It is a best delicious food in our menu. it vcan be av"

            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <ItemCard
              image='./images/item-4.jpg'
              availability="Tropican Nasi Goreang"
              title="Chicken Biriyani"
              description="It is a best delicious food in our menu. it vcan be av"

            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <ItemCard
              image='./images/item-4.jpg'
              availability="Tropican Nasi Goreang"
              title="Chicken Biriyani"
              description="It is a best delicious food in our menu. it vcan be av"

            />
          </Grid>
        </Grid>
        <MDBox mt={2} mb={1}>
          <MDTypography variant="h6" color="text" >
            Chicken Dishes
          </MDTypography>
          <Grid container spacing={6}>
          <Grid item xs={12} md={6} xl={3}>
            <ItemCard
              image='./images/item-6.jpg'
              availability="Grilled chicken"
              title="Chicken Biriyani"
              description="It is a best delicious food in our menu. it vcan be av"

            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
          <ItemCard
              image='./images/item-6.jpg'
              availability="Grilled chicken"
              title="Chicken Biriyani"
              description="It is a best delicious food in our menu. it vcan be av"

            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <ItemCard
              image='./images/item-4.jpg'
              availability="Tropican Nasi Goreang"
              title="Chicken Biriyani"
              description="It is a best delicious food in our menu. it vcan be av"

            />
          </Grid>
          <Grid item xs={12} md={6} xl={3}>
            <ItemCard
              image='./images/item-4.jpg'
              availability="Tropican Nasi Goreang"
              title="Chicken Biriyani"
              description="It is a best delicious food in our menu. it vcan be av"

            />
          </Grid>
        </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}



export default Menu;
