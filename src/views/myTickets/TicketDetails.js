import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllTickets } from "src/actions/tickets";

import {
  CBadge,
  CButton,
  CButtonGroup,
  CCardGroup,
  CCard,
  CCardBody,
  CDataTable,
  CCardHeader,
  CCol,
  CCollapse,
  CCardTitle,
  CCardSubtitle,
  CCardText,
  CRow,
} from "@coreui/react";

const fields = [
  { key: "name", style: "min-width:200px " },
  { key: "create_on", style: "min-width:200px", label: "Create Date" },
  { key: "assigned_to", style: "min-width:200px", label: "Owner" },
  {
    key: "priority",
    style: "min-width:200px",
    label: "Priority",
  },
  {
    key: "type",
    style: "min-width:200px",
    label: "Type",
  },

  { key: "status", style: "min-width:100px;" },
  {
    key: "show_details",
    label: "",
    style: "width:1%",
    sorter: false,
    filter: false,
  },
];

const getBadge = (status) => {
  switch (status) {
    case "Close":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Open":
      return "danger";
    default:
      return "primary";
  }
};
function TicketDetails(props) {
  const { ticket_id } = props.match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTickets());
  }, [dispatch]);

  const tickets = useSelector((state) =>
    state.tickets.filter((ticket) => ticket.id === Number(ticket_id))
  );
  console.log("tickets:", tickets);
  return (
    <div>
      <h1>Ticket Detail</h1>
    </div>
  );
}

export default TicketDetails;
