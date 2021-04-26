import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "src/actions/projects";
import { getAllUsers } from "src/actions/users";
import { createTicket } from "src/actions/tickets";

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

function AddNewTicket() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProjects());
    dispatch(getAllUsers());
  }, [dispatch]);

  const projects = useSelector((state) => state.projects);

  const users = useSelector((state) => state.users);
  const [updatedTicket, setUpdatedTicket] = useState({
    name: "",
    description: "",
    status: "",
    type: "",
    assigned_to: "",
    project_id: "",
    priority: "",
    target_end_date: "",
    actutal_end_date: "",
    create_by: "Grace Cheng",
    modified_by: "Grace Cheng",
    visible: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedT = {
      ...updatedTicket,
      create_on: new Date(),
      modified_on: new Date(),
    };
    if (
      updatedT.name === 0 ||
      updatedT.description === 0 ||
      updatedT.create_on === 0 ||
      updatedT.modified_on === 0 ||
      updatedT.project_id === -1
    )
      console.log("Please select a correct value");
    else dispatch(createTicket(updatedT));
    // setUpdatedTicket({
    //   name: "",
    //   description: "",
    //   status: "",
    //   type: "",
    //   assigned_to: "",
    //   project_id: "",
    //   priority: "",
    //   target_end_date: "",
    //   actutal_end_date: "",
    //   create_on: "",
    //   create_by: "Grace Cheng",
    //   modified_on: "",
    //   modified_by: "Grace Cheng",
    //   visible: false,
    // });
    console.log(updatedT);
  };

  const handleReset = () => {
    setUpdatedTicket({
      name: "",
      description: "",
      status: "",
      type: "",
      assigned_to: "",
      project_id: "",
      priority: "",
      target_end_date: "",
      actutal_end_date: "",
      create_on: "",
      create_by: "Grace Cheng",
      modified_on: "",
      modified_by: "Grace Cheng",
      visible: false,
    });
  };

  return (
    <>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>
              Add New Ticket{" "}
              <span className="small danger" color="danger">
                (*All fields required)
              </span>
            </CCardHeader>
            <CCardBody>
              <CForm
                action=""
                method="post"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CRow>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="name" xs="6">
                        <strong>Ticket Title</strong>
                      </CLabel>

                      <CInput
                        id="name"
                        placeholder="Enter a name"
                        required
                        onChange={(e) =>
                          setUpdatedTicket({
                            ...updatedTicket,
                            name: e.target.value,
                          })
                        }
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="description">
                        <strong>Ticket Description</strong>
                      </CLabel>

                      <CInput
                        id="description"
                        placeholder="Enter description"
                        required
                        onChange={(e) =>
                          setUpdatedTicket({
                            ...updatedTicket,
                            description: e.target.value,
                          })
                        }
                      />
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="status">
                        <strong>Ticket Status</strong>
                      </CLabel>

                      <CSelect
                        required
                        id="project_id"
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
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="priority">
                        <strong>Ticket Priority</strong>
                      </CLabel>

                      <CSelect
                        custom
                        required
                        id="project_id"
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
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="assigned_to">
                        <strong>Assign To</strong>
                      </CLabel>

                      <CSelect
                        required
                        custom
                        id="project_id"
                        onChange={(e) => {
                          setUpdatedTicket({
                            ...updatedTicket,
                            assigned_to: e.target.value,
                          });
                        }}
                      >
                        <option value="-1">Please select</option>
                        {users.map((item, index) => (
                          <option key={index} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </CSelect>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="project_id">
                        <strong>Project Name</strong>
                      </CLabel>

                      <CSelect
                        custom
                        required
                        id="project_id"
                        onChange={(e) => {
                          setUpdatedTicket({
                            ...updatedTicket,
                            project_id: e.target.value,
                          });
                        }}
                      >
                        <option value="-1">Please select</option>
                        {projects.map((item, index) => (
                          <option key={index} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </CSelect>
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="12">
                    <CFormGroup>
                      <CLabel htmlFor="type">
                        <strong>Ticket Type</strong>
                      </CLabel>

                      <CInput
                        id="type"
                        placeholder="Enter a type"
                        required
                        onChange={(e) =>
                          setUpdatedTicket({
                            ...updatedTicket,
                            type: e.target.value,
                          })
                        }
                      />
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="target_end_date">
                        <strong>Target End Date</strong>
                      </CLabel>

                      <CInput
                        type="date"
                        id="target_end_date"
                        name="target_end_date"
                        placeholder="date"
                        required
                        onChange={(e) => {
                          setUpdatedTicket({
                            ...updatedTicket,
                            target_end_date: e.target.value,
                          });
                        }}
                      />
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="actutal_end_date">
                        <strong>Actual End Date</strong>
                      </CLabel>

                      <CInput
                        type="date"
                        id="actutal_end_date"
                        name="actutal_end_date"
                        placeholder="date"
                        required
                        onChange={(e) => {
                          setUpdatedTicket({
                            ...updatedTicket,
                            actutal_end_date: e.target.value,
                          });
                        }}
                      />
                    </CFormGroup>
                  </CCol>
                </CRow>

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
                    onClick={handleReset}
                  >
                    <CIcon name="cil-ban" /> Reset
                  </CButton>
                </CRow>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default AddNewTicket;
