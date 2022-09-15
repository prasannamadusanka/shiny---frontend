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
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import RecepeIngredientList from "examples/Lists/RecepeIngredientList";

// Overview page components
import Header from "chef/recepe/components/Header";

import ingredientList from "chef/recepe/components/Ingredients";

//
import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";


function Overview() {
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "chef");

    return () => setDirection(dispatch, "ltr");
  }, []);
  

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />
      <Header>
        <MDBox display="flex" flexDirection="row" width="100%">
          <MDBox pt={2} px={2} lineHeight={1.25} width="50%">
            <MDBox sx={{ width: "100%" }}>
                <RecepeIngredientList title="Ingredients" profiles={ingredientList} shadow={false} />
            </MDBox>
          </MDBox>
          <MDBox display="flex" flexDirection="column" width="50%" mt={2}>
            <MDBox pt={2} px={2} lineHeight={1.25}>
              <MDTypography variant="h6" fontWeight="medium">
                Description
              </MDTypography>
              <MDBox mb={1}>
                <MDTypography variant="button" color="text">
                  100% fruit juice can help provided needed nutrients any time of the day. Drinking them as a combination or as single fruit is fine – whatever you prefer. You might want to blend fruits only because they each have a unique range of nutrients and beneficial compounds. Or add vegetables for the same reason!
                </MDTypography>
              </MDBox>
            </MDBox>
            <MDBox pt={2} px={2} lineHeight={1.25}>
              <MDTypography variant="h6" fontWeight="medium">
                Chef Tip
              </MDTypography>
              <MDBox mb={1}>
                <MDTypography variant="button" color="text">
                  Blend everything well.
                  If juice is thick, then adjust the consistency by adding water.
                  Garnish it with lemon slices, kiwi slices, and mint leaves.
                </MDTypography>
              </MDBox>
            </MDBox>
          </MDBox>
        </MDBox>
      </Header>
      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
