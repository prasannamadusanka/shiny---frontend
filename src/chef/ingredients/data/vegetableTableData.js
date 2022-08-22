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
import potato from "assets/images/chef/potato.jpg";
import beans from "assets/images/chef/beans.jpg";
import beetroot from "assets/images/chef/beetroot.jpg";
import carrot from "assets/images/chef/carrot.jpg";
import cabbage from "assets/images/chef/cabbage.jpg";
import pumkin from "assets/images/chef/pumkin.jpg";

import { Link } from "react-router-dom";

export default function data() {
  const Vegetable = ({ image, name, description }) => (
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
        name: <Vegetable image={beans} name="Beans" description="description about beans" />,
        stock: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            3 Kg
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
        name: <Vegetable image={pumkin} name="Pumkin" description="description about pumkin" />,
        stock: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            7 Kg
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
            10 Kg
          </MDTypography>
        ),
        action: (
          <MDButton href="/order" variant="text" color="info" disabled>
            Order
          </MDButton>
        ),
      },
      {
        name: <Vegetable image={beetroot} name="Beet-root" description="description about beet-root" />,
        stock: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            6 Kg
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
          <MDButton href="/order" variant="text" color="info" >
            Order
          </MDButton>
        ),
      },
      {
        name: <Vegetable image={cabbage} name="Cabbage" description="description about cabbage" />,
        stock: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            8 Kg
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
          <MDButton href="/order" variant="text" color="info" >
            Order
          </MDButton>
        ),
      },
      {
        name: <Vegetable image={carrot} name="Carrot" description="description about carrot" />,
        stock: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            5 Kg
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
            5 Kg
          </MDTypography>
        ),
        action: (
          <MDButton href="/order" variant="text" color="info" disabled>
            Order
          </MDButton>
        ),
      },
      {
        name: <Vegetable image={potato} name="Potato" description="description about potato" />,
        stock: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            2 Kg
          </MDTypography>
        ),
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="pending" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        ordered_date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        pending_qty: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            20 Kg
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
