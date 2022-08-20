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
import React from 'react'
import Select from 'react-select'
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";








function Dashboard() {
  const options = [
    { value: 'Poruwa', label: 'Poruwa' },
    { value: 'Flower Colours', label: 'Flower Colours' },
    { value: 'Sitting Back', label: 'Sitting Back' },
    { value: 'Table Decorations', label: 'Table Decorations' },
    { value: 'Entrance Decorations', label: 'Entrance Decorations' }
  ]

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={3} mt={8}>
          <Grid container spacing={3}>
           
            <Grid item xs={12} lg={10}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={5}>
           Manage Banquet Details
          </MDTypography>
         
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="number" label="Capasity" halfWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="image" label="Images" multiline rows={5} fullWidth />
            </MDBox>
            <MDBox mb={2}>
            <MDInput label="Description" multiline rows={5} fullWidth/>
            </MDBox>
           
            <MDBox mt={4} mb={1}>
            <MDButton variant="gradient" color="error" halfWidth>
                Cancel
              </MDButton>
              <MDButton variant="gradient" color="dark" halfWidth>
                Save
              </MDButton>
            </MDBox>
           
          </MDBox>
        </MDBox>
      </Card>
      </Grid>
     
          </Grid>

          <MDBox mb={3} mt={8}>
          <Grid container spacing={3}>
           
           <Grid item xs={12} lg={10}>
     <Card>
       <MDBox
         variant="gradient"
         bgColor="info"
         borderRadius="lg"
         coloredShadow="info"
         mx={2}
         mt={-3}
         p={2}
         mb={1}
         textAlign="center"
       >
         <MDTypography variant="h4" fontWeight="medium" color="white" mt={5}>
          Manage Decorations
         </MDTypography>
        
       </MDBox>
       <MDBox pt={4} pb={3} px={3}>
         <MDBox component="form" role="form">
         <MDBox mb={2}>
         <Select options={options} />

           </MDBox>
         <MDBox mb={2}>
             <MDInput type="text" label="Type" halfWidth />
           </MDBox>
           <MDBox mb={2}>
             <MDInput type="text" label="Name" halfWidth />
           </MDBox>
           <MDBox mb={2}>
             <MDInput type="image" label="Images" multiline rows={5} fullWidth />
           </MDBox>
           <MDBox mb={2}>
           <MDInput label="Description" multiline rows={5} fullWidth/>
           </MDBox>
          
           <MDBox mt={4} mb={1}>
           <MDButton variant="gradient" color="error" halfWidth>
               Cancel
             </MDButton>
             <MDButton variant="gradient" color="dark" halfWidth>
               Save
             </MDButton>
           </MDBox>
          
         </MDBox>
       </MDBox>
     </Card>
     </Grid>
    
         </Grid>
         </MDBox>
        </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
