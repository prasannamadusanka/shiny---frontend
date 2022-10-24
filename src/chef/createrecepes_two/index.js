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
import Icon from "@mui/material/Icon";

// @mui icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

//forms
import FormControl from '@mui/material/FormControl';
import { Card, FormHelperText, Input, InputLabel } from "@mui/material";
import MDInput from "components/MDInput";

import { Link } from "react-router-dom";

import Select from 'react-select';

import React, { useState, useEffect } from 'react';

//
import { useMaterialUIController, setDirection } from "context";
const axios = require("axios");


function CreateRecepes_two() {
  
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "chef");

    return () => setDirection(dispatch, "ltr");
  }, []);
  

  const categoryies = [
    { value: 'welcomedrink', label: 'welcome drink' },
    { value: 'ricedish', label: 'rice dish' },
    { value: 'salad', label: 'salad' },
    { value: 'soup', label: 'soup' },
    { value: 'noodlesnpasta', label: 'noodles&pasta' },
    { value: 'vegitabledish', label: 'vegitable dish' },
    { value: 'chickendish', label: 'chicken dish' },
    { value: 'seafooddish', label: 'seafood dish' },
    { value: 'porkdish', label: 'pork dish' },
  ]

  const ingredients = [
    { value: '', label: '' },
    { value: '', label: 'vegetables' },
    { value: 'beans', label: 'beans' },
    { value: 'carrot', label: 'carrot' },
    { value: '', label: 'fruits' },
    { value: 'apple', label: 'apple' },
    { value: 'orange', label: 'orange' },
    { value: '', label: 'oil' },
    { value: 'coconut', label: 'coconut oil' },
    { value: 'vegetable', label: 'vegetable oil' },
  ]

  const measurements = [
    { value: '', label: '' },
    { value: 'kg', label: 'kg' },
    { value: 'L', label: 'L' },
    { value: '0.00010kg', label: 'spoons' },
  ]


  const [formValues, setFormValues] = useState([{ name: "", quantity  : ""}])

  let handleSubmit = (event) => {
    event.preventDefault();
    //alert(JSON.stringify(formValues));
    console.log(JSON.stringify(formValues))
    const formValues2 = JSON.stringify(formValues)
    console.log(formValues2)
  }
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
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
                    New Recepe
                  </MDTypography>
                </MDBox>

                <form  onSubmit={handleSubmit}>
                <MDBox mt={5} ml={5}>
                    
                  {formValues.map((element, index) => (
                  <Grid item xs={12} display='flex'mt={2}>
                    <MDBox sx={{ width: "45%" }}>
                    <Select 
                        isSearchable={true} 
                        defaultValue={ingredients[0]} 
                        options={ingredients} 
                        style={{width: "auto"}}
                        name="ingredients"
                        value={element.ingredients || ""} onChange={e => handleChange(index, e)}
                      />
                      {/* <MDInput type="text" name="name" value={element.name || ""} label="Name" sx={{ width: "90%" }}></MDInput> */}
                    </MDBox>
                    <MDBox sx={{ width: "25%" }} ml={3}>
                      <MDInput type="number" name="quantity" label="quantity" sx={{ width: "90%" }} value={element.quantity || ""} onChange={e => handleChange(index, e)}></MDInput>
                    </MDBox>
                    <MDBox sx={{ width: "15%" }} mr={3}>
                      <Select 
                        isSearchable={true} 
                        defaultValue={measurements[0]} 
                        options={measurements} 
                        style={{width: "auto"}}
                      />
                    </MDBox>
                    <MDButton variant="gradient" color="secondary" >
                      <Icon sx={{ fontWeight: "bold" }} onClick={() => removeFormFields(index)}>remove</Icon>
                    </MDButton>
                  </Grid>
                  ))}
                  
                  <Link to="/chef/createrecepes/next">
                    <MDButton label= "next" variant="gradient" color="info">
                        &nbsp;Next
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

export default CreateRecepes;
