import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavItem",
    name: "Manage Role Assignment",
    to: "/manageRole",
    icon: <CIcon name="cil-group" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Projects",
    route: "",
    icon: <CIcon name="cil-storage" customClasses="c-sidebar-nav-icon" />,

    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "My Project",
        to: "/myProjects",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Add New Project",
        to: "/newProject",
      },
    ],
  },
  {
    _tag: "CSidebarNavDropdown",
    name: "Tickets",
    route: "",
    icon: <CIcon name="cil-bug" customClasses="c-sidebar-nav-icon" />,
    _children: [
      {
        _tag: "CSidebarNavItem",
        name: "My Ticket",
        to: "/myTickets",
      },
      {
        _tag: "CSidebarNavItem",
        name: "Add New Ticket",
        to: "/newTicket",
      },
    ],
  },
  {
    _tag: "CSidebarNavItem",
    name: "User Profile",
    to: "/dashboard",
    icon: <CIcon name="cil-face" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
    },
  },
];

export default _nav;
