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
import persian_wedding_rice from "assets/images/chef/persian wedding rice.jpg";
import Fruit_And_Nut_Rice from "assets/images/chef/Fruit and Nut Rice.jpg";
import Persian_Jeweled_Rice from "assets/images/chef/Persian Jeweled Rice.jpg";
import Lemon_Rice from "assets/images/chef/Lemon Rice.jpg";


import { Link } from "react-router-dom";

export default function data() {
  const RiceDish = ({ image, name, description }) => (
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
        name: <RiceDish image={persian_wedding_rice} name="persian wedding rice" description="" />,
        action: (
          <Link to="/chef/recepes/recepe">
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            View Recepe
          </MDTypography>
          </Link>
        ),
      },
      {
        name: <RiceDish image={Persian_Jeweled_Rice} name="Persian Jeweled Rice" description="" />,
        action: (
          <Link to="/recepe">
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            View Recepe
          </MDTypography>
          </Link>
        ),
      },
      {
        name: <RiceDish image={Fruit_And_Nut_Rice} name="Fruit and Nut Rice" description="" />,
        action: (
          <Link to="/chef/recepes/recepe">
          <MDTypography component="a" href="#" variant="caption" color="info" fontWeight="medium">
            View Recepe
          </MDTypography>
          </Link>
        ),
      },
      {
        name: <RiceDish image={Lemon_Rice} name="Lemon Rice" description="" />,
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
