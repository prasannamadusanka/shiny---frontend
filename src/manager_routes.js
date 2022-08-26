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
import Dashboard from "manager/dashboard";
import Serviceproviders from "manager/serviceproviders";
import Events from "manager/event";
import Expences from "manager/expence";
import Payments from "manager/payment";
import Menus from "manager/menu";
import Banquet from "manager/banquet";
import MyKitchen from "manager/myKitchen";

// import Notifications from "manager/notifications";
// import Profile from "manager/profile";
// import SignIn from "manager/authentication/sign-in";
// import SignUp from "manager/authentication/sign-up";

// @mui icons
import Icon from "@mui/material/Icon";

const ManagerRoutes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "manager/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Service Providers",
    key: "service-Providers",
    icon: <Icon fontSize="small">person</Icon>,
    route: "manager/service-Providers",
    component: <Serviceproviders />,
  },
  {
    type: "collapse",
    name: "Events",
    key: "event",
    icon: <Icon fontSize="small">event</Icon>,
    route: "manager/event",
    component: <Events />,
  },
  {
    type: "collapse",
    name: "Expences",
    key: "expence",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "manager/expence",
    component: <Expences />,
  },
  {
    type: "collapse",
    name: "Payments",
    key: "payment",
    icon: <Icon fontSize="small">book</Icon>,
    route: "manager/payment",
    component: <Payments />,
  },
  {
    type: "collapse",
    name: "Menus",
    key: "menu",
    icon: <Icon fontSize="small">menu</Icon>,
    route: "manager/menu",
    component: <Menus />,
  },
  {
    type: "collapse",
    name: "Banquet",
    key: "banquet",
    icon: <Icon fontSize="small">closeMenu</Icon>,
    route: "manager/banquet",
    component: <Banquet />,
  },
  {
    type: "collapse",
    name: "My Kitchen",
    key: "myKitchen",
    icon: <Icon fontSize="small">coffee</Icon>,
    route: "manager/myKitchen",
    component: <MyKitchen />,
  },
  
//   {
//     type: "collapse",
//     name: "Notifications",
//     key: "notifications",
//     icon: <Icon fontSize="small">notifications</Icon>,
//     route: "manager/notifications",
//     component: <Notifications />,
//   },
//   {
//     type: "collapse",
//     name: "Profile",
//     key: "profile",
//     icon: <Icon fontSize="small">person</Icon>,
//     route: "manager/profile",
//     component: <Profile />,
//   },
//   {
//     type: "collapse",
//     name: "Sign In",
//     key: "sign-in",
//     icon: <Icon fontSize="small">login</Icon>,
//     route: "manager/authentication/sign-in",
//     component: <SignIn />,
//   },
//   {
//     type: "collapse",
//     name: "Sign Up",
//     key: "sign-up",
//     icon: <Icon fontSize="small">assignment</Icon>,
//     route: "manager/authentication/sign-up",
//     component: <SignUp />,
//   },
];

export default ManagerRoutes;
