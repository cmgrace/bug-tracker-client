import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllUsers, updateUser } from "../../actions/users";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CLabel,
  CSelect,
  CRow,
  CDataTable,
  CInputRadio,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const fields = ["name", "email", "registered", "role"];

function ManageRole() {
  const dispatch = useDispatch();

  const [id, setId] = useState("-1");
  const [role, setRole] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const members = useSelector((state) => state.users);
  //const assignMembers = members.filter((member) => member.role.length === 0);
  console.log("members:", members);

  const findUser = (id) => {
    const theUser = members.find((member) => member.id === id);
    return theUser;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userAdd = {
      //   name: user.name,
      //   email: user.email,
      //   registered: user.registered,
      ...user,
      role: role,
    };
    if (id !== -1) dispatch(updateUser(id, userAdd));
    else if (id === -1) console.log("Please select a user");
    setId("-1");
    setRole();
    setUser();
  };
  const handleReset = () => {
    setId("-1");
    setRole();
  };

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
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="form-horizontal"
              >
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="select">Select an user</CLabel>
                  </CCol>
                  <CCol xs="12" md="9">
                    <CSelect
                      custom
                      name="select"
                      id="select"
                      value={id}
                      onChange={(e) => {
                        setId(e.target.value);
                        // console.log(user);
                        setUser(findUser(id));
                      }}
                    >
                      <option value="-1">Please select</option>
                      {members.map((member) => (
                        <option key={member.id} value={member.id}>
                          {member.name}
                        </option>
                      ))}
                    </CSelect>
                    {/* <p>{id}</p>
                    <p>{role}</p> */}
                  </CCol>
                </CFormGroup>
                <CFormGroup
                  row
                  onChange={(e) => {
                    const selectRole = e.target.value;
                    setRole(selectRole);
                  }}
                >
                  <CCol md="3">
                    <CLabel>Select a role</CLabel>
                  </CCol>
                  <CCol md="9">
                    <CFormGroup variant="checkbox">
                      <CInputRadio
                        className="form-check-input"
                        id="radio1"
                        name="radios"
                        value="Developer"
                      />
                      <CLabel variant="checkbox" htmlFor="radio1">
                        Developer
                      </CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox">
                      <CInputRadio
                        className="form-check-input"
                        id="radio2"
                        name="radios"
                        value="Tech Lead"
                      />
                      <CLabel variant="checkbox" htmlFor="radio2">
                        Tech Lead
                      </CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox">
                      <CInputRadio
                        className="form-check-input"
                        id="radio3"
                        name="radios"
                        value="Project Manager"
                      />
                      <CLabel variant="checkbox" htmlFor="radio3">
                        Project Manager
                      </CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox">
                      <CInputRadio
                        className="form-check-input"
                        id="radio4"
                        name="radios"
                        value="Admin"
                      />
                      <CLabel variant="checkbox" htmlFor="radio4">
                        Admin
                      </CLabel>
                    </CFormGroup>
                  </CCol>
                </CFormGroup>
                <CButton type="submit" size="sm" color="primary">
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
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>
              <h5>
                <strong>Your Projects</strong>
              </h5>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={members}
                fields={fields}
                itemsPerPage={5}
                // clickableRows
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

export default ManageRole;
