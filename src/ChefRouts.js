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
import Dashboard from "chef/dashboard";
import Ingredients from "chef/ingredients";
import CreateRecepes from "chef/createrecepes";
import Recepes from "chef/recepes";
import EventChef from "chef/event";
import PendingPredictions from "chef/pendingpredictions";
import Menu from "chef/menu";
import Incomplete_ceased_events from "chef/incompleteceasedevents";



import CreateRecepesNext from "chef/createrecepesnext";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/chef/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Ingredients",
    key: "ingredients",
    icon: <Icon fontSize="small">table</Icon>,
    route: "/chef/ingredients",
    component: <Ingredients />,
  },
  {
    type: "collapse",
    name: "event",
    key: "eventchef",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/chef/eventchef",
    component: <EventChef/>,
  },
  {
    type: "collapse",
    name: "PendingPredictions",
    key: "pendingpredictions",
    icon: <Icon fontSize="small">menu</Icon>,
    route: "/chef/pendingpredictions",
    component: <PendingPredictions />,
  },
  {
    type: "collapse",
    name: "Menues",
    key: "menu",
    icon: <Icon fontSize="small">room_service</Icon>,
    route: "/chef/menues",
    component: <Menu />,
  },
  {
    type: "collapse",
    name: "Recepes",
    key: "recepes",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/chef/recepes",
    component: <Recepes />,
  },
  {
    type: "collapse",
    name: "CreateRecepes",
    key: "createrecepes",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/chef/createrecepes",
    component: <CreateRecepes />,
  },
  {
    type: "collapse",
    name: "incomplete ceased events",
    key: "incomplete_ceased_events",
    icon: <Icon fontSize="small">menu</Icon>,
    route: "/chef/incompleteceasedevents",
    component: <Incomplete_ceased_events />,
  },

  
  {
    type: "collapse",
    name: "CreateRecepesNext",
    key: "createrecepesnext",
    icon: <Icon fontSize="small">menu</Icon>,
    route: "/chef/createrecepes/next",
    component: <CreateRecepesNext />,
  },
];

export default routes;
