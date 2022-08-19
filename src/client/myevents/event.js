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
import Divider from "@mui/material/Divider";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Bill from "client/billing/components/Bill";


// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import ProfilesList from "examples/Lists/ProfilesList";
import DefaultProjectCard from "examples/Cards/ProjectCards/DefaultProjectCard";
import DataTable from "examples/Tables/DataTable";

// Overview page components
import Header from "layouts/profile/components/Header";
import PlatformSettings from "layouts/profile/components/PlatformSettings";

// Data
import profilesListData from "layouts/profile/data/profilesListData";

// Images
import homeDecor1 from "assets/images/home-decor-1.jpg";
import homeDecor2 from "assets/images/home-decor-2.jpg";
import homeDecor3 from "assets/images/home-decor-3.jpg";
import homeDecor4 from "assets/images/home-decor-4.jpeg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import TasksData from "./TasksData";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Typography from '@mui/material/Typography';
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";


function Event() {
    const { columns: pColumns, rows: pRows } = TasksData();
    return (
        <div>
            <MDBox bgcolor="Secondary" mt={2} pt={2}  lineHeight={1.25}>
                
                {<DataTable
                    table={{ columns: pColumns, rows: pRows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                />}
            </MDBox>


            <MDBox mt={5} mb={3}>
                <Grid container spacing={1}>

                    <Grid item xs={12} >
                        <MDBox py={3}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6} lg={4}>
                                    <MDBox mb={1.5}>
                                        <DefaultInfoCard
                                            icon="group"
                                            title="Pax"
                                            description="Belong Interactive"
                                            value="3000"
                                        />
                                    </MDBox>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4}>
                                    <MDBox mb={1.5}>
                                        <DefaultInfoCard
                                            icon="room_service"
                                            title="Menu"
                                            description="Belong Interactive"
                                            value="Topaz"
                                        />
                                    </MDBox>
                                </Grid>
                                <Grid item xs={12} md={6} lg={4}>
                                    <MDBox mb={1.5}>
                                        <DefaultInfoCard
                                            icon="account_balance"
                                            title="Banquet"
                                            description="Belong Interactive"
                                            value="Hotel Sundream"
                                        />
                                    </MDBox>
                                </Grid>
                            </Grid>
                        </MDBox>
                        <ProfilesList title="Food and Beverages" profiles={profilesListData} shadow={false} />
                    </Grid>
                </Grid>
            </MDBox>


            <Footer />
        </div>

    );
}

export default Event;