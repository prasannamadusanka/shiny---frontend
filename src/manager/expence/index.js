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
//import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
//import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import { useState, useEffect } from "react";

// Data
import authorsTableData from "manager/expence/components/data";

import { useMaterialUIController, setDirection } from "context";
//forms
import FormControl from '@mui/material/FormControl';
import { Card, FormHelperText, Input, InputLabel } from "@mui/material";
import MDInput from "components/MDInput";

import { Link } from "react-router-dom";

import Select from 'react-select';




import axios from 'axios';


export const getMenuList =async event => {
  
  const response = await API.get(`manager/view_menus`);
  console.log("hi")
  console.log(response.data.menu)
  return response.data.menu;
};
  
  
function Tables() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "manager");

    return () => setDirection(dispatch, "ltr");
  }, []);



  

  const [formValues, setFormValues] = useState([{ name: "", quantity  : ""}])

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  }
  let addFormFields = () => {
    setFormValues([...formValues, { name: "", quantity: "" }])
  }
  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          <Grid item xs={10}>
            <Card>
              <MDBox mb={1.5} component="form" role="form">
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Add Expences
                  </MDTypography>
                </MDBox>

                <form  onSubmit={handleSubmit}>
                <MDBox mt={5} ml={5}>
                    
                  
                    
                  <MDBox mt={2} display="flex" bgColor='#f0f2f5' borderRadius="lg" sx={{ width: "97%" }}>
                    <MDTypography variant="h6" fontWeight="medium" mb={2} pr={84} pt={2} pl={0.25}>
                      New Expense
                    </MDTypography>
                    <MDButton variant="gradient" color="dark" >
                      <Icon sx={{ fontWeight: "bold" }} onClick={() => addFormFields()}>add</Icon>
                    </MDButton>
                  </MDBox>
                  {formValues.map((element, index) => (
                  <Grid item xs={12} display='flex'mt={2}>
                    <MDBox sx={{ width: "45%" }}>
                    <MDInput type="text" name="Description"  label="Description"  sx={{ width: "78%" }} ></MDInput>
                      {/* <MDInput type="text" name="name" value={element.name || ""} label="Name" sx={{ width: "90%" }}></MDInput> */}
                    </MDBox>
                    <MDBox sx={{ width: "25%" }} ml={3}>
                      <MDInput type="number" name="quantity"  label="quantity" ></MDInput>
                    </MDBox>
                    <MDBox sx={{ width: "15%" }} mr={3}>
                      
                    </MDBox>
                    <MDButton variant="gradient" color="secondary" >
                      <Icon sx={{ fontWeight: "bold" }} onClick={() => removeFormFields(index)}>remove</Icon>
                    </MDButton>
                  </Grid>
                  ))}
                  
                 
                  <Link to="">
                    <MDButton label= "submit" variant="gradient" color="info">
                        &nbsp;submit
                    </MDButton>
                  </Link>
                  {/* <MDBox mt={5} ml={5}>
                  <FormControl size="medium">
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                  </FormControl>
                  </MDBox> */}
                </MDBox>
                </form>


              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>

      
     
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
