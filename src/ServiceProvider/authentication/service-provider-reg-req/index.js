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
import MDBadge from "components/MDBadge";

// Authentication layout components
import SPRRCoverLayout from "ServiceProvider/authentication/components/SPRRCoverLayout";

// Images
import bgImage from "assets/images/service_provider/cover1.jpg";

// import { useState } from "react";
import axios from "axios";
// error if {axios}
import { useMaterialUIController, setDirection } from "context";
// import { element } from "prop-types";

const EventForm = () => {
  // const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
  const id = 777;

  // let navigate = useNavigate(); 
  // const routeChange = () =>{ 
  //   let path = `ServiceProvider/authentication/service-provider-reg-req-nxt`; 
  //   navigate(path);
  // }

  const [, dispatch] = useMaterialUIController();
  
  useEffect(() => {
    setDirection(dispatch, "ServiceProvider");

    return () => setDirection(dispatch, "ltr");
  }, []);

  // const { sales, tasks } = reportsLineChartData;

  const [formValues, setFormValues] = useState([
    {
      service_provider_id: "null",
      name: "",
      business_name: "",
      address: "",
      email: "",
      contact_no: "",
      credit_card_no: "",
      password: "SPRRtemp",
      // banquet_id: "",
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
    alert(JSON.stringify(formValues[0].name));
    const formValues2 = JSON.stringify(formValues);
    console.log(formValues2);

    // for (let i = 0; i < JSON.stringify(formValues).length; i++) {
    const params = {
      service_provider_id: formValues[0].service_provider_id,
      name: formValues[0].name,
      business_name: formValues[0].business_name,
      address: formValues[0].address,
      email: formValues[0].email,
      contact_no: formValues[0].contact_no,
      credit_card_no: formValues[0].credit_card_no,
      password: formValues[0].password,
      // banquet_id: JSON.stringify(formValues[0].banquet_id),
    };
    // console.log(params);
    axios.post("http://localhost:3001/ServiceProvider/register_request", params).then((res) => {
      console.log("sucess");
      console.log(res);
    });
    // }
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
            {formValues.map((element, index) => (
              <>
                <MDBox mb={1} key={1 + id}>
                  <MDInput
                    type="text"
                    label="Your Name"
                    variant="standard"
                    name="name"
                    value={element.name || ""}
                    onChange={(e) => handleChange(index, e)}
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={1} key={2 + id}>
                  <MDInput
                    type="text"
                    label="Name of Business"
                    variant="standard"
                    name="business_name"
                    value={element.business_name || ""}
                    onChange={(e) => handleChange(index, e)}
                    // key={date}
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={1} key={3 + id}>
                  <MDInput
                    type="text"
                    label="Address"
                    variant="standard"
                    name="address"
                    value={element.address || ""}
                    onChange={(e) => handleChange(index, e)}
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={1} key={4 + id}>
                  <MDInput
                    type="email"
                    label="Email Address"
                    variant="standard"
                    name="email"
                    value={element.email || ""}
                    onChange={(e) => handleChange(index, e)}
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={1} key={5 + id}>
                  <MDInput
                    type="text"
                    label="Telephone No."
                    variant="standard"
                    name="contact_no"
                    value={element.contact_no || ""}
                    onChange={(e) => handleChange(index, e)}
                    fullWidth
                  />
                </MDBox>
                <MDBox mb={2} key={6 + id}>
                  <MDInput
                    type="text"
                    label="Credit Card No."
                    variant="standard"
                    name="credit_card_no"
                    value={element.credit_card_no || ""}
                    onChange={(e) => handleChange(index, e)}
                    fullWidth
                  />
                </MDBox>
              </>
            ))}
            {/* <MDBox mb={3}>
              <MDTypography variant="body2" fontWeight="small" color="grey" mt={5}>
                Select the service types you provide...
              </MDTypography>
              <Grid container spacing={1} mt={2}>
                <Grid item xs={12} md={2} xl={6} p={1}>
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
                </Grid>
              </Grid>
            </MDBox>
            <MDBox
              variant="gradient"
              bgColor="secondary"
              borderRadius="lg"
              coloredShadow="success"
              mx={0}
              mt={3}
              p={1}
              mb={1}
              textAlign="left"
            >
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="white"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Select Service Type
              </MDTypography>
              <MDBox mb={1}>
                <MDInput type="text" label="Package Name" variant="standard" fullWidth />
              </MDBox>
              <MDBox mb={1}>
                <MDInput type="text" label="Package Description" variant="standard" fullWidth />
              </MDBox>
              <MDBox mb={3}>
                <MDInput type="text" label="Package Price" variant="standard" fullWidth />
              </MDBox>
              <Grid container spacing={1} mt={2}>
                <Grid item p={1}>
                  <MDBadge badgeContent="Bronze" size="sm" pt={1} px={1} color="dark" container />
                </Grid>
                <Grid item p={1}>
                  <MDBadge badgeContent="Silver" size="sm" pt={1} px={1} color="dark" container />
                </Grid>
                <Grid item p={1}>
                  <MDBadge badgeContent="+" size="sm" pt={1} px={1} color="dark" container />
                </Grid>
              </Grid>
            </MDBox> */}
            <MDBox mt={5} mb={3}>
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
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" type="submit" fullWidth>
                {/* <button className="button submit" type="submit">
                  Send Request
                </button> */}
                Send Request
              </MDButton>
            </MDBox>
            <MDBox mt={4} mb={1}>
            <Link to="/authentication/service-provider-reg-req-nxt">
              <MDButton variant="gradient" color="dark" type="button" fullWidth>
                Next
              </MDButton>
            </Link>
            </MDBox>
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
            </MDBox>
            {/* </form> */}
          </MDBox>
        </MDBox>
      </Card>
    </SPRRCoverLayout>
  );
};

export default EventForm;
