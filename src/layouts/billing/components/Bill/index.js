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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { Link } from "react-router-dom";

// Material Dashboard 2 React context
import { useMaterialUIController } from "context";

function Bill({ name, total,advance,remaining,dueDate,dueAmount, noGutter }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
      mb={noGutter ? 0 : 1}
      mt={2}
    >
      <MDBox width="100%" display="flex" flexDirection="column">
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {name}
          </MDTypography>

          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text"color={darkMode ? "white" : "dark"}>
                <Icon>menu</Icon>&nbsp;See more
              </MDButton>
            </MDBox>
            <Link to='/mybill'>
            <MDButton variant="text" color="error" >
              <Icon >payment</Icon>&nbsp;Pay now
            </MDButton>
            </Link>
          </MDBox>
        </MDBox>
        <MDBox mb={1} lineHeight={0}>
          <MDTypography variant="caption" color="text">
            Total amount:&nbsp;&nbsp;&nbsp;
            <MDTypography style={{float:'right'}} variant="caption" fontWeight="medium" textTransform="capitalize">
              {total}
            </MDTypography>
          </MDTypography>
        </MDBox>
        <MDBox mb={1} lineHeight={0}>
          <MDTypography variant="caption" color="text">
            Total Advance:&nbsp;&nbsp;&nbsp;
            <MDTypography style={{float:'right'}} variant="caption" fontWeight="medium">
              {advance}
            </MDTypography>
          </MDTypography>
        </MDBox>
        <MDBox mb={1} lineHeight={0}>
        <MDTypography variant="caption" color="text">
          Remaining Amount:&nbsp;&nbsp;&nbsp;
          <MDTypography style={{float:'right'}}variant="caption" fontWeight="medium">
            {remaining}
          </MDTypography>
        </MDTypography>
        </MDBox>
        <MDBox mb={1} lineHeight={0}>
        <MDTypography variant="caption" color="text">
          Due date:&nbsp;&nbsp;&nbsp;
          <MDTypography style={{float:'right'}} variant="caption" fontWeight="medium">
            {dueDate}
          </MDTypography>
        </MDTypography>
        </MDBox>
        <MDBox mb={1} lineHeight={0}>
        <MDTypography variant="caption" color="text">
          Due amount:&nbsp;&nbsp;&nbsp;
          <MDTypography style={{float:'right'}}variant="caption" fontWeight="medium">
            {dueAmount}
          </MDTypography>
        </MDTypography>
        </MDBox>
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of Bill
Bill.defaultProps = {
  noGutter: false,
};

// Typechecking props for the Bill
Bill.propTypes = {
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  vat: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  noGutter: PropTypes.bool,
};

export default Bill;
