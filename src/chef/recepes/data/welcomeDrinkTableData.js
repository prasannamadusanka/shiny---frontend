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
import mixfruit from "assets/images/chef/mixfruitjuice.jpg";
import Vintage_champagne_cocktails from "assets/images/chef/Vintage champagne cocktails.jpg";
import Iced_tea from "assets/images/chef/Iced tea.jpg";
import punch_bowl from "assets/images/chef/punch bowl.jpg";
import Pimms from "assets/images/chef/Pimms.jpg";
import Mojitos from "assets/images/chef/Mojitos.jpg";


import { Link } from "react-router-dom";

export default function data() {
  const WelcomeDrink = ({ image, name, description }) => (
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
    ],

    rows: [
      {
        name: <WelcomeDrink image={mixfruit} name="Mixfruit juice" description="" />,
        action: (
          <Link to="/chef/recepes/recepe">
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            View Recepe
          </MDTypography>
          </Link>
        ),
      },
      {
        name: <WelcomeDrink image={Vintage_champagne_cocktails} name="Vintage champagne cocktails" description="" />,
        action: (
          <Link to="/chef/recepes/recepe">
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            View Recepe
          </MDTypography>
          </Link>
        ),
      },
      {
        name: <WelcomeDrink image={Iced_tea} name="Iced tea" description="" />,
        action: (
          <Link to="/chef/recepes/recepe">
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            View Recepe
          </MDTypography>
          </Link>
        ),
      },
      {
        name: <WelcomeDrink image={punch_bowl} name="punch bowl" description="" />,
        action: (
          <Link to="/chef/recepes/recepe">
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            View Recepe
          </MDTypography>
          </Link>
        ),
      },
      {
        name: <WelcomeDrink image={Pimms} name="Pimms" description="" />,
        action: (
          <Link to="/chef/recepes/recepe">
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            View Recepe
          </MDTypography>
          </Link>
        ),
      },
      {
        name: <WelcomeDrink image={Mojitos} name="Mojitos" description="" />,
        action: (
          <Link to="/chef/recepes/recepe">
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            View Recepe
          </MDTypography>
          </Link>
        ),
      },
    ],
  };
}
