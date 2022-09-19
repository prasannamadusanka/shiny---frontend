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

//
import API from '../../../services/baseURL';
import { useState, useEffect} from "react";

// Images
import orange from "assets/images/chef/orange.jpg";
import avacado from "assets/images/chef/avacado.jpeg";
import mango from "assets/images/chef/mango.jpg";
import apple from "assets/images/chef/apple.jpg";
import banana from "assets/images/chef/banana.webp";



export const getIngredients = async event => {
  const response = await API.get('chef/view_ingredients');
  console.log(response.data.ingredients)
  return response.data.ingredients;
};


export default function data() {



  const [ingredient, setingredient] = useState([]);
  useEffect(() => {
    getIngredients().then(data => {
      console.log(data)
      setingredient(data)
        console.log(ingredient)
    }).catch(err => {

    })
  }, []);

  


  const Fruit = ({ image, name, description }) => (
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



  return {
    columns: [
      { Header: "name", accessor: "name", width: "45%", align: "left" },
      { Header: "stock", accessor: "stock", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "ordered date", accessor: "ordered_date", align: "center" },
      { Header: "pending Qty", accessor: "pending_qty", align: "center" },
      { Header: "", accessor: "action", align: "center" },
    ],

    rows: [
      {
        name: <Fruit image={orange} name="Orange" description="description about orange" />,
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
              Remove
          </MDButton>
        ),
      },
      {
        name: <Fruit image={banana} name="Banana" description="description about banana" />,
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
            Remove
          </MDButton>
        ),
      },
      {
        name: <Fruit image={avacado} name="Avacado" description="description about avacado" />,
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
          <MDButton href="/order" variant="text" color="info">
              Remove
            </MDButton>
        ),
      },
      {
        name: <Fruit image={apple} name="Apple" description="description about apple" />,
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
          <MDButton href="/order" variant="text" color="info">
              Remove
            </MDButton>
        ),
      },
      {
        name: <Fruit image={mango} name="Mango" description="description about mango" />,
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
            Remove
          </MDButton>
        ),
      },
      
    ],
  };
}
