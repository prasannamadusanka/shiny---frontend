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
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDProgress from "components/MDProgress";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import pendingPredictionTableData from "chef/pendingpredictions/data/pendingPredictionTableData";

//
import { useMaterialUIController, setDirection } from "context";
import { useState, useEffect} from "react";

//table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import API from '../../services/baseURL';
import MDButton from "components/MDButton";

function DateReturn(date){
  const today = date;
  const yyyy = today.getFullYear();
  let mm = today.getMonth()+1; // Months start at 0
  let dd = today.getDate();

  const formattedDay = yyyy + '-' + mm + '-' + dd;
  return formattedDay
}

export const getpendingpredictionlist = async event => {
  const response = await API.get('chef/view_pending_ingredients_list');
  console.log(response.data.pending_ingredient_lists)
  return response.data.pending_ingredient_lists;
};



function Tables() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "chef");

    return () => setDirection(dispatch, "ltr");
  }, []);
  
  const { columns: pColumns, rows: pRows } = pendingPredictionTableData();

  const [pendingpredictionlist, setpendingpredictionlist] = useState([
    { event_id: "", type: "", pax: "", start_time: "", end_time: "", date: "", menu_id: "", user_id: "", banquet_id: "", package_id: "", ingredient_list_completion_status: "", },
  ]);
  useEffect(() => {
    getpendingpredictionlist()
      .then((data) => {
        console.log(pendingpredictionlist);
        console.log(data);
        setpendingpredictionlist(data);
        console.log(pendingpredictionlist);
      })
      .catch((err) => {
        
      }); 
  }, []);



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12} justifyContent='center'alignItems="center">
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Pending Predictions
                </MDTypography>
              </MDBox>
              <Grid container xs={12} justifyContent= 'center' alignItems="center">
              <MDBox pt={3} width="70%">
                
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  // entriesPerPage={true}
                  // showTotalEntries={true}
                  noEndBorder
                />




<TableContainer component={Paper}>
      <Table sx={{ minWidth: 0 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Date</TableCell>
            <TableCell align="center">progress</TableCell>
            <TableCell align="right">Predict</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pendingpredictionlist?.map((item) => (
            <TableRow>
              <TableCell align="left">
                {item.date}
              </TableCell>
              <TableCell align="center" >
                {item.ingredient_list_completion_status}
                {/* <Progress id="progress" color="success" value={95} /> */}
                {/* <MDBox id="progress"></MDBox> */}
              </TableCell>
              <TableCell align="right" >
                <MDButton type="submit" label= "create" variant="gradient" color="info">PREDICT</MDButton> 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>





              </MDBox>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
