import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProject } from "src/actions/projects";

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

function AddNewProject() {
  const dispatch = useDispatch();
  const [updatedTicket, setUpdatedTicket] = useState({
    name: "",
    description: "",
    status: "",
    start_date: "",
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
      updatedT.modified_on === 0
    )
      console.log("Please select a correct value");
    else dispatch(createProject(updatedT));

    console.log(updatedT);
  };
  const handleReset = () => {
    setUpdatedTicket({
      name: "",
      description: "",
      status: "",
      start_date: "",
      target_end_date: "",
      actutal_end_date: "",
      create_by: "Grace Cheng",
      modified_by: "Grace Cheng",
      visible: false,
    });
  };

  return (
    <>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>Add New Project</CCardHeader>
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
                        <strong>Project Title</strong>
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
                        <strong>Project Description</strong>
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
                        custom
                        id="project_id"
                        value="-1"
                        onChange={(e) => {
                          setUpdatedTicket({
                            ...updatedTicket,
                            status: e.target.value,
                          });
                        }}
                      >
                        <option value="-1">Please select</option>
                        {["Active", "Inactive", "Pendding", "Banned"].map(
                          (item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          )
                        )}
                      </CSelect>
                    </CFormGroup>
                  </CCol>
                  <CCol xs="6">
                    <CFormGroup>
                      <CLabel htmlFor="start-date">
                        <strong>Start Date</strong>
                      </CLabel>

                      <CInput
                        type="date"
                        id="start-date"
                        name="start-date"
                        placeholder="date"
                        onChange={(e) => {
                          setUpdatedTicket({
                            ...updatedTicket,
                            start_date: e.target.value,
                          });
                        }}
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

export default AddNewProject;
