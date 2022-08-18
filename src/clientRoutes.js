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
import PricePlan from "layouts/pricePlan"
import MenuSelection from "layouts/MenuSelection";
import MyServices from "layouts/myservices"
import Imashi from "layouts/imashi"
import MyBill from "layouts/mybill";
import Landing from "landing/landing"

// @mui icons
import Icon from "@mui/material/Icon";
//import FastfoodIcon from '@mui/material/Fastfood';
import { Menu } from "@mui/material";
import EventSchedule from "client/eventSchedule";

const clientRoutes=[
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
    component: <MyBill />,
  },

 
    ];
    
    export default clientRoutes;