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

// Images
import pause from "assets/images/pause.png";

export default function data() {
  const Event = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "event", accessor: "event", width: "30%", align: "left" },
      { Header: "start", accessor: "start", align: "left" },
      { Header: "end", accessor: "end", align: "center" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "completion", accessor: "completion", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        event: <Event image={pause} name="Bride Welcome" />,
        start: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            08.30
          </MDTypography>
        ),
        end: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            09.30
          </MDTypography>
        ),
        status: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              working
            </MDTypography>
          ),
        completion: <Progress color="info" value={60} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        event: <Event image={pause} name="Groom Welcome" />,
        start: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            09.30
          </MDTypography>
        ),
        end: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            10.30
          </MDTypography>
        ),
        status: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              working
            </MDTypography>
          ),
        completion: <Progress color="success" value={100} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
     
    ],
  };
}
