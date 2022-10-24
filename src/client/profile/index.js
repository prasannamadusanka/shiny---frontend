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
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";



// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import DataTable from "examples/Tables/DataTable";

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
import TasksData from "./TasksData";

import Payment from "./payment"
import API from '../../services/baseURL';

import { useMaterialUIController, setDirection } from "context";
import { useEffect, useState } from "react";



export const getMenuList = async event => {
  console.log("dnb")
  const id = localStorage.getItem('id')
  console.log(id, "local")

  console.log("scbn cas")
  const response = await API.get(`client/getuser`,
    {
      params: {
        "user_id": id
      }
    }


  );
  console.log("hdvhdv", response)
  return response.data;
};



function Overview() {
  const { columns: pColumns, rows: pRows } = TasksData();
  const [itemList, setItemList] = useState([]);


  const [, dispatch] = useMaterialUIController();
  // const { sales, tasks } = reportsLineChartData;
  useEffect(() => {
    setDirection(dispatch, "client");

    return () => setDirection(dispatch, "ltr");
  }, []);


  useEffect(() => {
    console.log("dhdbf---------------------------")
    getMenuList().then(data => {
      console.log(data)
      setItemList(data.menus[0])
      console.log("nnssdjnd", itemList)
      // console.log(JSON.parse(data))
      // const [ItemList, setItemList] = useState(data.menus);
    }).catch(err => {
      console.log(err.error)
    })

  }, []);
  console.log("hi")
  console.log("jnjv", itemList.user_id)
  //const { products } = data
  // const { soups } = SoupData;
  const item = []
  //console.log(soups)
  const [cartItems, setCartItems] = useState([]);
  const [y, setY] = useState(itemList.name)
  console.log("djbfdj", y)
  const yf={
    'fullN':itemList.name,
    'mobile':itemList.contact_number,
    'email': itemList.email,
    'location': "Hikkaduwa",
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox mt={5} mb={3}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="profile information"
                description=""
                info={
                  yf
                }
                // info={{
                //   fullN: `Maadhuni Tharukshi`,
                //   mobile: "0768867295",
                //   email: "alecthompson@mail.com",
                //   location: "Hikkaduwa",
                // }}
                social={[
                  {
                    link: "https://www.facebook.com/CreativeTim/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/creativetim",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/creativetimofficial/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} md={6} xl={4} sx={{ display: "flex" }}>
              <Divider orientation="vertical" sx={{ ml: -2, mr: 1 }} />
              <ProfileInfoCard
                title="My Payments"
                description="To avoid the interuption you have to pay rs. 5000000.00 before the Mar 29 2022"
                info={{
                  TotalAmount: "Rs.350000.00",
                  ToatalAdvance: "Rs.50000.00",
                  RemainingAmount: "Rs.60000.00",

                }}
                social={[
                  {
                    link: "https://www.facebook.com/CreativeTim/",
                    icon: <FacebookIcon />,
                    color: "facebook",
                  },
                  {
                    link: "https://twitter.com/creativetim",
                    icon: <TwitterIcon />,
                    color: "twitter",
                  },
                  {
                    link: "https://www.instagram.com/creativetimofficial/",
                    icon: <InstagramIcon />,
                    color: "instagram",
                  },
                ]}
                action={{ route: "", tooltip: "Edit Profile" }}
                shadow={false}
              />
              <Divider orientation="vertical" sx={{ mx: 0 }} />
            </Grid>
            <Grid item xs={12} xl={4}>
              {/* <ProfilesList title="conversations" profiles={profilesListData} shadow={false} /> */}
              <Payment></Payment>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mt={2} pt={2} px={2} lineHeight={1.25}>
          <MDTypography variant="h4">Decorate Your Event</MDTypography>
          {<DataTable
            table={{ columns: pColumns, rows: pRows }}
            isSorted={false}
            entriesPerPage={false}
            showTotalEntries={true}
            noEndBorder
          />}
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;