import MaterialTable from "material-table";

import LockIcon from '@mui/icons-material/LockRounded';
import LockOpenIcon from '@mui/icons-material/LockOpenRounded';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import * as React from 'react';
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import {useNavigate} from 'react-router-dom';
import { useMaterialUIController, setDirection } from "context";
import MDBox from "components/MDBox";

// import {getMotherListForAdmin} from "../../../../services/Admin/Mother/admin_mother_service";
// import {useEffect, useState} from "@types/react";
import {Fragment, useEffect, useState} from 'react';
// import {getFollowerListForPediatrician} from "../../../../services/Pediatrician/pt_service";


import Footer from "examples/Footer";

import './index.css'
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";

import { Grid, Typography } from "@mui/material";
const axios = require("axios");


import Select from 'react-select'


import Autocomplete from "@mui/material/Autocomplete";
import API from '../../services/baseURL';
import options from '../../services/functions';
import FlowersListTable from "./previousReportss";

const previousSchedule = () => {
  const [, dispatch] = useMaterialUIController();
  // const { sales, tasks } = reportsLineChartData;
  useEffect(() => {
      setDirection(dispatch, "client");

      return () => setDirection(dispatch, "ltr");
  }, []);
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
     <FlowersListTable/>
    </DashboardLayout>
  )
}

export default previousSchedule;