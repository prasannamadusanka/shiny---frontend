

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
import DashboardEp from "eventPlanner/dashboard_EP";
import Event from "eventPlanner/event";
import ServiceProviders from "eventPlanner/serviceproviders";

// @mui icons
import Icon from "@mui/material/Icon";

const eventplannerroutes = [
  {
    type: "collapse",
    name: "Dashboard_EP",
    key: "dashboard_EP",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/eventplanner/dashboard-EP",
    component: <DashboardEp />,
  },
  {
    type: "collapse",
    name: "event",
    key: "event",
    icon: <Icon fontSize="small">assignment</Icon>,
    route: "/eventplanner/event",
    component: <Event/>,
  },
  {
    type: "collapse",
    name: "serviceProviders",
    key: "serviceProviders",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/eventplanner/serviceProviders",
    component: <ServiceProviders/>,
  },
];

export default eventplannerroutes;
