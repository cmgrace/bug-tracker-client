import { React, useState } from "react";

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
  CCardLink,
} from "@coreui/react";
//import CIcon from "@coreui/icons-react";

//import usersData from "../users/UsersData";

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

//const fields = ["username", "description", "status"];
const items = [
  {
    username: "Samppa Nori",
    registered: "2012/01/01",
    role: "Member",
    status: "Active",
  },
  {
    username: "Estavan Lykos",
    registered: "2012/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    username: "Chetan Mohamed",
    registered: "2012/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    username: "Derick Maximinus",
    registered: "2012/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    username: "Friderik Dávid",
    registered: "2012/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    username: "Yiorgos Avraamu",
    registered: "2012/01/01",
    role: "Member",
    status: "Active",
  },
  {
    username: "Avram Tarasios",
    registered: "2012/02/01",
    role: "Staff",
    status: "Banned",
    _classes: "table-success",
  },
  {
    username: "Quintin Ed",
    registered: "2012/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    username: "Enéas Kwadwo",
    registered: "2012/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    username: "Agapetus Tadeáš",
    registered: "2012/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    username: "Carwyn Fachtna",
    registered: "2012/01/01",
    role: "Member",
    status: "Active",
    _classes: "table-info",
  },
  {
    username: "Nehemiah Tatius",
    registered: "2012/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    username: "Ebbe Gemariah",
    registered: "2012/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    username: "Eustorgios Amulius",
    registered: "2012/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    username: "Leopold Gáspár",
    registered: "2012/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    username: "Pompeius René",
    registered: "2012/01/01",
    role: "Member",
    status: "Active",
  },
  {
    username: "Paĉjo Jadon",
    registered: "2012/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    username: "Micheal Mercurius",
    registered: "2012/02/01",
    role: "Admin",
    status: "Inactive",
  },
  {
    username: "Ganesha Dubhghall",
    registered: "2012/03/01",
    role: "Member",
    status: "Pending",
  },
  {
    username: "Hiroto Šimun",
    registered: "2012/01/21",
    role: "Staff",
    status: "Active",
  },
  {
    username: "Vishnu Serghei",
    registered: "2012/01/01",
    role: "Member",
    status: "Active",
  },
  {
    username: "Zbyněk Phoibos",
    registered: "2012/02/01",
    role: "Staff",
    status: "Banned",
  },
  {
    username: "Einar Randall",
    registered: "2012/02/01",
    role: "Admin",
    status: "Inactive",
    _classes: "table-danger",
  },
  {
    username: "Félix Troels",
    registered: "2012/03/21",
    role: "Staff",
    status: "Active",
  },
  {
    username: "Aulus Agmundr",
    registered: "2012/01/01",
    role: "Member",
    status: "Pending",
  },
];

const fields = [
  { key: "username", style: "min-width:200px" },
  "registered",
  { key: "role", style: "min-width:100px;" },
  { key: "status", style: "min-width:100px;" },
  {
    key: "show_details",
    label: "",
    style: "width:1%",
    sorter: false,
    filter: false,
  },
];

// export const map_data = {
//   name: "AdvancedTables",
//   data() {
//     return {
//       items: usersData.map((item, id) => {
//         return { ...item, id };
//       }),
//       fields,
//       details: [],
//       collapseDuration: 0,
//     };
//   },
//   methods: {
//     getBadge(status) {
//       switch (status) {
//         case "Active":
//           return "success";
//         case "Inactive":
//           return "secondary";
//         case "Pending":
//           return "warning";
//         case "Banned":
//           return "danger";
//         default:
//           return "primary";
//       }
//     },
//     toggleDetails(item) {
//       this.$set(this.items[item.id], "_toggled", !item._toggled);
//       this.collapseDuration = 300;
//       this.$nextTick(() => {
//         this.collapseDuration = 0;
//       });
//     },
//   },
// };
function MyProjects() {
  const [visible, setVisible] = useState(false);

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
              //   items={usersData}
              //   fields={fields}
              items={items}
              fields={fields}
              itemsPerPage={5}
              clickableRows
              //onRowClick={(e) => console.log("row clicked")}
              hover
              sorter
              itemsPerPageSelect
              columnFilter
              tableFilter
              pagination
              scopedSlots={{
                status: (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                  </td>
                ),
                show_details: (item, index) => (
                  <td className="py-2">
                    <CButton
                      href="#"
                      color="primary"
                      variant="outline"
                      size="sm"
                      //onClick={(e) => this.toggleDetails(e.target)}
                      onClick={() => {
                        setVisible(!visible);
                      }}
                    >
                      {visible ? "Hide" : "Show"}
                    </CButton>
                  </td>
                ),
                details: (item) => (
                  <CCollapse show={visible}>
                    <CCard className="mt-3" style={{ height: "18rem" }}>
                      <CCardBody>
                        <CCardTitle>Card title</CCardTitle>
                        <CCardSubtitle className="mb-2 text-muted">
                          Card subtitle
                        </CCardSubtitle>
                        <CCardText>
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </CCardText>
                        <CCardLink href="#">Card link</CCardLink>
                        <CCardLink href="#">Another link</CCardLink>

                        <h4>{item.username}</h4>
                        <p className="text-muted">
                          User since: {item.registered}
                        </p>
                        <CButton size="sm" color="info" className="">
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
  );
}

export default MyProjects;
