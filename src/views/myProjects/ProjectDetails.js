import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllTickets } from "src/actions/tickets";
import { getAllProjects } from "src/actions/projects";
import { getAllUserProjects } from "src/actions/user_project";
import {
  CBadge,
  CButton,
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
import { CChartDoughnut, CChartPie } from "@coreui/react-chartjs";

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
const fields2 = ["name", "email", "registered", "role"];

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
const handleVisible = (items = [], id) => {
  const ticket = items.find((item) => item.id === id);
  ticket.visible = !ticket.visible;

  console.log(ticket, ticket.visible, ticket.id);
  return ticket.visible;
};

function ProjectDetails(props) {
  const [count, setCount] = useState(0);

  const { project_id } = props.match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(getAllTickets(), getAllProjects(), getAllUserProjects());
    dispatch(getAllTickets());
    dispatch(getAllProjects());
    dispatch(getAllUserProjects());
  }, [dispatch]);

  const tickets = useSelector((state) =>
    state.tickets.filter((ticket) => ticket.project_id === Number(project_id))
  );
  const openTickets = tickets.filter((ticket) => ticket.status === "Open");
  const closeTickets = tickets.filter((ticket) => ticket.status === "Close");

  const projects = useSelector((state) =>
    state.projects.filter((project) => project.id === Number(project_id))
  );

  const personnel = useSelector((state) =>
    state.userProjects.filter(
      (userProject) => userProject.project_id === Number(project_id)
    )
  );
  const lead = personnel.filter((person) => person.role === "Tech lead");
  const developer = personnel.filter((person) => person.role === "Developer");
  const manager = personnel.filter((person) => person.role === "Manager");

  //   console.log("tickets:", tickets);
  //   console.log("project:", projects);
  //   console.log("personnel:", personnel);
  //console.log("params:", project_id);
  const history = useHistory();
  const handleClickSeeDetail = (itemId) => {
    history.push(`/myTickets/${itemId}`);
    // console.log("History:", history);
    console.log("itemId:", itemId);
  };

  return (
    <>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>
              <h4>{projects[0].name}</h4>
            </CCardHeader>
            <CCardBody>
              <h5>{projects[0].description}</h5>

              <CRow className="mt-3">
                <CCol>
                  <CCardGroup columns className="cols-2">
                    <CCard>
                      <CCardHeader>Total Tickets: {tickets.length}</CCardHeader>
                      <CCardBody>
                        <CChartDoughnut
                          datasets={[
                            {
                              backgroundColor: ["#41B883", "#DD1B16"],
                              data: [closeTickets.length, openTickets.length],
                            },
                          ]}
                          labels={["Close", "Open"]}
                          options={{
                            tooltips: {
                              enabled: true,
                            },
                          }}
                        />
                      </CCardBody>
                    </CCard>
                    <CCard>
                      <CCardHeader>
                        Total Personnel: {personnel.length}
                      </CCardHeader>
                      <CCardBody>
                        <CChartPie
                          datasets={[
                            {
                              backgroundColor: [
                                "#DDA0DD",
                                "#E6E6FA",
                                "#9370DB",
                              ],
                              data: [
                                lead.length,
                                developer.length,
                                manager.length,
                              ],
                            },
                          ]}
                          labels={["Lead", "Developer", "Manager"]}
                          options={{
                            tooltips: {
                              enabled: true,
                            },
                          }}
                        />
                      </CCardBody>
                    </CCard>
                  </CCardGroup>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>
              <h5>
                <strong>Tickets</strong>
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
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
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

                          {/* <h4>{item.username}</h4> */}
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
                          <CButton size="sm" color="danger" className="ml-1">
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
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>
              <h5>
                <strong>Personnel</strong>
              </h5>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={personnel}
                fields={fields2}
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
                  registered: (item) => <td>{item.registered.slice(0, 10)}</td>,
                  role: (item) => (
                    <td>{item.role.length === 0 ? "N/A" : item.role}</td>
                  ),
                }}
              ></CDataTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default ProjectDetails;
