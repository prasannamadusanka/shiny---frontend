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
import MDButton from "components/MDButton";

// Images
import coconutoil from "assets/images/chef/coconutoil.jpg";
import ghee from "assets/images/chef/ghee.webp";
import grapesseedoil from "assets/images/chef/grapesseedoil.webp";
import peanutoil from "assets/images/chef/peanutoil.jpg";
import olliveoil from "assets/images/chef/olliveoil.jpg";

export default function data() {
  const Oil = ({ image, name, description }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{description}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "name", accessor: "name", width: "45%", align: "left" },
      { Header: "stock", accessor: "stock", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "ordered date", accessor: "ordered_date", align: "center" },
      { Header: "pending Qty", accessor: "pending_qty", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        name: <Oil image={coconutoil} name="coconutoil" description="description about coconutoil" />,
        stock: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3 L
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="receieved" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ordered_date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            -
          </MDTypography>
        ),
        pending_qty: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            -
          </MDTypography>
        ),
        action: (
          <MDButton href="/order" variant="text" color="info">
              Order
            </MDButton>
        ),
      },
      {
        name: <Oil image={olliveoil} name="olliveoil" description="description about olliveoil" />,
        stock: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3 L
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="pending" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        ordered_date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        pending_qty: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            10 L
          </MDTypography>
        ),
        action: (
          <MDButton href="/order" variant="text" color="info" disabled>
            Order
          </MDButton>
        ),
      },
      {
        name: <Oil image={ghee} name="ghee" description="description about ghee" />,
        stock: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6 L
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="receieved" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ordered_date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            -
          </MDTypography>
        ),
        pending_qty: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            -
          </MDTypography>
        ),
        action: (
          <MDButton href="/order" variant="text" color="info">
              Order
            </MDButton>
        ),
      },
      {
        name: <Oil image={peanutoil} name="peanutoil" description="description about peanutoil" />,
        stock: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8 L
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="receieved" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        ordered_date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            -
          </MDTypography>
        ),
        pending_qty: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            -
          </MDTypography>
        ),
        action: (
          <MDButton href="/order" variant="text" color="info">
              Order
            </MDButton>
        ),
      },
      {
        name: <Oil image={grapesseedoil} name="grapesseedoil" description="description about grapesseedoil" />,
        stock: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            5 L
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="pending" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        ordered_date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        pending_qty: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            5 L
          </MDTypography>
        ),
        action: (
          <MDButton href="/order" variant="text" color="info" disabled>
            Order
          </MDButton>
        ),
      },
      
    ],
  };
}
