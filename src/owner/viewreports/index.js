/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";



// Data

import reportsLineChartData from "owner/dashboard/data/reportsLineChartData";

// Dashboard components


import DataTable from "examples/Tables/DataTable";
import PieChart from "examples/Charts/PieChart";

import { useMaterialUIController, setDirection } from "context";
import { useEffect } from "react";



function Dashboard() {

  const [, dispatch] = useMaterialUIController();
  const { sales, tasks } = reportsLineChartData;
  useEffect(() => {
    setDirection(dispatch, "owner");

    return () => setDirection(dispatch, "ltr");
  }, []);
  // const { sales, tasks } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={12}>
            <MDBox mb={1.5}>

            <Grid item xs={12} md={6} lg={12}>
                <MDBox mb={1.5}>
                        
              <PieChart
            icon={{ color: "info", component: "leaderboard" }}
            // title=""
            description="Total events"
            chart={{
                labels: ["Sundream", "River Park", "Shiny Lakeside", "Shiny garden"],
                datasets: {
                label: "Projects",
                backgroundColors: ["success", "primary", "error", "info", "primary"],
                data: [15, 20, 12, 40],
                },
            }}
            />


                </MDBox>
            </Grid>

              {/* <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="MY next event"
                count={281}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "45 events",
                }}
              /> */}

                <DataTable
                table={{
                    columns: [
                    { Header: "Banquet name", accessor: "name", width: "25%" },
                    { Header: "Date", accessor: "position", width: "30%" },
                    { Header: "Event", accessor: "office" },
                    { Header: "Income", accessor: "age", width: "12%" },
                    ],
                    rows: [
                    {
                        name: "Sundream",
                        position: "2021.05.30",
                        office: "Day",
                        age: 100000,
                        startDate: "4/11/2021",
                        salary: "$474,978",
                    },
                    {
                        name: "Sundream",
                        position: "2021.06.31",
                        office: "Night",
                        age: 47000,
                        startDate: "8/2/2021",
                        salary: "$387,287",
                    },
                    {
                        name: "River Park",
                        position: "2021.07.30",
                        office: "Day",
                        age: 25000,
                        startDate: "4/21/2021",
                        salary: "$94,780",
                    },
                    {
                        name: "Shiny Lakeside",
                        position: "2021.08.30",
                        office: "Night",
                        age: 57000,
                        startDate: "12/6/2020",
                        salary: "$179,177",
                    },
                    {
                        name: "Shiny Garden",
                        position: "2020.09.30",
                        office: "Day",
                        age: 56000,
                        startDate: "11/7/2020",
                        salary: "$440,874",
                    },
                    {
                        name: "Sundream",
                        position: "2021.10.31",
                        office: "Night",
                        age: 31000,
                        startDate: "7/18/2021",
                        salary: "$404,983",
                    },
                    {
                        name: "Sundream",
                        position: "2020.11.30",
                        office: "Day",
                        age: 50000,
                        startDate: "10/1/2020",
                        salary: "$346,576",
                    },
                    {
                        name: "Shiny Lakeside",
                        position: "2020.12.31",
                        office: "Day",
                        age: 19000,
                        startDate: "1/14/2021",
                        salary: "$445,171",
                    },
                    {
                        name: "Sundream",
                        position: "2022.05.31",
                        office: "Day",
                        age: 56000,
                        startDate: "3/21/2021",
                        salary: "$441,569",
                    },
                    {
                        name: "Shiny Garden",
                        position: "2020.05.31",
                        office: "Day",
                        age: 28000,
                        startDate: "5/27/2021",
                        salary: "$336,238",
                    },
                    {
                        name: "River Park",
                        position: "2020.06.31",
                        office: "Night",
                        age: 27000,
                        startDate: "3/23/2021",
                        salary: "$473,391",
                    },
                    {
                        name: "Sundream",
                        position: "2021.10.31",
                        office: "Day",
                        age: 63000,
                        startDate: "5/1/2021",
                        salary: "$339,489",
                    },
                    ]
                }}
                />

            </MDBox>
          </Grid>
          
          
         
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              
            </Grid>
            </Grid>
        </MDBox>
        <MDBox>
          
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
