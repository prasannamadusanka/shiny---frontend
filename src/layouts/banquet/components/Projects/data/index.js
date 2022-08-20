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
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images




export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Item", accessor: "companies", width: "45%", align: "center" },
      { Header: "Amount", accessor: "budget", align: "center" },
      
    ],

    rows: [
      {
        companies: <Company  name="Potato" />,
        
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            150 kg
          </MDTypography>
        ),
        
      },
      {
        companies: <Company  name="Tomato" />,
        
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            200 kg
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={10} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company  name="Ice Cream" />,
        
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            500 L
          </MDTypography>
        ),
        
      },
      {
        companies: <Company  name="Jelly" />,
       
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            500 kg
          </MDTypography>
        ),
       
      },
      {
        companies: <Company  name="Buns" />,
        
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            100 kg
          </MDTypography>
        ),
        
      },
      {
        companies: <Company  name="Chilly" />,
        
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            250 kg
          </MDTypography>
        ),
        
      },
    ],
  };
}
