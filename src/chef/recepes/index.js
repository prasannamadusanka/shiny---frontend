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
import welcomeDrinkTableData from "chef/recepes/data/welcomeDrinkTableData";
import riceDishTableData from "chef/recepes/data/riceDishTableData";
import saladTableData from "chef/recepes/data/saladTableData";

//
import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";


export default function Recepes () {


  
    const [, dispatch] = useMaterialUIController();
    useEffect(() => {
      setDirection(dispatch, "chef");
  
      return () => setDirection(dispatch, "ltr");
    }, []);
  
    
    
    const { columns, rows } = welcomeDrinkTableData();
    const { columns: pColumns, rows: pRows } = riceDishTableData();
    const { columns: oColumns, rows: oRows } = saladTableData();

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
                    welcome drinks
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
                    Rice Dishes
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
                    Salads
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
