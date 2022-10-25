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

//const axios = require("axios");


export const getIngredientlist = async event => {
  const response = await API.get('chef/event_ingredient_list',{params:{"event_id":1}});
  console.log(response.data.event_ingredient_list)
  return response.data.event_ingredient_list;
};




function Item() {


  const [ingredient_list, setingredient_list] = useState([]);
  useEffect(() => {
    getIngredientlist().then(data => {
      console.log(data)
      setingredient_list(data)
      console.log(ingredient_list)
    }).catch(err => {

    })
  }, []);


  let handleUpdate = () => {
    //event.preventDefault();
    console.log("whshwdvghwvxh")
      API
      .post("http://localhost:3001/chef/update_ingredient_list_status")
      .then(res=>{
        console.log("success")
      })
    
  }



  return (
    <Card sx={{ height: "100%" }}>
      <Grid>
      
        <MDBox>
          <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
            <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
              Kitchen Ingrediant List
            </MDTypography>
            <MDBox display="flex" alignItems="flex-start">
              <MDBox color="text" mr={0.5} lineHeight={0}>
                <Icon color="inherit" fontSize="small"></Icon>
              </MDBox>
              {ingredient_list.map((item,index)=>{
                return(
                  (index === 0) ? <MDTypography variant="button" color="text" fontWeight="regular">{item.ingredient_list_completion_status}</MDTypography> : ''
                );
              })}
            </MDBox>
          </MDBox>
          <MDBox ml={3} mt={3} sx={{ width: "90%" }}>
          {ingredient_list.map((item,index)=>{
            
              if(index===0){
                if(item.ingredient_list_completion_status =="begin"){
                  document.getElementById("button").innerHTML = "save";
                  return(
                     <MDProgress variant="gradient" color="success" value="0" /> 
                  );
                }else if(item.ingredient_list_completion_status =="pending"){
                  document.getElementById("button").innerHTML = "send";
                  return(
                    <MDProgress variant="gradient" color="success" value="50" /> 
                 );
                }
                else if(item.ingredient_list_completion_status =="completed"){
                  document.getElementById("button").innerHTML = "...";
                  return(
                    <MDProgress variant="gradient" color="success" value="100" /> 
                 );
                }
              }
          })}
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
              {ingredient_list.map((item,index)=>{
                return(
              <Transaction
                name={item.ingredient_name}
                description={item.measurement}
                value={item.predicted_qty}
              />
                );
              })}
              {/* <Transaction
                name="Banana"
                description=""
                value="546 kg"
              />
              <Transaction
                name="Ice Cream"
                description=""
                value="875 kg"
              />
              <Transaction
                name="Tomato"
                description=""
                value="875 kg"
              /> */}

              <MDButton onClick={handleUpdate} id="button" variant="contained" color="info" size="medium" fullwidth></MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Grid>
    </Card>
  );
}

export default Item;
