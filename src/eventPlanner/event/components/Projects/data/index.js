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
    <MDBox display="flex" alignItems="left" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Time", accessor: "companies", width: "45%", align: "center" },
      { Header: "description", accessor: "budget", align: "center" },
      
    ],

    rows: [
      {
        companies: <Company  name="8.00 a.m. - 9.00 a.m." />,
        
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Welcome
          </MDTypography>
        ),
        
      },
      {
        companies: <Company  name="9.00 a.m. - 10.00 a.m." />,
        
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Poruwa Ceremony
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={10} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company  name="10.00 a.m. - 11.00 a.m." />,
        
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Dancing Item
          </MDTypography>
        ),
        
      },
      {
        companies: <Company  name="11.00 a.m. - 12.30 p.m." />,
       
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Welcome Invitors
          </MDTypography>
        ),
       
      },
      {
        companies: <Company  name="12.30 p.m. - 3.30 p.m." />,
        
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Lunch
          </MDTypography>
        ),
        
      },
      {
        companies: <Company  name="3.30 p.m. - 4.00 p.m." />,
        
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Second Dance Item
          </MDTypography>
        ),
        
      },
    ],
  };
}
