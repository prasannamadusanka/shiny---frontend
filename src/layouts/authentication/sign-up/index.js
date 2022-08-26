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
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import ReactDOM from 'react-dom';
import SignUpContainer from "./src/SignUpContainer"
import Box from "@mui/material/Box"
// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";
//import SignUpContainer from "./src/SignUpContainer"
// Images
import bgImage from "assets/images/wed.jpg";
import API from "../../../services/baseURL";
import options from "../../../services/services";

import BasicLayout from "layouts/authentication/components/BasicLayout1";
const myUrl = (window.location.protocol + "//" + window.location.hostname + ":" + window.location.port).split("/s/")[0];

// const getItemList = async event => {
//   const password = document.getElementById("Password").value
//   const email = document.getElementById("Email").value
//   const name = document.getElementById("Name").value
//   const type = document.getElementById("types").value
//   // const number = document.getElementById("Phone_number").value
//   console.log(name)
//   const response = await API.post(`systemlogin`, {

//     email: email,
//     password: password,
//     name: name,
//     type: type

//   }, options);

//   navigate(response.data.data)
//   return response.data

// };


// function navigate(resoponse) {
//   if (response) {
//     window.location.href = myUrl + '/' + 'autherization' + '/' + 'sign-in';
//   }

// }
function Cover() {
  return (
    <BasicLayout image={bgImage}>
      <MDBox lg={100} ml={2} mr={2}>
        {/* //
    //   <Card>
    //      <MDBox
    //       variant="gradient"
    //       bgColor="info"
    //       borderRadius="lg"
    //       coloredShadow="success"
    //       mx={2}
    //       mt={-3}
    //       p={3}
    //       mb={1}
    //       textAlign="center"
    //     >
    //       <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
    //         Join us today
    //       </MDTypography>
    //       <MDTypography display="block" variant="button" color="white" my={1}>
    //         Enter your email and password to register
    //       </MDTypography>
    //     </MDBox>
    //     <MDBox pt={4} pb={3} px={3}>
    //       <MDBox component="form" role="form">
    //         <MDBox mb={2}>
    //           <MDInput type="text" id="Name" label="Name" variant="standard" fullWidth />
    //         </MDBox>
    //         <MDBox mb={2}>
    //           <MDInput type="email" id="Email" label="Email" variant="standard" fullWidth />
    //         </MDBox>
    //         <MDBox mb={2}>
    //           <select id="types">
    //             <option value="1">Client</option>
    //             <option value="2">Cheff</option>
    //             <option value="3">Provider</option>
    //           </select>
    //         </MDBox>
    //          <MDBox mb={2}>
    //           <MDInput type="number" id="Phone_number" label="Phone_number" variant="standard" fullWidth />
    //         </MDBox>
    //          <MDBox mb={2}>
    //           <MDInput type="Password" id="Password" label="Password" variant="standard" fullWidth />
    //         </MDBox>
    //         <MDBox display="flex" alignItems="center" ml={-1}>
    //           <Checkbox />
    //           <MDTypography
    //             variant="button"
    //             fontWeight="regular"
    //             color="text"
    //             sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
    //           >
    //             &nbsp;&nbsp;I agree the&nbsp;
    //           </MDTypography>
    //           <MDTypography
    //             component="a"
    //             href="#"
    //             variant="button"
    //             fontWeight="bold"
    //             color="info"
    //             textGradient
    //           >
    //             Terms and Conditions
    //           </MDTypography>
    //         </MDBox>
    //         <MDBox mt={4} mb={1}>
    //           <MDButton onClick={() => getItemList()} variant="gradient" color="info" fullWidth>
    //             sign in
    //           </MDButton>
    //         </MDBox>
    //         <MDBox mt={3} mb={1} textAlign="center">
    //           <MDTypography variant="button" color="text">
    //             Already have an account?{" "}
    //             <MDTypography
    //               component={Link}
    //               to="/authentication/sign-in"
    //               variant="button"
    //               color="info"
    //               fontWeight="medium"
    //               textGradient
    //             >
    //               Sign In
    //             </MDTypography>
    //           </MDTypography>
    //         </MDBox>
    //       </MDBox>
    //     </MDBox> 
    //      
    //   </Card>
    // </CoverLayout> */}
        <SignUpContainer />
      </MDBox>
    </BasicLayout>
  );
}

export default Cover;
