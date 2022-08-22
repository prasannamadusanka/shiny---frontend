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
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";


// Data
import authorsTableData from "layouts/expence/components/data";


function Tables() {
  const { columns, rows } = authorsTableData();
 

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
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Add Expenses
                </MDTypography>
              </MDBox>
      <MDBox pt={3}>
      <MDInput type="date" label="" value="" />
      
      </MDBox>
      <MDBox pt={3}>
      <MDInput type="text" label="Description" value="" />
      <MDInput type="number" label="Expense" value="" />
      <MDButton variant="gradient" color="dark"  iconOnly>
      
  <Icon>add</Icon>
        </MDButton>
      </MDBox>
      <MDBox pt={3}>
      <MDButton variant="gradient" color="dark" size="medium">Done</MDButton>
      </MDBox>
      </Card>
      </Grid>
      </Grid>
      </MDBox>
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
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h5" color="white">
                Income & Expense Report
                </MDTypography>
                <MDBox pt={3}>
                <MDInput type="month" label="Select Month" value="" />
                <MDButton variant="gradient" color="dark" size="medium">Generate Report</MDButton>
                </MDBox>
                <MDBox pt={3}>
                </MDBox>
                <MDTypography variant="h6" color="white">
                  Income & Expense Report For July
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
         
        </Grid>
      </MDBox>
      <MDBox mb={3}>
          <Grid container spacing={1} mt={4} mb={3}>
          <Grid item xs={12} lg={5}>
            <Card>
            <MDTypography variant="h6" color="black">
                  Total Income : LKR 145,256,000
                </MDTypography>
                <MDTypography variant="h6" color="error">
                  Total Expense : LKR 974,000
                </MDTypography>
            </Card>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Card>
            <MDTypography variant="h6" color="black">
                  Profit : LKR 144,282,000
                </MDTypography>
                
            </Card>
          </Grid>
          </Grid>
          </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
