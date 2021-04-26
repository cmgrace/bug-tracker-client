import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllTickets } from "src/actions/tickets";
import { updateTicket } from "src/actions/tickets";
import { getAllProjects } from "src/actions/projects";
import { getAllUserProjects } from "src/actions/user_project";
import CIcon from "@coreui/icons-react";

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CForm,
  CFormGroup,
  CInput,
  CLabel,
  CSelect,
} from "@coreui/react";

function TicketDetails(props) {
  const [edit, setEdit] = useState(false);
  const { ticket_id } = props.match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTickets(), getAllProjects(), getAllUserProjects());
    // dispatch(getAllTickets());
    // dispatch(getAllProjects());
    // dispatch(getAllUserProjects());
  }, [dispatch]);

  const tickets = useSelector((state) =>
    state.tickets.filter((ticket) => ticket.id === Number(ticket_id))
  );
  const ticket = tickets[0];
  const [updatedTicket, setUpdatedTicket] = useState({
    name: ticket.name,
    description: ticket.description,
    assigned_to: ticket.assigned_to,
    project_id: ticket.project_id,
    priority: ticket.priority,
    status: ticket.status,
    type: ticket.type,
  });
  const projects = useSelector((state) => state.projects);

  const personnel = useSelector((state) =>
    state.userProjects.filter(
      (userProject) => userProject.project_id === Number(ticket.project_id)
    )
  );
  //console.log("tickets:", ticket);
  //   console.log("users:", personnel);
  //   console.log("projects:", projects);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedT = {
      ...ticket,
      ...updatedTicket,
      modified_on: new Date(),
    };
    if (
      updatedT.assigned_to === -1 ||
      updatedT.project_id === -1 ||
      updatedT.priority === -1 ||
      updatedT.status === -1
    )
      console.log("Please select a correct value");
    else dispatch(updateTicket(ticket.id, updatedT));
    setEdit(false);
    // console.log(updatedT);
  };
  //   const handleReset = () => {
  //     setUpdatedTicket({
  //       name: ticket.name,
  //       description: ticket.description,
  //       assigned_to: ticket.assigned_to,
  //       project_id: ticket.project_id,
  //       priority: ticket.priority,
  //       status: ticket.status,
  //       type: ticket.type,
  //     });
  //   };

  const handleClickEdit = () => {
    setEdit(!edit);
  };

  return (
    <>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>
              <CButton
                size="sm"
                className="ml-0 mr-2"
                color="light"
                onClick={() => handleClickEdit()}
              >
                <CIcon name="cil-pen-alt" />
              </CButton>
              #{ticket.id} Ticket Details
            </CCardHeader>
            <CCardBody>
              <CForm
                action=""
                method="post"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CRow className={edit ? "" : "border-bottom"}>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="name" xs="6">
                        <strong>Ticket Title</strong>
                      </CLabel>

                      {edit ? (
                        <CInput
                          id="name"
                          placeholder={ticket.name}
                          required
                          onChange={(e) =>
                            setUpdatedTicket({
                              ...updatedTicket,
                              name: e.target.value,
                            })
                          }
                        />
                      ) : (
                        <p className="mb-2">
                          <span className="lead">{ticket.name}</span>
                        </p>
                      )}
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="description">
                        <strong>Ticket Description</strong>
                      </CLabel>
                      {edit ? (
                        <CInput
                          id="description"
                          placeholder={ticket.description}
                          required
                          onChange={(e) =>
                            setUpdatedTicket({
                              ...updatedTicket,
                              description: e.target.value,
                            })
                          }
                        />
                      ) : (
                        <p className="mb-2">
                          <span className="lead medium ">
                            {ticket.description}
                          </span>
                        </p>
                      )}
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow className={edit ? "" : "border-bottom mt-3"}>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="assigned_to">
                        <strong>Assigned Developer</strong>
                      </CLabel>
                      {edit ? (
                        <CSelect
                          custom
                          id="assigned_to"
                          value={ticket.assigned_to}
                          onChange={(e) => {
                            setUpdatedTicket({
                              ...updatedTicket,
                              assigned_to: e.target.value,
                            });
                          }}
                        >
                          <option value="-1">Please select</option>
                          {personnel.map((person, index) => (
                            <option key={index} value={person.name}>
                              {person.name}
                            </option>
                          ))}
                        </CSelect>
                      ) : (
                        <p className="mb-2">
                          <span className="lead medium ">
                            {ticket.assigned_to}
                          </span>
                        </p>
                      )}
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="modified_by">
                        <strong>Last Submitter</strong>
                      </CLabel>
                      <p className="mb-2">
                        <span className="lead medium ">
                          {ticket.modified_by}
                        </span>
                      </p>
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow className={edit ? "" : "border-bottom mt-3"}>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="project_id">
                        <strong>Project</strong>
                      </CLabel>
                      {edit ? (
                        <CSelect
                          custom
                          id="project_id"
                          value={ticket.project_id}
                          onChange={(e) => {
                            setUpdatedTicket({
                              ...updatedTicket,
                              project_id: e.target.value,
                            });
                          }}
                        >
                          <option value="-1">Please select</option>
                          {projects.map((porject, index) => (
                            <option key={index} value={porject.id}>
                              {porject.name}
                            </option>
                          ))}
                        </CSelect>
                      ) : (
                        <p className="mb-2">
                          <span className="lead medium ">
                            {ticket.project_id}
                          </span>
                        </p>
                      )}
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="priority">
                        <strong>Ticket Priority</strong>
                      </CLabel>
                      {edit ? (
                        <CSelect
                          custom
                          id="priority"
                          value={ticket.priority}
                          onChange={(e) => {
                            setUpdatedTicket({
                              ...updatedTicket,
                              priority: e.target.value,
                            });
                          }}
                        >
                          <option value="-1">Please select</option>
                          {["High", "Medium", "Low"].map((item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          ))}
                        </CSelect>
                      ) : (
                        <p className="mb-2">
                          <span className="lead medium ">
                            {ticket.priority}
                          </span>
                        </p>
                      )}
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow className={edit ? "" : "border-bottom mt-3"}>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="status">
                        <strong>Ticket Status</strong>
                      </CLabel>
                      {edit ? (
                        <CSelect
                          custom
                          id="project_id"
                          value={ticket.status}
                          onChange={(e) => {
                            setUpdatedTicket({
                              ...updatedTicket,
                              status: e.target.value,
                            });
                          }}
                        >
                          <option value="-1">Please select</option>
                          {["Open", "Close", "Pendding"].map((item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          ))}
                        </CSelect>
                      ) : (
                        <p className="mb-2">
                          <span className="lead medium ">{ticket.status}</span>
                        </p>
                      )}
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="type">
                        <strong>Ticket Type</strong>
                      </CLabel>
                      {edit ? (
                        <CInput
                          id="type"
                          required
                          placeholder={ticket.type}
                          onChange={(e) => {
                            setUpdatedTicket({
                              ...updatedTicket,
                              type: e.target.value,
                            });
                          }}
                        />
                      ) : (
                        <p className="mb-2">
                          <span className="lead medium ">{ticket.type}</span>
                        </p>
                      )}
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow className={edit ? "" : "mt-3"}>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="modified_on">
                        <strong>Last Modified On</strong>
                      </CLabel>

                      <p className="mb-2">
                        <span className="lead medium ">
                          {ticket.modified_on.replace("T", " ").slice(0, -5)}
                        </span>
                      </p>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="create_on">
                        <strong>Created On</strong>
                      </CLabel>

                      <p className="mb-2">
                        <span className="lead medium ">
                          {ticket.create_on.replace("T", " ").slice(0, -5)}
                        </span>
                      </p>
                    </CFormGroup>
                  </CCol>
                </CRow>
                {edit && (
                  <CRow>
                    <CButton
                      type="submit"
                      size="sm"
                      color="primary"
                      className="mr-2 ml-2"
                    >
                      <CIcon name="cil-scrubber" /> Submit
                    </CButton>{" "}
                    <CButton
                      type="reset"
                      size="sm"
                      color="danger"
                      //   onClick={handleReset}
                    >
                      <CIcon name="cil-ban" /> Reset
                    </CButton>
                  </CRow>
                )}
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default TicketDetails;
