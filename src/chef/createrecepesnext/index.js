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


function CreateRecepesNext() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "chef");

    return () => setDirection(dispatch, "ltr");
  }, []);
  

  const categoryies = [
    { value: 'vegetable', label: 'vegetable' },
    { value: 'fruit', label: 'fruit' },
    { value: 'oil', label: 'oil' },
    { value: 'spice', label: 'spice' },
    { value: 'icecream', label: 'ice cream' },
    { value: 'sweet', label: 'sweet' },
  ]

  const [formValues, setFormValues] = useState([{ name: "", type  : "", image:"", description:""}])

  let handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
  }
  let addFormFields = () => {
    setFormValues([...formValues, { name: "", type  : "", image:"", description:""}])
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
                    New Ingredients
                  </MDTypography>
                </MDBox>
                <MDBox mt={5} ml={5}>
                  <MDBox mt={2} display="flex" sx={{ width: "97%" }}>
                    <MDTypography variant="h6" fontWeight="medium" mb={2} pr={84}>
                      New Ingredient
                    </MDTypography>
                    <MDButton variant="gradient" color="dark" >
                      <Icon sx={{ fontWeight: "bold" }} onClick={() => addFormFields()}>add</Icon>
                    </MDButton>
                  </MDBox>

                  <form  onSubmit={handleSubmit}>
                  <Grid item xs={11} justifyContent="center" alignItems="center">
                    {formValues.map((element, index) => (
                    <MDBox bgColor='#f8f9fa'p={1} mt={3} mb={2}>
                      <MDBox mt={2} sx={{minwidth:'100%'}}>
                        <MDBox mt={2} display="flex">
                          <MDTypography variant="h6" fontWeight="medium" mb={2}>
                            Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </MDTypography>
                          <MDInput type="text" name="name" value={element.name || ""} label="Name"  sx={{ width: "78%" }}></MDInput>
                          <MDButton variant="gradient" color="secondary" >
                            <Icon sx={{ fontWeight: "bold" }} onClick={() => removeFormFields()}>remove</Icon>
                          </MDButton>
                        </MDBox>
                        <MDBox mt={2} display="flex">
                          <MDTypography variant="h6" fontWeight="medium" mb={2}>
                            Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </MDTypography>
                          <MDBox sx={{ width: "86%" }}>
                            <Select isSearchable={true} options={categoryies} style={{width: "auto"}} name="type" value={element.type || ""}/>
                          </MDBox>
                        </MDBox>
                        <MDBox mt={2} display="flex">
                          <MDTypography variant="h6" fontWeight="medium" mb={2}>
                            Image&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </MDTypography>
                          <MDInput type="url" name="image" value={element.image || ""} label="Image URL"  borderLeft={"2"} sx={{ width: "86%" }}></MDInput>
                        </MDBox>
                        <MDBox mt={2} mb={5} sx={{ width: "100%" }}>
                            <MDTypography variant="h6" fontWeight="medium" mb={2}>
                                Description
                            </MDTypography>
                            <MDInput type="text" name="description" value={element.description || ""} label="" multiline rows={5} sx={{ width: '95%' }}></MDInput>
                        </MDBox>
                      </MDBox>
                    </MDBox>
                    ))}
                    <Link to="/createrecepesnext">
                      <MDButton type="submit" label= "create" variant="gradient" color="info">
                        &nbsp;Create
                      </MDButton>
                    </Link>
                  </Grid>
                  </form>
                  
                    {/* <MDBox mt={5} ml={5}>
                    <FormControl size="medium">
                      <InputLabel htmlFor="my-input">Name</InputLabel>
                      <Input id="my-input" aria-describedby="my-helper-text" />
                      <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                    </FormControl>
                    </MDBox> */}
                </MDBox>
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CreateRecepesNext;
