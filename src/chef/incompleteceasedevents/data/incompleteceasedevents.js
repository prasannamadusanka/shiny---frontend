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

import { Link } from "react-router-dom";

export default function data() {

  return {
    columns: [
      { Header: "overdue Days", accessor: "overdue_Days", align: "left" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        overdue_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0000/00/10
          </MDTypography>
        ),
        action: (
          <Link to="/chef/eventchef">
          <MDTypography component="a" href="#" color="info">
            <Icon>forward</Icon>
          </MDTypography>
          </Link>
        ),
      },
      {
        overdue_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0000/00/09
          </MDTypography>
        ),
        action: (
          <Link to="/chef/eventchef">
          <MDTypography component="a" href="#" color="info">
            <Icon>forward</Icon>
          </MDTypography>
          </Link>
        ),
      },
      {
        overdue_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0000/00/08
          </MDTypography>
        ),
        action: (
          <Link to="/chef/eventchef">
          <MDTypography component="a" href="#" color="info">
            <Icon>forward</Icon>
          </MDTypography>
          </Link>
        ),
      },
      {
        overdue_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0000/00/08
          </MDTypography>
        ),
        action: (
          <Link to="/chef/eventchef">
          <MDTypography component="a" href="#" color="info">
            <Icon>forward</Icon>
          </MDTypography>
          </Link>
        ),
      },
      {
        overdue_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0000/00/07
          </MDTypography>
        ),
        action: (
          <Link to="/chef/eventchef">
          <MDTypography component="a" href="#" color="info">
            <Icon>forward</Icon>
          </MDTypography>
          </Link>
        ),
      },
      {
        overdue_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0000/00/07
          </MDTypography>
        ),
        action: (
          <Link to="/chef/eventchef">
          <MDTypography component="a" href="#" color="info">
            <Icon>forward</Icon>
          </MDTypography>
          </Link>
        ),
      },
      {
        overdue_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0000/00/06
          </MDTypography>
        ),
        action: (
          <Link to="/chef/eventchef">
          <MDTypography component="a" href="#" color="info">
            <Icon>forward</Icon>
          </MDTypography>
          </Link>
        ),
      },
      {
        overdue_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0000/00/05
          </MDTypography>
        ),
        action: (
          <Link to="/chef/eventchef">
          <MDTypography component="a" href="#" color="info">
            <Icon>forward</Icon>
          </MDTypography>
          </Link>
        ),
      },
      {
        overdue_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0000/00/04
          </MDTypography>
        ),
        action: (
          <Link to="/chef/incomplete_ceased_event">
          <MDTypography component="a" href="#" color="info">
            <Icon>forward</Icon>
          </MDTypography>
          </Link>
        ),
      },
    ],
  };
}
