/* eslint-disable no-plusplus */
/* eslint-disable */
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

// react-router-dom components
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// New components
// import MDBadge from "components/MDBadge";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab'; //@material-ui/core/Tab
// import Tabs from "@mui/material/Tabs";
import TabContext from '@mui/lab/TabContext'; //@material-ui/lab/TabContext
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

// Authentication layout components
import SPRRCoverLayout from "ServiceProvider/authentication/components/SPRRCoverLayout";

// Images
import bgImage from "assets/images/service_provider/cover1.jpg";

// import { useState } from "react";
import axios from "axios";
// error if {axios}
import { useMaterialUIController, setDirection } from "context";
// import { element } from "prop-types";

const EventForm2 = () => {
  // const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const id = 777;

  const [valuet, setValuet] = React.useState('1');

  const handleChanget = (eventt, newValuet) => {
    setValuet(newValuet);
  };

  const [serviceList1, setServiceList1] = useState([{ service1: "" } 
  ])

  const handleServiceAdd1 = () => {
    setServiceList1([...serviceList1, { service1: "" }])
  }

  const [serviceList2, setServiceList2] = useState([{ service2: "" } 
  ])

  const handleServiceAdd2 = () => {
    setServiceList2([...serviceList2, { service2: "" }])
  }

  const [serviceList3, setServiceList3] = useState([{ service3: "" } 
  ])

  const handleServiceAdd3 = () => {
    setServiceList3([...serviceList3, { service3: "" }])
  }

  const [serviceList4, setServiceList4] = useState([{ service4: "" } 
  ])

  const handleServiceAdd4 = () => {
    setServiceList4([...serviceList4, { service4: "" }])
  }

  const [serviceList5, setServiceList5] = useState([{ service5: "" } 
  ])

  const handleServiceAdd5 = () => {
    setServiceList5([...serviceList5, { service5: "" }])
  }

  const [serviceList6, setServiceList6] = useState([{ service6: "" } 
  ])

  const handleServiceAdd6 = () => {
    setServiceList6([...serviceList6, { service6: "" }])
  }

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `SeviceProvider/dashboard`; 
    navigate(path);
  }
  
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "ServiceProvider");

    return () => setDirection(dispatch, "ltr");
  }, []);
  // const { sales, tasks } = reportsLineChartData;
  

  const [formValues, setFormValues] = useState([
    {
      service_provider_id: "null",
      service_type: "",
      package_name: "",
      package_description: "",
      package_price: "",
    },
  ]);

  const handleChange = (i, e) => {
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
    alert(JSON.stringify(formValues[0].package_name));
    const formValues2 = JSON.stringify(formValues);
    console.log(formValues2);
    // for (let i = 0; i < JSON.stringify(formValues).length; i++) {
    const params = {
      service_provider_id: formValues[0].service_provider_id,
      service_type: formValues[0].service_type,
      package_name: formValues[0].package_name,
      package_description: formValues[0].package_description,
      package_price: formValues[0].package_price,
      // banquet_id: JSON.stringify(formValues[0].banquet_id),
    };
    // formValues.reset;
    // setFormValues('');
    // console.log(params);
    axios.post("http://localhost:3001/ServiceProvider/register_request_2", params).then((res) => {
      console.log("sucess");
      console.log(res);
    });
    // }
    setFormValues;
  };

  return (
    <SPRRCoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h5" fontWeight="medium" color="white" mt={1}>
            Register as a Service Provider with us!
          </MDTypography>
          <MDTypography display="block" variant="button" color="white" my={1}>
            Fill the form and send the registration request to our Manager.
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit}>
            {/* <form onSubmit={handleSubmit}> */}    
            <MDBox mb={3}>
              <MDTypography variant="body2" fontWeight="bold" color="black" mt={5}>
                Select the service types you provide...
              </MDTypography>
              <Grid container spacing={1} mt={2}>
              {formValues.map((element, index) => (
                <> 
                  <Box sx={{ width: '100%', typography: 'body1' }}>
                   <TabContext value={valuet}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChanget} aria-label="lab API tabs example">
                      <Tab label="Ashtaka" value="1" />
                      <Tab label="Dance Teams" value="2" />
                      <Tab label="Wedding Cars" value="3" />
                      <Tab label="Jayamangala Gatha" value="4" />
                      <Tab label="Music Bands" value="5" />
                      <Tab label="Fire Works" value="6" />
                    </TabList>
                    </Box>
              <TabPanel value="1">
                    <MDBox
              variant="gradient"
              bgColor="Light"
              borderRadius="lg"
              borderColor="info"
              coloredShadow="success"
              mx={0}
              mt={3}
              p={1}
              mb={1}
              textAlign="left"
            >
              <Checkbox name="service_type" value="Ashtaka" onChange={(e) => handleChange(index, e)} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="black"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Select Service Type
              </MDTypography>
              {serviceList1.map((element1, index1) => (
              <MDBox key={index + 1}>
                {/* {service_type:} */}
              <MDBox mb={1}>
                 <MDInput type="text" value={element.package_name || ""} onChange={(e) => handleChange(index, e)} label="Package Name" name="package_name" variant="standard" fullWidth />
              </MDBox>
              <MDBox mb={1}>
                 <MDInput type="text" value={element.package_description || ""} onChange={(e) => handleChange(index, e)} label="Package Description" name="package_description" variant="standard" fullWidth /> 
              </MDBox>
              <MDBox mb={3}>
                 <MDInput type="text" value={element.package_price || ""} onChange={(e) => handleChange(index, e)} label="Package Price" name="package_price" variant="standard" fullWidth />
              </MDBox>
              <MDButton variant="gradient" color="info" type="submit" fullWidth onClick={handleServiceAdd1}>
                  Add Package
              </MDButton>
              </MDBox>
              ))}
              {/* <MDButton variant="gradient" color="secondary" type="button">
                  New Package
              </MDButton>   */}
            </MDBox>
            </TabPanel>
            <TabPanel value="2">          
            <MDBox
              variant="gradient"
              bgColor="Light"
              borderRadius="lg"
              borderColor="info"
              coloredShadow="success"
              mx={0}
              mt={3}
              p={1}
              mb={1}
              textAlign="left"
            >
              <Checkbox name="service_type" value="Dance Teams" onChange={(e) => handleChange(index, e)} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="black"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Select Service Type
              </MDTypography>
              {serviceList2.map((element1, index1) => (
              <MDBox key={index + 2}>
                {/* {service_type:} */}
                <MDBox mb={1}>
                <MDInput type="text" value={element.package_name || ""} onChange={(e) => handleChange(index, e)} label="Package Name" name="package_name" variant="standard" fullWidth />
              </MDBox>
              <MDBox mb={1}>
                 <MDInput type="text" value={element.package_description || ""} onChange={(e) => handleChange(index, e)} label="Package Description" name="package_description" variant="standard" fullWidth />
              </MDBox>
              <MDBox mb={3}>
                <MDInput type="text" value={element.package_price || ""} onChange={(e) => handleChange(index, e)} label="Package Price" name="package_price" variant="standard" fullWidth />
              </MDBox>
              <MDButton variant="gradient" color="info" type="submit" fullWidth onClick={handleServiceAdd2}>
                  Add Package
              </MDButton>
              </MDBox>
              ))}
              {/* <MDButton variant="gradient" color="secondary" type="button">
                  New Package
              </MDButton>   */}
            </MDBox>
            </TabPanel>
            <TabPanel value="3">          
            <MDBox
              variant="gradient"
              bgColor="Light"
              borderRadius="lg"
              borderColor="info"
              coloredShadow="success"
              mx={0}
              mt={3}
              p={1}
              mb={1}
              textAlign="left"
            >
              <Checkbox name="service_type" value="Wedding Cars" onChange={(e) => handleChange(index, e)} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="black"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Select Service Type
              </MDTypography>
              {serviceList3.map((element1, index1) => (
              <MDBox key={index + 3}>
                {/* {service_type:} */}
              <MDBox mb={1}>
                 <MDInput type="text" value={element.package_name || ""} onChange={(e) => handleChange(index, e)} label="Package Name" name="package_name" variant="standard" fullWidth />
              </MDBox>
              <MDBox mb={1}>
                 <MDInput type="text" value={element.package_description || ""} onChange={(e) => handleChange(index, e)} label="Package Description" name="package_description" variant="standard" fullWidth /> 
              </MDBox>
              <MDBox mb={3}>
                 <MDInput type="text" value={element.package_price || ""} onChange={(e) => handleChange(index, e)} label="Package Price" name="package_price" variant="standard" fullWidth />
              </MDBox>
              <MDButton variant="gradient" color="info" type="submit" fullWidth onClick={handleServiceAdd3}>
                  Add Package
              </MDButton>
              </MDBox>
              ))}
              {/* <MDButton variant="gradient" color="secondary" type="button" >
                  New Package
              </MDButton>   */}
            </MDBox>
            </TabPanel>
            <TabPanel value="4">          
            <MDBox
              variant="gradient"
              bgColor="Light"
              borderRadius="lg"
              borderColor="info"
              coloredShadow="success"
              mx={0}
              mt={3}
              p={1}
              mb={1}
              textAlign="left"
            >
              <Checkbox name="service_type" value="Jayamangala Gatha" onChange={(e) => handleChange(index, e)} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="black"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Select Service Type
              </MDTypography>
              {serviceList4.map((element1, index1) => (
              <MDBox key={index + 4}>
                {/* {service_type:} */}
              <MDBox mb={1}>
                 <MDInput type="text" value={element.package_name || ""} onChange={(e) => handleChange(index, e)} label="Package Name" name="package_name" variant="standard" fullWidth />
              </MDBox>
              <MDBox mb={1}>
                 <MDInput type="text" value={element.package_description || ""} onChange={(e) => handleChange(index, e)} label="Package Description" name="package_description" variant="standard" fullWidth /> 
              </MDBox>
              <MDBox mb={3}>
                 <MDInput type="text" value={element.package_price || ""} onChange={(e) => handleChange(index, e)} label="Package Price" name="package_price" variant="standard" fullWidth />
              </MDBox>
              <MDButton variant="gradient" color="info" type="submit" fullWidth onClick={handleServiceAdd4}> 
                  Add Package
              </MDButton>
              </MDBox>
              ))}
              {/* <MDButton variant="gradient" color="secondary" type="button" >
                  New Package
              </MDButton>   */}
            </MDBox>
            </TabPanel>
            <TabPanel value="5">          
            <MDBox
              variant="gradient"
              bgColor="Light"
              borderRadius="lg"
              borderColor="info"
              coloredShadow="success"
              mx={0}
              mt={3}
              p={1}
              mb={1}
              textAlign="left"
            >
              <Checkbox name="service_type" value="Music Bands" onChange={(e) => handleChange(index, e)} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="black"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Select Service Type
              </MDTypography>
              {serviceList5.map((element1, index1) => (
              <MDBox key={index + 5}>
                {/* {service_type:} */}
              <MDBox mb={1}>
                 <MDInput type="text" value={element.package_name || ""} onChange={(e) => handleChange(index, e)} label="Package Name" name="package_name" variant="standard" fullWidth />
              </MDBox>
              <MDBox mb={1}>
                 <MDInput type="text" value={element.package_description || ""} onChange={(e) => handleChange(index, e)} label="Package Description" name="package_description" variant="standard" fullWidth /> 
              </MDBox>
              <MDBox mb={3}>
                 <MDInput type="text" value={element.package_price || ""} onChange={(e) => handleChange(index, e)} label="Package Price" name="package_price" variant="standard" fullWidth />
              </MDBox>
              <MDButton variant="gradient" color="info" type="submit" fullWidth onClick={handleServiceAdd5}>
                  Add Package
              </MDButton>
              </MDBox>
              ))}
              {/* <MDButton variant="gradient" color="secondary" type="button">
                  New Package
              </MDButton>   */}
            </MDBox>
            </TabPanel>
            <TabPanel value="6">          
            <MDBox
              variant="gradient"
              bgColor="Light"
              borderRadius="lg"
              borderColor="info"
              coloredShadow="success"
              mx={0}
              mt={3}
              p={1}
              mb={1}
              textAlign="left"
            >
              <Checkbox name="service_type" value="Fire Works" onChange={(e) => handleChange(index, e)} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="black"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Select Service Type
              </MDTypography>
              {serviceList6.map((element1, index1) => (
              <MDBox key={index + 6}>
                {/* {service_type:} */}
              <MDBox mb={1}>
                 <MDInput type="text" value={element.package_name || ""} onChange={(e) => handleChange(index, e)} label="Package Name" name="package_name" variant="standard" fullWidth />
              </MDBox>
              <MDBox mb={1}>
                 <MDInput type="text" value={element.package_description || ""} onChange={(e) => handleChange(index, e)} label="Package Description" name="package_description" variant="standard" fullWidth /> 
              </MDBox>
              <MDBox mb={3}>
                 <MDInput type="text" value={element.package_price || ""} onChange={(e) => handleChange(index, e)} label="Package Price" name="package_price" variant="standard" fullWidth />
              </MDBox>
              <MDButton variant="gradient" color="info" type="submit" fullWidth onClick={handleServiceAdd6}>
                  Add Package
              </MDButton>
              </MDBox>
              ))}
              {/* <MDButton variant="gradient" color="secondary" type="button" >
                  New Package
              </MDButton>   */}
            </MDBox>
            </TabPanel>
                   </TabContext>
                  </Box>
              
                </>
              ))}
              </Grid>
            </MDBox>
             {/* <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">Service Type</FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                  </RadioGroup>
                </FormControl> */}
                  {/* <MDBox mb={1} key={1 + id}>
                    <MDInput
                      type="text"
                      label="ashtaka"
                      variant="standard"
                      name="ashtaka"
                      value={element.name || ""}
 onChange={(e) => handleChange(index, e)}
                      fullWidth
                    />
                  </MDBox> */}
              {/* <Grid item xs={12} md={2} xl={6} p={1}>
                  <MDBadge badgeContent="Ashtaka" size="lg" pt={1} px={1} color="info" container />
                </Grid>
                <Grid item xs={12} md={2} xl={6} p={1}>
                  <MDBadge
                    badgeContent="Dance Teams"
                    size="lg"
                    pt={1}
                    px={1}
                    color="info"
                    container
                  />
                </Grid>
                <Grid item xs={12} md={2} xl={6} p={1}>
                  <MDBadge
                    badgeContent="Wedding Cars"
                    size="lg"
                    pt={1}
                    px={1}
                    color="info"
                    container
                  />
                </Grid>
                <Grid item xs={12} md={2} xl={6} p={1}>
                  <MDBadge
                    badgeContent="Jayamangala Gatha"
                    size="lg"
                    pt={1}
                    px={1}
                    color="info"
                    container
                  />
                </Grid>
                <Grid item xs={12} md={2} xl={6} p={1}>
                  <MDBadge
                    badgeContent="Music Bands"
                    size="lg"
                    pt={1}
                    px={1}
                    color="info"
                    container
                  />
                </Grid>
                <Grid item xs={12} md={2} xl={6} p={1}>
                  <MDBadge
                    badgeContent="Fireworks"
                    size="lg"
                    pt={1}
                    px={1}
                    color="info"
                    container
                  />
                </Grid> */}
             {/* <Grid container spacing={1} mt={2}>
                <Grid item p={1}>
                  <MDBadge badgeContent="Bronze" size="sm" pt={1} px={1} color="dark" container />
                </Grid>
                <Grid item p={1}>
                  <MDBadge badgeContent="Silver" size="sm" pt={1} px={1} color="dark" container />
                </Grid>
                <Grid item p={1}>
                  <MDBadge badgeContent="+" size="sm" pt={1} px={1} color="dark" container />
                </Grid>
              </Grid> */}
            {/* <MDBox mt={5} mb={3}>
              <MDInput type="password" label="Enter Password" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={3}>
              <MDInput type="password" label="Confirm Password" variant="standard" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox value="/" />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox> */}
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Already have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Log In
                </MDTypography>
              </MDTypography>
              <MDButton variant="contained" color="dark" type="return" fullWidth onClick={routeChange}>
                  Finish
              </MDButton>
            </MDBox>
            {/* </form> */}
          </MDBox>
        </MDBox>
      </Card>
    </SPRRCoverLayout>
  );
};

export default EventForm2;
