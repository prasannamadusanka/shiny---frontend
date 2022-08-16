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
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Wedding from "assets/images/events/wedding.jpg"
// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Upcoming Events
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            in this year
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={3}>
        <TimelineItem
          color="success"
          icon="restaurant_menu"
          title="Wedding function - Hotel sundream"
          dateTime="22 DEC 2022"
        />
        <TimelineItem
          color="error"
          icon="cake"
          title="Birhday functon - Shiny garden"
          dateTime="23 MAR 2023"
        />
         <TimelineItem
          color="error"
          icon="cake"
          title="Birhday functon - Shiny garden"
          dateTime="23 MAR 2023"
        />
        <TimelineItem
        lastItem={true}
          color="error"
          icon="restaurant_menu"
          title="Home coming function - Shiny lakeside resort"
          dateTime="1 DEC 2023"
        />
      
         
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
