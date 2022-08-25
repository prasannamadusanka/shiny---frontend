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

// react-routers components
import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function RecepeIngredientList({ title, profiles, shadow }) {
  const renderProfiles = profiles.map(({ name, quantity }) => (
    <MDBox key={name} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <MDBox display="flex" flexDirection="row" alignItems="flex-start" justifyContent="center">
        <MDTypography variant="button" fontWeight="regular" color="text">
          {name}
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          &nbsp;&nbsp;&nbsp;---------------&nbsp;&nbsp;&nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          {quantity}
        </MDTypography>
      </MDBox>
    </MDBox>
  ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <MDBox pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MDTypography>
      </MDBox>
      <MDBox p={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>
          {renderProfiles}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfilesList
RecepeIngredientList.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfilesList
RecepeIngredientList.propTypes = {
  title: PropTypes.string.isRequired,
  profiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  shadow: PropTypes.bool,
};

export default RecepeIngredientList;
