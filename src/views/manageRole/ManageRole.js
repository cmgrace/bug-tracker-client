import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CInputCheckbox,
  CLabel,
  CSelect,
  CRow,
  CBadge,
  CDataTable,
  CInput,
  CInputGroup,
  CInputGroupAppend,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import usersData from "../users/UsersData";

// const teamMember = [
//   {
//     id: 1,
//     name: "Grace Cheng",
//   },
//   {
//     id: 2,
//     name: "Ernest Law",
//   },
//   {
//     id: 3,
//     name: "Daniel Wu",
//   },
//   {
//     id: 4,
//     name: "Jacob Lee",
//   },
//   {
//     id: 5,
//     name: "Joshua Masterson",
//   },
//   {
//     id: 6,
//     name: "Deviant Man",
//   },
//   {
//     id: 7,
//     name: "Jorgen malakith",
//   },
//   {
//     id: 8,
//     name: "Bobby Savis",
//   },
// ];
const getBadge = (status) => {
  switch (status) {
    case "Active":
      return "success";
    case "Inactive":
      return "secondary";
    case "Pending":
      return "warning";
    case "Banned":
      return "danger";
    default:
      return "primary";
  }
};
const fields = ["name", "registered", "role", "status"];

function ManageRole() {
  return (
    <>
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              <h5>
                <strong>Assign New Roles</strong>
              </h5>
            </CCardHeader>
            <CCardBody>
              <CForm
                action=""
                method="post"
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect custom name="select" id="select">
                      <option value="0">Please select</option>
                      <option value="1">Option #1</option>
                      <option value="2">Option #2</option>
                      <option value="3">Option #3</option>
                    </CSelect>
                  </CCol>
                </CFormGroup>

                <CFormGroup row>
                  <CCol md="3">
                    <CLabel>Checkboxes</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox
                        id="checkbox1"
                        name="checkbox1"
                        value="option1"
                      />
                      <CLabel
                        variant="checkbox"
                        className="form-check-label"
                        htmlFor="checkbox1"
                      >
                        Option 1
                      </CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox
                        id="checkbox2"
                        name="checkbox2"
                        value="option2"
                      />
                      <CLabel
                        variant="checkbox"
                        className="form-check-label"
                        htmlFor="checkbox2"
                      >
                        Option 2
                      </CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox" className="checkbox">
                      <CInputCheckbox
                        id="checkbox3"
                        name="checkbox3"
                        value="option3"
                      />
                      <CLabel
                        variant="checkbox"
                        className="form-check-label"
                        htmlFor="checkbox3"
                      >
                        Option 3
                      </CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary">
                <CIcon name="cil-scrubber" /> Submit
              </CButton>{" "}
              <CButton type="reset" size="sm" color="danger">
                <CIcon name="cil-ban" /> Reset
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <CRow>
                <CCol md="6">
                  <h5>
                    <strong>Your Personnel</strong>
                  </h5>
                </CCol>
                <CCol>
                  <CForm action="" method="post" className="form-horizontal">
                    <CFormGroup row className="justify-content-end my-sm-0">
                      <CCol md="6">
                        <CInputGroup>
                          <CInput
                            id="input2-group2"
                            name="input2-group2"
                            placeholder="Username"
                          />
                          <CInputGroupAppend>
                            <CButton type="button" color="primary">
                              <CIcon name="cil-magnifying-glass" /> Search
                            </CButton>
                          </CInputGroupAppend>
                        </CInputGroup>
                      </CCol>
                    </CFormGroup>
                  </CForm>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
}

export default ManageRole;
