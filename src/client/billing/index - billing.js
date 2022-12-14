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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

function Billing() {
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
                  <DefaultInfoCard
                    icon="restaurant_menu"
                    title="Food and Beverages"
                    description="Upcoming event"
                    value="Rs.225.00k"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <DefaultInfoCard
                    icon="Beverages"
                    title="Outside Services"
                    description="Upcoming event"
                    value="Rs.22.00k"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <DefaultInfoCard
                    icon="party_mode"
                    title="Bar services"
                    description="Upcoming event"
                    value="Rs.20.00k"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <DefaultInfoCard
                    icon="motorcycle"
                    title="Total Amount"
                    description="Upcoming event"
                    value="Rs.545.00k"
                    dueDate ="2022.11.10"
                  />
                </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Billing;
