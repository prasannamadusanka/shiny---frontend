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

import React, { useState } from 'react';

//
import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";


function CreateRecepes() {
  
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
                    New Recepe
                  </MDTypography>
                </MDBox>

                <form  onSubmit={handleSubmit}>
                <MDBox mt={5} ml={5}>
                    <MDBox mt={2} display="flex">
                      <MDTypography variant="h6" fontWeight="medium" mb={2}>
                        Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </MDTypography>
                      <MDInput type="text" label="Name"  sx={{ width: "89%" }}></MDInput>
                    </MDBox>
                    <MDBox mt={2} display="flex">
                      <MDTypography variant="h6" fontWeight="medium" mb={2}>
                        Category&nbsp;&nbsp;
                      </MDTypography>
                      <MDBox sx={{ width: "89%" }}>
                        <Select options={categoryies} style={{width: "auto"}}/>
                        {/* <MDInput type="text" label="Category" sx={{ width: "89%" }} ></MDInput> */}
                      </MDBox>
                    </MDBox>
                    <MDBox mt={2} display="flex">
                      <MDTypography variant="h6" fontWeight="medium" mb={2}>
                        Image&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </MDTypography>
                      <MDInput type="url" label="Image URL"  borderLeft={"2"} sx={{ width: "89%" }}></MDInput>
                    </MDBox>
                  <MDBox mt={2} display="flex" bgColor='#f0f2f5' borderRadius="lg" sx={{ width: "97%" }}>
                    <MDTypography variant="h6" fontWeight="medium" mb={2} pr={84} pt={2} pl={0.25}>
                      Ingredients for One
                    </MDTypography>
                    <MDButton variant="gradient" color="dark" >
                      <Icon sx={{ fontWeight: "bold" }} onClick={() => addFormFields()}>add</Icon>
                    </MDButton>
                  </MDBox>
                  {formValues.map((element, index) => (
                  <Grid item xs={12} display='flex'mt={2}>
                    <MDBox sx={{ width: "50%" }}>
                      <MDInput type="text" name="name" value={element.name || ""} label="Name" sx={{ width: "90%" }}></MDInput>
                    </MDBox>
                    <MDBox sx={{ width: "40%" }}>
                      <MDInput type="number" name="quantity" value={element.quantity || ""} label="Kg / L" sx={{ width: "90%" }}></MDInput>
                    </MDBox>
                    <MDButton variant="gradient" color="secondary" >
                      <Icon sx={{ fontWeight: "bold" }} onClick={() => removeFormFields(index)}>remove</Icon>
                    </MDButton>
                  </Grid>
                  ))}
                  <MDBox mt={2} mb={5}>
                    <MDTypography variant="h6" fontWeight="medium" mb={2}>
                      Chef Tips
                    </MDTypography>
                    <MDInput type="text" label="" multiline rows={5} sx={{ width: '97%' }}></MDInput>
                  </MDBox>
                  <MDBox mt={2} mb={5}>
                    <MDTypography variant="h6" fontWeight="medium" mb={2}>
                      Description
                    </MDTypography>
                    <MDInput type="text" label="" multiline rows={5} sx={{ width: '97%' }}></MDInput>
                  </MDBox>
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
