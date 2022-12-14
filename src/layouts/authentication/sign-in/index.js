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
//
//import { useState } from "react";

// react-router-dom components
import { Link, Navigate } from "react-router-dom";
import { Formik } from 'formik';
import * as Yup from 'yup';

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import { Fragment, useEffect } from 'react';

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import API from '../../../services/baseURL';
import options from '../../../services/functions';
const myUrl = (window.location.protocol + "//" + window.location.hostname + ":" + window.location.port).split("/s/")[0];

const getItemList = async event => {

  const password = document.getElementById("password").value
  const email = document.getElementById("email").value
  const response = await API.get(`systemlogin`, {
    params: {
      email: email,
      password: password
    }
  }, options);
  console.log("dataaaaaaa")
  // console.log(response.data)
  // alert(response.data.data2)
  navigate(response.data.data1)
  localStorage.setItem("id", response.data.data2)
  localStorage.setItem("id1", response.data.data2)

  return response.data.data1

};

function navigate(resoponse) {
  if (resoponse == '1') {
    window.location.href = myUrl + '/' + 'chef' + '/' + 'dashboard';
  }
  else if (resoponse == '2') {
    window.location.href = myUrl + '/' + 'client' + '/' + 'dashboard';
  }
  else if (resoponse == '3') {
    window.location.href = myUrl + '/' + 'manager' + '/' + 'dashboard';
  }
  else if (resoponse == '0') {
    window.location.href = myUrl + '/' + 'ServiceProvider' + '/' + 'dashboard';
  }
  else if (resoponse == '5') {
    window.location.href = myUrl + '/' + 'eventplanner' + '/' + 'dashboard_EP';
  }
  else if (resoponse == '7') {
    window.location.href = myUrl + '/' + 'ServiceProvider' + '/' + 'dashboard';
  }
  else if (resoponse == '8') {
    window.location.href = myUrl + '/' + 'owner' + '/' + 'dashboard';
  }

  // else if (resoponse == '4') {
  //   window.location.href = myUrl + '/' + 'chef' + '/' + 'dashboard';
  // }
}

function Basic() {
  const [rememberMe, setRememberMe] = useState(false);
  const [itemList, setItemList] = useState(null);
  const [email, setemail] = useState(null)
  const [password, setpassword] = useState(null)

  function handleChange(event) {
    setemail(event.target.value);
  }

  function handleChanget(event) {
    setpassword(event.target.value);
  }

  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const search = () => validationSchema();
  const initialValues = {
    email: 'jason@ui-lib.com',
    password: 'dummyPass',
    remember: true,
  };

  return (
    <BasicLayout image={bgImage}>

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
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Sign in
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="email" id="email" label="Email" value={email} onChange={handleChange} fullWidth />

            </MDBox>
            <MDBox mb={2}>
              <MDInput type="password" id="password" name="password" value={password} onChange={handleChanget} label="Password" fullWidth />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Switch checked={rememberMe} onChange={handleSetRememberMe} />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                onClick={handleSetRememberMe}
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;Remember me
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton onClick={() => getItemList()} variant="gradient" color="info" fullWidth>
                sign in
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text" >
                Don&apos;t have an account?{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Sign up
                </MDTypography>
              </MDTypography>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;


