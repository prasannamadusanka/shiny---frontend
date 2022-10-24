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
import MDButton from "components/MDButton";

import Icon from "@mui/material/Icon";

import Checkbox from '@mui/material/Checkbox';

import React, { useState } from 'react';



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


  return {
    columns: [
      { Header: "completion", accessor: "completion", align: "center" },
      { Header: "description", accessor: "description", align: "center" },
      { Header: "start", accessor: "start", align: "center" },
      { Header: "end", accessor: "end", align: "center" },
      { Header: "", accessor: "minus", align: "center" },
      { Header: "", accessor: "add", align: "center" },
      
    ],

    rows: [
      {
        completion: (
          <Checkbox />
        ),
        description: (
          <MDTypography variant="caption" color="text" fontWeight="medium" >
            Welcome
          </MDTypography>
        ),
        start: (
          <MDTypography variant="caption" color="text" fontWeight="medium" >
            08.00AM
          </MDTypography>
        ),
        end: (
          <MDTypography variant="caption" color="text" fontWeight="medium" >
            08.00AM
          </MDTypography>
        ),
        minus: (
          <MDButton variant="gradient" color="error" iconOnly >
            <Icon>close</Icon>
          </MDButton>
        ),
        add: (
          <MDButton variant="gradient" color="success" iconOnly >
            <Icon>add</Icon>
          </MDButton>
        ),
      }
    ],
  };
}
