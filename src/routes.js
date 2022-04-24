import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import Icons from "views/Icons.js";
import Maps from "views/Maps.js";
import Notifications from "views/Notifications.js";
import Leads from "views/Leads";
import Dealers from "views/Dealers";
import { LeadDetails } from "views/LeadDetails";

const dashboardRoutes = [
  {
    path: "/leads",
    name: "Leads",
    icon: "nc-icon nc-bag",
    component: Leads,
    layout: "/admin",
    children: [
      {
        path: "/details",
        component: LeadDetails
      }
    ]
  },
  {
    path: "/dealers",
    name: "Dealers",
    icon: "nc-icon nc-paper-2",
    component: Dealers,
    layout: "/admin",
    children: []
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
    children: []
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
    children: []
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
    children: []
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
    children: []
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
    children: []
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
    children: []
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
    children: []
  },
];

export default dashboardRoutes;
