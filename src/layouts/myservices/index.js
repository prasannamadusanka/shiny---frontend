// @mui material components
import { Link } from "react-router-dom";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import MDTypography from "components/MDTypography";

//Service Name, Type, provider, charge, event date,event time,event type ordrerd date, notes, status,  ordered date

function MyServices(){
return (
    <DashboardLayout>
      <DashboardNavbar />
      
      <DataTable
  table={{
    columns: [
      { Header: "service Name", accessor: "serviceName", width: "10%" },
      { Header: "type", accessor: "type", width: "10%" },
      { Header: "service provider", accessor: "provider" },
      { Header: "charge", accessor: "charge" },
      { Header: "event date", accessor: "eventDate" },
      { Header: "event time", accessor: "eventTime" },
      { Header: "event type", accessor: "eventType" },
      { Header: "ordered date", accessor: "orderedDate" },
      { Header: "status", accessor: "status" },
      { Header: "notes", accessor: "notes" },
    ],
    rows: [
      {
        serviceName: "Deshiya Ashtaka",
        type: "poruwa Ashtaka",
        provider: "Waruna Mangala Mandiraya",
        charge: "RS.5600.00",
        eventDate: "4/11/2021",
        eventTime:"Day",
        eventType : "Wedding",
        orderedDate: "4/10/2021",
        status:"Accepted",
        notes:'-'
      },
      {
        serviceName: "Deshiya Ashtaka",
        type: "poruwa Ashtaka",
        provider: "Waruna Mangala Mandiraya",
        charge: "RS.5600.00",
        eventDate: "4/11/2021",
        eventTime:"Day",
        eventType : "Wedding",
        orderedDate: "4/10/2021",
        status:"Accepted",
        notes:'-'
      },
      {
        serviceName: "Deshiya Ashtaka",
        type: "poruwa Ashtaka",
        provider: "Waruna Mangala Mandiraya",
        charge: "RS.5600.00",
        eventDate: "4/11/2021",
        eventTime:"Day",
        eventType : "Wedding",
        orderedDate: "4/10/2021",
        status:"Accepted",
        notes:'-'
      },
      {
        serviceName: "Deshiya Ashtaka",
        type: "poruwa Ashtaka",
        provider: "Waruna Mangala Mandiraya",
        charge: "RS.5600.00",
        eventDate: "4/11/2021",
        eventTime:"Day",
        eventType : "Wedding",
        orderedDate: "4/10/2021",
        status:"Accepted",
        notes:'-'
      },
      {
        serviceName: "Deshiya Ashtaka",
        type: "poruwa Ashtaka",
        provider: "Waruna Mangala Mandiraya",
        charge: "RS.5600.00",
        eventDate: "4/11/2021",
        eventTime:"Day",
        eventType : "Wedding",
        orderedDate: "4/10/2021",
        status:"Accepted",
        notes:'-'
      },
      {
        serviceName: "Deshiya Ashtaka",
        type: "poruwa Ashtaka",
        provider: "Waruna Mangala Mandiraya",
        charge: "RS.5600.00",
        eventDate: "4/11/2021",
        eventTime:"Day",
        eventType : "Wedding",
        orderedDate: "4/10/2021",
        status:"Accepted",
        notes:'-'
      },
      {
        serviceName: "Deshiya Ashtaka",
        type: "poruwa Ashtaka",
        provider: "Waruna Mangala Mandiraya",
        charge: "RS.5600.00",
        eventDate: "4/11/2021",
        eventTime:"Day",
        eventType : "Wedding",
        orderedDate: "4/10/2021",
        status:"Accepted",
        notes:'-'
      },
      {
        serviceName: "Deshiya Ashtaka",
        type: "poruwa Ashtaka",
        provider: "Waruna Mangala Mandiraya",
        charge: "RS.5600.00",
        eventDate: "4/11/2021",
        eventTime:"Day",
        eventType : "Wedding",
        orderedDate: "4/10/2021",
        status:"Accepted",
        notes:'-'
      },
      {
        serviceName: "Deshiya Ashtaka",
        type: "poruwa Ashtaka",
        provider: "Waruna Mangala Mandiraya",
        charge: "RS.5600.00",
        eventDate: "4/11/2021",
        eventTime:"Day",
        eventType : "Wedding",
        orderedDate: "4/10/2021",
        status:"Accepted",
        notes:'-'
      },
      {
        serviceName: "Deshiya Ashtaka",
        type: "poruwa Ashtaka",
        provider: "Waruna Mangala Mandiraya",
        charge: "RS.5600.00",
        eventDate: "4/11/2021",
        eventTime:"Day",
        eventType : "Wedding",
        orderedDate: "4/10/2021",
        status:"Accepted",
        notes:'-'
      },
    
    
    ]
  }}
  entriesPerPage={false}
  canSearch ={true}  
></DataTable>
      <Footer />
    </DashboardLayout>
  );
}
export default MyServices;

//Service Name, Type, provider, charge, event date,event time,event type ordrerd date, notes, status,  ordered date