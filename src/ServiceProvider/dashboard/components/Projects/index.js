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

// import { useState, useEffect } from "react";

// @mui material components
import Card from "@mui/material/Card";
// import Icon from "@mui/material/Icon";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Link from "@mui/material/Link";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
// import DataTable from "examples/Tables/DataTable";

// Data
// import data1 from "layouts/dashboard/components/Projects/data";
import Bookings from "ServiceProvider/dashboard/components/Projects/bookingsdata";

// import { useMaterialUIController, setDirection } from "context";

// import API from "../../../../services/baseURL";

// export const getbookingslist = async (event) => {
//   const response = await API.get(`ServiceProvider/view_bookings`);
//   console.log(response); // response -> data -> menus -> 0 -> event_id
//   console.log(response.data.menus);
//   return response.data.menus;
// };

function Projects() {
  // const [, dispatch] = useMaterialUIController();
  // useEffect(() => {
  //   setDirection(dispatch, "ServiceProvider");

  //   return () => setDirection(dispatch, "ltr");
  // }, []);

  // const [bookings, setbookings] = useState([{ event_id: "", event_name: "" }]);
  // useEffect(() => {
  //   getbookingslist()
  //     .then((data) => {
  //       console.log(bookings);
  //       console.log(data);
  //       setbookings(data);
  //       console.log(bookings);
  //     })
  //     .catch((err) => {
  //       // console.log(err.error);
  //     }); // Had to use ; here.
  // }, []);

  // const { columns, rows } = data1();
  // const [menu, setMenu] = useState(null);

  // const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  // const closeMenu = () => setMenu(null);

  // const renderMenu = (
  //   <Menu
  //     id="simple-menu"
  //     anchorEl={menu}
  //     anchorOrigin={{
  //       vertical: "top",
  //       horizontal: "left",
  //     }}
  //     transformOrigin={{
  //       vertical: "top",
  //       horizontal: "right",
  //     }}
  //     open={Boolean(menu)}
  //     onClose={closeMenu}
  //   >
  //     <MenuItem onClick={closeMenu}>Action</MenuItem>
  //     <MenuItem onClick={closeMenu}>Another action</MenuItem>
  //     <MenuItem onClick={closeMenu}>Something else</MenuItem>
  //   </Menu>
  // );

  return (
    <Card>
      {/* <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h2" fontWeight="bold" gutterBottom>
            Bookings
          </MDTypography>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <MDTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>3 NEW</strong> bookings
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </MDBox>
        {renderMenu}
      </MDBox> */}
      {/* <MDBox>
        <DataTable
          table={{ columns, rows }}
          showTotalEntries={false}
          isSorted={false}
          noEndBorder
          entriesPerPage={false}
        />
      </MDBox> */}
      {/* <MDBox mb={1.5}>
        {bookings?.map((item) => (
          // The format when there is more than one returns - Eslint Rules
          //  {getbookingslist.map((item, index) => {
          //    return(
          //      <Link to="/ServiceProvider/view_bookings">
          //        value={item.event_id}
          //      </Link>
          //    );
          //  })}
          <Link to="/ServiceProvider/view_bookings">
            <MDTypography key={item.event_id}>{item.event_name}</MDTypography>
          </Link>
        ))}
      </MDBox> */}
      <MDBox mb={0} pb={10}>
        <Bookings />
      </MDBox>
    </Card>
  );
}

export default Projects;
