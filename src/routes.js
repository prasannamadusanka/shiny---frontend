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
import Dashboard from "client/dashboard";
import Tables from "layouts/tables";
import Billing from "client/billing";
import RTL from "layouts/rtl";
import Notifications from "client/notifications";
import Profile from "client/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import Menu1 from "client/Menu";
import Services from "client/services"
import EventForm from "client/eventForm"
import PricePlan from "client/pricePlan"
import MenuSelection from "layouts/MenuSelection";
import MyServices from "client/myservices"
import Imashi from "layouts/imashi"
import MyBill from "layouts/mybill";
import Landing from "landing/landing"
import MyEvents from "client/myevents";
// @mui icons
import Icon from "@mui/material/Icon";
//import FastfoodIcon from '@mui/material/Fastfood';
import { Menu } from "@mui/material";
import EventSchedule from "client/eventSchedule";

const routes = [

  {
    type: "collapse",
    name: "Landing",
    key: "dashboard2",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/",
    component: <Landing />,
  },
  {
    type: "collapse",
    name: "Dashboard",
    key: "clinetDashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/Client/Dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Menu",
    key: "menu",
    icon: <Icon fontSize="small">room_service</Icon>,
    route: "client/menu",
    component: <Menu1 />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "Client/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "Services",
    key: "services",
    icon: <Icon fontSize="small">local_shipping</Icon>,
    route: "client/services",
    component: <Services />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "client/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Event Schedule",
    key: "evenetForm",
    icon: <Icon fontSize="small">timeline</Icon>,
    route: "client/eventSchedule",
    component: <EventSchedule />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "client/notifications",
    component: <Notifications />,
  },

  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  
  {
    type: "collapse",
    name: "Menu",
    key: "menu",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/menu",
    component: <Menu1 />,
  },
  {
    type: "collapse",
    name: "Menu",
    key: "menu",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/rtl",
    component: <RTL/>
  },
  {
    type: "collapse",
    name: "Menu Selection",
    key: "menuselection",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "client/menu/menuselction",
    component: <MenuSelection />,
  },
  {
    type: "collapse",
    name: "My Services",
    key: "menuselection",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "client/services/myservices",
    component: <MyServices />,
  },
  
  {
    type: "collapse",
    name: "Imashi",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/imashi",
    component: <Imashi />,
  },
  {
    type: "collapse",
    name: "Services",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/services",
    component: <Services />,
  },
  {
    type: "collapse",
    name: "Request Schedule",
    key: "evenetForm",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "client/eventSchedule/eventForm",
    component: <EventForm />,
  },
  

  
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Pricing plan",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/price",
    component: <PricePlan />,
  },
  

  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/authentication/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/client/menu/pricePlan",
    component: <PricePlan />,
  },
  {
    type: "collapse",
    name: "My Events",
    key: "myevents",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/client/myevents",
    component: <MyEvents />,
  },
];
export default routes;
