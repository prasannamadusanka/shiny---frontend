import React, { Component } from 'react'

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import vegetableTableData from "chef/ingredients/data/vegetableTableData";
import fruitTableData from "chef/ingredients/data/fruitTableData";
import oilTableData from "chef/ingredients/data/oilTableData";

export default class Ingredients extends Component {


  render() {
    const { columns, rows } = vegetableTableData();
    const { columns: pColumns, rows: pRows } = fruitTableData();
    const { columns: oColumns, rows: oRows } = oilTableData();

    return (
        <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="success"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Vegetables
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    canSearch
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={true}
                    showTotalEntries={true}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="success"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Fruits
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    canSearch
                    table={{ columns: pColumns, rows: pRows }}
                    isSorted={false}
                    entriesPerPage={true}
                    showTotalEntries={true}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="success"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Oils
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    canSearch
                    table={{ columns: oColumns, rows: oRows }}
                    isSorted={false}
                    entriesPerPage={true}
                    showTotalEntries={true}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
        <Footer />
      </DashboardLayout>
    );
  }
}
