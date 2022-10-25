/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

import { Link } from "react-router-dom";

export default function data() {
  

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="18rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Date", accessor: "Remaining_Days", align: "left" },
      { Header: "Remaining Days", accessor: "Remaining", align: "center" },
      // { Header: "completion", accessor: "completion", align: "left" },
      { Header: "", accessor: "action", align: "center" },
    ],

    rows: [
      {
        Remaining_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            2022-10-28
          </MDTypography>
        ),
        Remaining: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            02
          </MDTypography>
        ),
        // completion: <Progress color="success" value={50} />,
        action: (
          <Link to="/chef/eventchef">
          <MDTypography component="a" href="#" color="info" variant="h6">
            {/* <Icon>forward</Icon> */}predict
          </MDTypography>
          </Link>
        ),
      },
      {
        Remaining_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            2022-10-28
          </MDTypography>
        ),
        Remaining: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            02
          </MDTypography>
        ),
        // completion: <Progress color="success" value={0} />,
        action: (
          <MDTypography component="a" href="#" color="info" variant="h6">
            {/* <Icon>forward</Icon> */}predict
          </MDTypography>
        ),
      },
      {
        Remaining_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            2022-10-30
          </MDTypography>
        ),
        Remaining: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            04
          </MDTypography>
        ),
        // completion: <Progress color="success" value={50} />,
        action: (
          <MDTypography component="a" href="#" color="info" variant="h6">
            {/* <Icon>forward</Icon> */}predict
          </MDTypography>
        ),
      },
      {
        Remaining_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            2022-10-31
          </MDTypography>
        ),
        Remaining: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            05
          </MDTypography>
        ),
        // completion: <Progress color="success" value={50} />,
        action: (
          <MDTypography component="a" href="#" color="info" variant="h6">
            {/* <Icon>forward</Icon> */}predict
          </MDTypography>
        ),
      },
      
      {
        Remaining_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            2022-10-31
          </MDTypography>
        ),
        Remaining: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            05
          </MDTypography>
        ),
        // completion: <Progress color="success" value={0} />,
        action: (
          <MDTypography component="a" href="#" color="info" variant="h6">
            {/* <Icon>forward</Icon> */}predict
          </MDTypography>
        ),
      },
      
      {
        Remaining_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            2022-11-01
          </MDTypography>
        ),
        Remaining: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            06
          </MDTypography>
        ),
        // completion: <Progress color="success" value={0} />,
        action: (
          <MDTypography component="a" href="#" color="info" variant="h6">
            {/* <Icon>forward</Icon> */}predict
          </MDTypography>
        ),
      },
      
      {
        Remaining_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            2022-11-01
          </MDTypography>
        ),
        Remaining: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            06
          </MDTypography>
        ),
        // completion: <Progress color="success" value={0} />,
        action: (
          <MDTypography component="a" href="#" color="info" variant="h6">
            {/* <Icon>forward</Icon> */}predict
          </MDTypography>
        ),
      },
      
      {
        Remaining_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            2022-11-02
          </MDTypography>
        ),
        Remaining: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            07
          </MDTypography>
        ),
        // completion: <Progress color="success" value={50} />,
        action: (
          <MDTypography component="a" href="#" color="info" variant="h6">
            {/* <Icon>forward</Icon> */}predict
          </MDTypography>
        ),
      },
    ],
  };
}
