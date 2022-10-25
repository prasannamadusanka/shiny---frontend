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
import RecepeIngredientList from "examples/Lists/RecepeIngredientList";

// Overview page components
import Header from "chef/recepe/components/Header";

import ingredientList from "chef/recepe/components/Ingredients";

//
import { useMaterialUIController, setDirection } from "context";
import { useEffect, useState } from "react";
import API from '../../services/baseURL';

export const getrecepe = async event => {
  const response = await API.get('chef/view_recepe');
  console.log(response.data.recepe)
  return response.data.recepe;
};


function Overview() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "chef");

    return () => setDirection(dispatch, "ltr");
  }, []);


  const [recepe, setrecepe] = useState([]);
  useEffect(() => {
    getrecepe().then(data => {
      console.log(data)
      setrecepe(data)
      console.log(recepe)
    }).catch(err => {

    })
  }, []);

  var description = ""
  var cheftips = ""
  var ingredientList=new Array()
  var qtyList=new Array()
  
  {recepe.map((item,index)=>{
    ingredientList.push({name:item.ingredient_name,quantity:item.quantity})
  })}

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox display="flex" flexDirection="row" width="100%">
          <MDBox pt={2} px={2} lineHeight={1.25} width="50%">
            <MDBox sx={{ width: "100%" }}>
                <RecepeIngredientList title="Ingredients" profiles={ingredientList} shadow={false} />
            </MDBox>
          </MDBox>
            {recepe.map((item,index)=>{
              description = item.description;
              cheftips = item.chef_tips
            })}
          <MDBox display="flex" flexDirection="column" width="50%" mt={2}>
            <MDBox pt={2} px={2} lineHeight={1.25}>
              <MDTypography variant="h6" fontWeight="medium">
                Description
              </MDTypography>
              <MDBox mb={1}>
                <MDTypography variant="button" color="text">
                  {/* {item.description} */}{description}
                </MDTypography>
              </MDBox>
            </MDBox>
            <MDBox pt={2} px={2} lineHeight={1.25}>
              <MDTypography variant="h6" fontWeight="medium">
                Chef Tip
              </MDTypography>
              <MDBox mb={1}>
                <MDTypography variant="button" color="text">
                  {/* {item.chef_tips} */}{cheftips}
                </MDTypography>
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
