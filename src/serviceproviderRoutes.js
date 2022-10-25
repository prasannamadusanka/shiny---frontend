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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "ServiceProvider/dashboard";
import Chats from "ServiceProvider/chats";
import Calendar from "ServiceProvider/calendar";
import Billing from "ServiceProvider/billing";
import EB from "ServiceProvider/edit_blog";
import PB from "ServiceProvider/preview_blog";
import PPE from "ServiceProvider/paym_prev_events";
import Prelanding from "ServiceProvider/prelanding";
import Register from "ServiceProvider/authentication/service-provider-reg-req";
// import SPRR2 from "ServiceProvider/authentication/service-provider-reg-req-nxt"; //error

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "ServiceProvider/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Chats",
    key: "Chats",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "ServiceProvider/chats",
    component: <Chats />,
  },
  {
    type: "collapse",
    name: "My Calendar",
    key: "Calendar",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "ServiceProvider/calendar",
    component: <Calendar />,
  },
  {
    type: "collapse",
    name: "Payments",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "ServiceProvider/payments",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Edit Blog",
    key: "EB",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "ServiceProvider/edit_blog",
    component: <EB />,
  },
  {
    type: "collapse",
    name: "Preview Blog",
    key: "PB",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "ServiceProvider/preview_blog",
    component: <PB />,
  },
  {
    type: "collapse",
    name: "Pre-Landing", // 1
    key: "prelanding",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/prelanding",
    component: <Prelanding />,
  },
  {
    type: "collapse",
    name: "Register", // 2
    key: "register",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/service-provider-register-request",
    component: <Register />,
  },
  {
    type: "collapse",
    name: "Previous Events", // 3
    key: "PPE",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/paym_prev_events",
    component: <PPE />,
  },
  // {
  //   type: "collapse",
  //   name: "SPRR2", // 4
  //   key: "SPRR2",
  //   icon: <Icon fontSize="small">assignment</Icon>,
  //   route: "authentication/service-provider-reg-req-nxt",
  //   component: <SPRR2 />,
  // },
];

export default routes;
