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
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

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


import { useMaterialUIController, setDirection } from "context";
import axios from 'axios';






const EventForm = () => {
  // const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const id = 777;

  const [, dispatch] = useMaterialUIController();
  // const { sales, tasks } = reportsLineChartData;
  useEffect(() => {
    setDirection(dispatch, "manager");

    return () => setDirection(dispatch, "ltr");
  }, []);

  const [formValues, setFormValues] = useState([
    {
      deco_id: "null",
      name: "",
      deco_type_id: "",
      description: "",
      image: "",
      
      // banquet_id: "",
    },
  ]);

  const handleChange = (i, e) => {
    console.log(e);
    const newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };
  // let addFormFields = () => {
  //     setFormValues([...formValues, { name: "", email: "" }])
  //   }

  // let removeFormFields = (i) => {
  //     let newFormValues = [...formValues];
  //     newFormValues.splice(i, 1);
  //     setFormValues(newFormValues)
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(formValues));
    console.log(JSON.stringify(formValues));
    alert(JSON.stringify(formValues[0].name));
    const formValues2 = JSON.stringify(formValues);
    console.log(formValues2);

    // for (let i = 0; i < JSON.stringify(formValues).length; i++) {
    const params = {
      deco_id: formValues[0].deco_id,
      name: formValues[0].name,
      deco_type_id: formValues[0].deco_type_id,
      description: formValues[0].description,
      image: formValues[0].image,
      
      // banquet_id: JSON.stringify(formValues[0].banquet_id),
    };
    console.log(params);
    axios.post("http://localhost:3001/manager/add_decoration", params).then((res) => {
      console.log("sucess");
      console.log(res);
    });
    // }
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={3} mt={8}>
         

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
         <MDBox component="form" role="form" onSubmit={handleSubmit}>
         {formValues.map((element, index) => (
          
         <><MDBox mb={2}>
          
           </MDBox>
           <MDBox mb={2}>
              
             </MDBox>
             <MDBox mb={2}>
               <MDInput type="text" label="Name" name="name" value={element.name || ""} onChange={(e) => handleChange(index, e)}  halfWidth />
             </MDBox>
             <MDBox mb={2}>
               <MDInput type="text" label="Images" name="image" value={element.image || ""} onChange={(e) => handleChange(index, e)} multiline rows={5} fullWidth />
             </MDBox>
             <MDBox mb={2}>
               <MDInput type="text" label="Description" name="description" value={element.description || ""} onChange={(e) => handleChange(index, e)} multiline rows={5} fullWidth />
             </MDBox>
             <MDBox mt={4} mb={1}>
               <MDButton variant="gradient" color="error" halfWidth>
                 Cancel
               </MDButton>
               <MDButton variant="gradient" color="dark" halfWidth type="submit">
                 Save
               </MDButton>
             </MDBox></>
           ))}
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

export default EventForm;
