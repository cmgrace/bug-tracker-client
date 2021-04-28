import React from "react";
import ProjectDetails from "./views/myProjects/ProjectDetails";
import TicketDetails from "./views/myTickets/TicketDetails";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const CoreUIIcons = React.lazy(() =>
  import("./views/icons/coreui-icons/CoreUIIcons")
);
const Flags = React.lazy(() => import("./views/icons/flags/Flags"));
const Brands = React.lazy(() => import("./views/icons/brands/Brands"));

const Widgets = React.lazy(() => import("./views/widgets/Widgets"));
const Users = React.lazy(() => import("./views/users/Users"));
const User = React.lazy(() => import("./views/users/User"));
const ManageRole = React.lazy(() => import("./views/manageRole/ManageRole"));
const MyProjects = React.lazy(() => import("./views/myProjects/MyProjects"));
const MyTickets = React.lazy(() => import("./views/myTickets/MyTickets"));

// const ProjectDetails = React.lazy(() =>
//   import("./views/myProjects/ProjectDetails")
// );
// const TicketDetails = React.lazy(() =>
//   import("./views/myTickets/TicketDetails")
// );
const AddNewProject = React.lazy(() =>
  import("./views/myProjects/AddNewProject")
);
const AddNewTicket = React.lazy(() => import("./views/myTickets/AddNewTicket"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },

  { path: "/icons", exact: true, name: "Icons", component: CoreUIIcons },
  { path: "/icons/coreui-icons", name: "CoreUI Icons", component: CoreUIIcons },
  { path: "/icons/flags", name: "Flags", component: Flags },
  { path: "/icons/brands", name: "Brands", component: Brands },

  { path: "/widgets", name: "Widgets", component: Widgets },
  { path: "/users", exact: true, name: "Users", component: Users },
  { path: "/users/:id", exact: true, name: "User Details", component: User },
  {
    path: "/manageRole",
    name: "Manage Role Assignment",
    component: ManageRole,
  },
  {
    path: "/myProjects",
    name: "My Projects",
    component: MyProjects,
    exact: true,
  },
  {
    path: "/myProjects/:project_id",
    name: "Project Details",
    component: ProjectDetails,
    exact: true,
  },
  {
    path: "/newProject",
    name: "New Project",
    component: AddNewProject,
  },
  {
    path: "/myTickets",
    name: "My Tickets",
    component: MyTickets,
    exact: true,
  },
  {
    path: "/myTickets/:ticket_id",
    name: "Ticket Details",
    component: TicketDetails,
    exact: true,
  },
  {
    path: "/newTicket",
    name: "New Ticket",
    component: AddNewTicket,
  },
];

export default routes;
