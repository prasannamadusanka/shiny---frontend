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
import MDButton from "components/MDButton";
//import 'semantic-ui-css/semantic.min.css'
import Select from 'react-select'
// Images
import settyback1 from "assets/images/settyBack/settyback1.jpg"
import poruwa1 from "assets/images/poruwa/poruwa-01.jpg";
import entrance1 from "assets/images/entrance/entrance1.PNG";
import table1 from "assets/images/table/deco1.jpg";
const options = [
  { value: 'chocolate', label: <MDBox display="flex" alignItems="center" lineHeight={1}><MDAvatar size="sm" variant="rounded" style={{float:'left', marginRight:'3px'}}src={poruwa1} /><MDTypography variant="button" fontWeight="medium" ml={1} mr={1} lineHeight={1}>Poruwa traditional</MDTypography><a href="#"><MDTypography variant="button"
  color="info" fontWeight="medium"
  textGradient>View more</MDTypography></a></MDBox>},
  { value: 'chocolate1', label: <MDBox display="flex" alignItems="center" lineHeight={1}><MDAvatar size="sm" variant="rounded" style={{float:'left', marginRight:'3px'}}src={poruwa1} /><MDTypography variant="button" fontWeight="medium" ml={1} mr={1} lineHeight={1}>Chocolate</MDTypography><a href="#"><MDTypography variant="button"
  color="info" fontWeight="medium"
  textGradient>View more</MDTypography></a></MDBox>},
 
]


export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

 

  return {
    columns: [
        { Header: "Service Id", accessor: "id", align: "left" },
        { Header: "Description", accessor: "description", align: "left" },
        { Header: "Subscribed date", accessor: "date", align: "left" },

        { Header: "Rate", accessor: "rate", align: "left" },
      { Header: "Quantity", accessor: "quantity", width: "50%", align: "left" },
      { Header: "Total amount", accessor: "amount", align: "left" },

     
    ],

    rows: [
      {
      
      theme: <div style={{width: '400px'}}> <Select  
      width='400px'
      height="80px"
   
    
      placeholder="Select Poruwa"
      menuColor='red'options={options} /></div>,
        id: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            Poruwa
          </MDTypography>
        ),
        description: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Selected
        </MDTypography>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Selected
        </MDTypography>
        ),
        rate: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Selected
        </MDTypography>
        ),
         quantity: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
          Selected
        </MDTypography>
        ),
        amount: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Selected
          </MDTypography>
          ),
       
      },
     
    
    ],
  };
}
