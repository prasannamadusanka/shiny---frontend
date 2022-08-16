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
import Card from "@mui/material/Card";
// import Divider from "@mui/material/Divider";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDButtonRoot from "components/MDButton/MDButtonRoot";
import MDTypography from "components/MDTypography";
// import MDButton from "components/MDButton";

// Billing page components
import Advance from "layouts/mybill/components/Advance";

function Advances() {
    return (
        <Card sx={{ height: "100%" }}>
            <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={3} px={2}>
                <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
                    Wedding Event 2022.10.12
                </MDTypography>
                <MDBox display="flex" alignItems="flex-start">


                </MDBox>
            </MDBox>
            <MDBox pt={3} pb={2} px={2}>
                <MDBox mb={2}>
                    <MDTypography variant="caption" color="text" fontWeight="bold" textTransform="uppercase">
                        My Payments
                    </MDTypography>
                </MDBox>
                <MDBox
                    component="ul"
                    display="flex"
                    flexDirection="column"
                    p={0}
                    m={0}
                    sx={{ listStyle: "none" }}
                >
                    <Advance


                        type="Advance payment"

                        icon="remove"

                        date="27 March 2020, at 12:30 PM"
                        value="Rs. 2,500"
                    />
                    <Advance


                        type="Advance payment"

                        icon="remove"

                        date="27 March 2020, at 12:30 PM"
                        value="Rs. 2,500"
                    />
                </MDBox>


            </MDBox>
        </Card>
    );
}

export default Advances;