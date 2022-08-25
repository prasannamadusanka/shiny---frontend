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
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const Author = ({  name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        
      </MDBox>
    </MDBox>
  );

  const Job = ({ title }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
     
    </MDBox>
  );
  const Income = ({  name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "description", accessor: "description", width: "30%", align: "left" },
      { Header: "expence", accessor: "expence", align: "left" },
      { Header: "description", accessor: "descript", align: "center" },
      { Header: "income", accessor: "income", align: "center" },
     
    ],

    rows: [
      {
        description: <Author  name="Kitchen Item"  />,
        expence: <Job title="LKR 152,000"  />,
        descript: <Income  name="All Event Price"  />,
        income: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           LKR 145,256,000
          </MDTypography>
        ),
        
      },
      {
        description: <Author  name="Ingrediant Item"  />,
        expence: <Job title="LKR 52,000"  />,
        descript: <Income  name=""  />,
        income: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           
          </MDTypography>
        ),
        
      },
      {
        description: <Author  name="Payments for service providers"  />,
        expence: <Job title="LKR 500,000"  />,
        descript: <Income  name=""  />,
        income: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
           
          </MDTypography>
        ),
        
      },
      {
        description: <Author  name="Payments for Workers"  />,
        expence: <Job title="LKR 200,000"  />,
        descript: <Income  name=""  />,
        income: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            
          </MDTypography>
        ),
        
      },
      {
        description: <Author  name="Decorations"  />,
        expence: <Job title="LKR 45,000"  />,
        descript: <Income  name=""  />,
        income: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            
          </MDTypography>
        ),
        
      },
      {
        description: <Author  name="Vehicles Maintenance Expence"  />,
        expence: <Job title="LKR 25,000"  />,
        descript: <Income  name=""  />,
        income: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            
          </MDTypography>
        ),
        
      },
    ],
  };
}
