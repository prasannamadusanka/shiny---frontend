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

import { Link } from "react-router-dom";

export default function data() {
  

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="18rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Remaining Days", accessor: "Remaining_Days", align: "left" },
      { Header: "completion", accessor: "completion", align: "left" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        Remaining_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0000/00/04
          </MDTypography>
        ),
        completion: <Progress color="success" value={60} />,
        action: (
          <Link to="/eventchef">
          <MDTypography component="a" href="#" color="info">
            <Icon>forward</Icon>
          </MDTypography>
          </Link>
        ),
      },
      {
        Remaining_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0000/00/05
          </MDTypography>
        ),
        completion: <Progress color="success" value={65} />,
        action: (
          <MDTypography component="a" href="#" color="info">
            <Icon>forward</Icon>
          </MDTypography>
        ),
      },
      {
        Remaining_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0000/00/05
          </MDTypography>
        ),
        completion: <Progress color="success" value={50} />,
        action: (
          <MDTypography component="a" href="#" color="info">
            <Icon>forward</Icon>
          </MDTypography>
        ),
      },
      {
        Remaining_Days: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            0000/00/02
          </MDTypography>
        ),
        completion: <Progress color="success" value={60} />,
        action: (
          <MDTypography component="a" href="#" color="info">
            <Icon>forward</Icon>
          </MDTypography>
        ),
      },
    ],
  };
}
