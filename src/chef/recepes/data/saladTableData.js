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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import Shrimp_Salad from "assets/images/chef/Shrimp Salad.jpg";
import Cucumber_Salad from "assets/images/chef/Cucumber Salad.jpg";
import Pasta_Salad from "assets/images/chef/Pasta Salad.jpg";
import Fruit_Salad from "assets/images/chef/Fruit Salad.jpg";
import Berry_Salad from "assets/images/chef/Berry Salad.jpg";
import Mojitos from "assets/images/chef/Mojitos.jpg";


import { Link } from "react-router-dom";

export default function data() {
  const Salad = ({ image, name, description }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="xxl" variant="square" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{description}</MDTypography>
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "name", accessor: "name", width: "45%", align: "left" },
      { Header: "action", accessor: "action", align: "center" },
      { Header: "", accessor: "remove", align: "center" },
    ],

    rows: [
      {
        name: <Salad image={Shrimp_Salad} name="Shrimp Salad" description="" />,
        action: (
          <Link to="/chef/recepes/recepe">
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            View Recepe
          </MDTypography>
          </Link>
        ),
        remove: (
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            Remove
          </MDTypography>
        ),
      },
      {
        name: <Salad image={Cucumber_Salad} name="Cucumber Salad" description="" />,
        action: (
          <Link to="/chef/recepes/recepe">
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            View Recepe
          </MDTypography>
          </Link>
        ),
        remove: (
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            Remove
          </MDTypography>
        ),
      },
      {
        name: <Salad image={Pasta_Salad} name="Pasta Salad" description="" />,
        action: (
          <Link to="/chef/recepes/recepe">
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            View Recepe
          </MDTypography>
          </Link>
        ),
        remove: (
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            Remove
          </MDTypography>
        ),
      },
      {
        name: <Salad image={Fruit_Salad} name="Fruit Salad" description="" />,
        action: (
          <Link to="/chef/recepes/recepe">
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            View Recepe
          </MDTypography>
          </Link>
        ),
        remove: (
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            Remove
          </MDTypography>
        ),
      },
      {
        name: <Salad image={Berry_Salad} name="Berry Salad" description="" />,
        action: (
          <Link to="/chef/recepes/recepe">
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            View Recepe
          </MDTypography>
          </Link>
        ),
        remove: (
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            Remove
          </MDTypography>
        ),
      },
    ],
  };
}
