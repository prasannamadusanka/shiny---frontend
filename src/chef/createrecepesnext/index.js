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


function CreateRecepesNext() {

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
                      <Icon sx={{ fontWeight: "bold" }}>add</Icon>
                    </MDButton>
                  </MDBox>
                  <Grid item xs={11} justifyContent="center" alignItems="center">
                    <MDBox bgColor='#f8f9fa'p={1} mt={3} mb={2}>
                        <MDBox mt={2} sx={{minwidth:'100%'}}>
                            <MDBox spacing={10}>
                                <MDInput type="text" label="Name" sx={{ width: "95%" }}></MDInput>
                            </MDBox>
                            <MDBox mt={2}>
                                <MDInput type="text" label="Type"  borderLeft={"2"} sx={{ width: "95%" }}></MDInput>
                            </MDBox>
                            <MDBox mt={2}>
                                <MDInput type="url" label="Image URL"  borderLeft={"2"} sx={{ width: "95%" }}></MDInput>
                            </MDBox>
                        </MDBox>
                        <MDBox mt={2} mb={5}>
                            <MDTypography variant="h6" fontWeight="medium" mb={2}>
                                Description
                            </MDTypography>
                            <MDInput type="text" label="" multiline rows={5} sx={{ width: '95%' }}></MDInput>
                        </MDBox>
                    </MDBox>
                  </Grid>
                  <Link to="/createrecepesnext">
                    <MDButton label= "next" variant="gradient" color="info">
                        &nbsp;Create
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
