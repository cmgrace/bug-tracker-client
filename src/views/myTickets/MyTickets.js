import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllTickets, deleteTicket } from "src/actions/tickets";
import { getAllProjects } from "src/actions/projects";
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CButton,
  CCollapse,
  CCardTitle,
  CCardSubtitle,
  CCardText,
} from "@coreui/react";

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

const fields = [
  { key: "name", style: "min-width:200px", label: "Title" },
  { key: "create_on", style: "min-width:200px", label: "Create Date" },
  { key: "assigned_to", style: "min-width:200px", label: "Owner" },
  {
    key: "priority",
    style: "min-width:200px",
    label: "Priority",
  },
  {
    key: "project_id",
    style: "min-width:200px",
    label: "Project",
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

const handleVisible = (items = [], id) => {
  const project = items.find((item) => item.id === id);
  project.visible = !project.visible;

  console.log(project, project.visible, project.id);
  return project.visible;
};
function MyTickets() {
  const history = useHistory();
  const handleClickSeeDetail = (itemId) => {
    history.push(`/myTickets/${itemId}`);
    console.log("itemId:", itemId);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTickets());
    dispatch(getAllProjects());
  }, [dispatch]);

  const tickets = useSelector((state) => state.tickets);
  const projects = useSelector((state) => state.projects);
  //console.log("tickets:", tickets);

  const [count, setCount] = useState(0);

  const findProjectName = (project_id) => {
    const project = projects.find((project) => project.id === project_id);
    return project.name;
  };
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>
            <h5>
              <strong>Your Tickets</strong>
            </h5>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={tickets}
              fields={fields}
              itemsPerPage={5}
              //clickableRows
              //onRowClick={(e) => console.log("row clicked")}
              hover
              sorter={{ resetable: true }}
              itemsPerPageSelect
              columnFilter
              tableFilter
              pagination
              striped
              scopedSlots={{
                status: (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                  </td>
                ),
                project_id: (item) => (
                  <td>{findProjectName(item.project_id)}</td>
                ),
                create_on: (item) => (
                  <td>{item.create_on.replace("T", " ").slice(0, -5)}</td>
                ),
                target_end_date: (item) => (
                  <td>{item.target_end_date.slice(0, 10)}</td>
                ),
                show_details: (item) => (
                  <td className="py-2">
                    <CButton
                      href="#"
                      color="primary"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        handleVisible(tickets, item.id);
                        setCount(count + 1);
                      }}
                    >
                      {item.visible ? "Hide" : "Show"}
                    </CButton>
                  </td>
                ),
                details: (item) => (
                  <CCollapse show={item.visible}>
                    <CCard className="mt-3" style={{ height: "18rem" }}>
                      <CCardBody>
                        <CCardTitle>Ticket Description</CCardTitle>
                        <CCardSubtitle className="mb-2 text-muted">
                          {item.name}
                        </CCardSubtitle>
                        <CCardText>{item.description}</CCardText>
                        {/* <CCardLink href="#">Card link</CCardLink>
                          <CCardLink href="#">Another link</CCardLink> */}

                        <p className="text-muted">
                          Last Modified By: {item.modified_by} on{" "}
                          {item.modified_on.slice(0, 10)}
                        </p>
                        <CButton
                          size="sm"
                          color="info"
                          className=""
                          onClick={() => handleClickSeeDetail(item.id)}
                        >
                          See Detail
                        </CButton>
                        <CButton
                          size="sm"
                          color="danger"
                          className="ml-1"
                          onClick={() => dispatch(deleteTicket(item.id))}
                        >
                          Delete
                        </CButton>
                      </CCardBody>
                    </CCard>
                  </CCollapse>
                ),
              }}
            ></CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
}

export default MyTickets;
