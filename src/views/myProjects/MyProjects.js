import { React, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProjects, deleteProject } from "../../actions/projects";

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

const fields = [
  { key: "name", style: "min-width:200px " },
  { key: "start_date", style: "min-width:200px", label: "Start Date" },
  {
    key: "target_end_date",
    style: "min-width:200px",
    label: "Target End Date",
  },
  { key: "create_by", style: "min-width:200px", label: "Creator" },

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
function MyProjects() {
  const history = useHistory();
  const handleClickSeeDetail = (itemId) => {
    history.push(`/myProjects/${itemId}`);
    console.log("History:", history.push);
    console.log("itemId:", itemId);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  const items = useSelector((state) => state.projects);
  //console.log("projects:", items);

  const [count, setCount] = useState(0);

  return (
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
              items={items}
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
                start_date: (item) => <td>{item.start_date.slice(0, 10)}</td>,
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
                        handleVisible(items, item.id);
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
                        <CCardTitle>Project Description</CCardTitle>
                        <CCardSubtitle className="mb-2 text-muted">
                          {item.name}
                        </CCardSubtitle>
                        <CCardText>{item.description}</CCardText>
                        {/* <CCardLink href="#">Card link</CCardLink>
                        <CCardLink href="#">Another link</CCardLink> */}

                        <h4>{item.username}</h4>
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
                          onClick={() => dispatch(deleteProject(item.id))}
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

export default MyProjects;
