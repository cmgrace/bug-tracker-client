import React from "react";

import {
  //   CBadge,
  //   CButton,
  //   CButtonGroup,
  CCardGroup,
  CCard,
  CCardBody,
  //   CCardFooter,
  CCardHeader,
  CCol,
  //   CProgress,
  CRow,
  //   CCallout,
} from "@coreui/react";
import {
  //   CChartBar,
  //   CChartLine,
  CChartDoughnut,
  //   CChartRadar,
  CChartPie,
  //   CChartPolarArea,
} from "@coreui/react-chartjs";
// import CIcon from "@coreui/icons-react";

// import MainChartExample from "../charts/MainChartExample.js";

const myproject = [
  {
    name: "Amazon Clone",
    description:
      "An online retailer provides various products for customer to purchase",
    personnel: [
      {
        id: 0,
        name: "John Demo",
        registered: "2018/01/01",
        role: "Guest",
        status: "Pending",
        email: "John.Doe@democompa.com",
      },
      {
        id: 1,
        name: "Samppa Nori",
        registered: "2018/01/01",
        role: "Member",
        status: "Active",
        email: "Samppa.Nori@democompa.com",
      },
      {
        id: 2,
        name: "Estavan Lykos",
        registered: "2018/02/01",
        role: "Staff",
        status: "Banned",
        email: "Estavan.Lykos@democompa.com",
      },
      {
        id: 3,
        name: "Chetan Mohamed",
        registered: "2018/02/01",
        role: "Admin",
        status: "Inactive",
        email: "Chetan.Mohamed@democompa.com",
      },
    ],
    tickets: [
      {
        ticket_id: 0,
        title: "Aesthestics please",
        submitter: "Jorgen Malakith",
        Developer: "Demo Dev",
        status: "Open",
        Created: "04/21/2021 5:58 PM",
      },
      {
        ticket_id: 1,
        title: "Name not showing correctly",
        submitter: "Joe Demo",
        Developer: "Demo Dev",
        status: "Open",
        Created: "04/20/2021 9:16 AM",
      },
    ],
  },
];
function ProjectDetails() {
  //   const [project, setProject] = useState([myproject]);

  return (
    <CRow>
      <CCol>
        <CCardGroup columns className="cols-2">
          <CCard>
            <CCardHeader>Tickets</CCardHeader>
            <CCardBody>
              <CChartDoughnut
                datasets={[
                  {
                    backgroundColor: [
                      "#41B883",
                      //   "#E46651",
                      //   "#00D8FF",
                      "#DD1B16",
                    ],
                    data: [40, 60],
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
            <CCardHeader>Personnel</CCardHeader>
            <CCardBody>
              <CChartPie
                datasets={[
                  {
                    backgroundColor: [
                      "#41B883",
                      "#E46651",
                      "#00D8FF",
                      "#DD1B16",
                    ],
                    data: [40, 20, 80, 10],
                  },
                ]}
                labels={["VueJs", "EmberJs", "ReactJs", "AngularJs"]}
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
  );
}

export default ProjectDetails;
