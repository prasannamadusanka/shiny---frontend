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
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDProgress from "components/MDProgress";
import MDButton from "components/MDButton";

// Billing page components
import Transaction from "chef/event/components/Transaction";

//
import API from '../../../../services/baseURL';
import { useState, useEffect} from "react";
import { Grid } from "@mui/material";

export const getSelectedmenu = async event => {
  const response = await API.get('chef/event_selected_food_item_list',{params:{"event_id":3}});
  console.log(response.data.event_selected_menu)
  return response.data.event_selected_menu;
};




function Selectedmenu() {


  const [selectedmenu, setSelectedmenu] = useState([]);
  useEffect(() => {
    getSelectedmenu().then(data => {
      console.log(data)
      setSelectedmenu(data)
      console.log(selectedmenu)
    }).catch(err => {

    })
  }, []);



  return (
    <Card sx={{ height: "100%" }}>
      <Grid>
      
        <MDBox>
          <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
            <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              Selected Menu
            </MDTypography>
            <MDBox display="flex" alignItems="flex-start">
              <MDBox color="text" mr={0.5} lineHeight={0}>
                <Icon color="inherit" fontSize="small"></Icon>
              </MDBox>
              {/* {selectedmenu.map((item,index)=>{
                return(
                  (index === 0) ? <MDTypography variant="button" color="text" fontWeight="regular">{item.ingredient_list_completion_status}</MDTypography> : ''
                );
              })} */}
            </MDBox>
          </MDBox>
          <MDBox ml={3} mt={3} sx={{ width: "90%" }}>
          
          </MDBox>
          <MDBox pt={3} pb={2} px={2}>
            <MDBox
              component="ul"
              display="flex"
              flexDirection="column"
              p={0}
              m={0}
              sx={{ listStyle: "none" }}
            >
              {selectedmenu.map((item,index)=>{
                return(
              <Transaction
                name={item.name}
                description=""
                value=""
              />
                );
              })}

              {/* <MDButton id="button" variant="contained" color="info" size="medium" fullwidth></MDButton> */}
            </MDBox>
          </MDBox>
        </MDBox>
      </Grid>
    </Card>
  );
}

export default Selectedmenu;
