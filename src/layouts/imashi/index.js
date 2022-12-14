import { Link } from "react-router-dom";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import { Grid } from "@mui/material";
import DataTable from "examples/Tables/DataTable";
import MDTypography from "components/MDTypography";
import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import TimelineItemImashi from "examples/Timeline/TimeLineItemImashi";
import TimelineList from "examples/Timeline/TimelineList";
import TimelineItem from "examples/Timeline/TimelineItem";
//Service Name, Type, provider, charge, event date,event time,event type ordrerd date, notes, status,  ordered date

function Imashi() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox>
                <DefaultLineChart
                    icon={{ color: "info", component: "leaderboard" }}
                    title="Default Line Chart"
                    description="Product insights"
                    chart={{
                        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [
                            {
                                label: "Organic Search",
                                color: "info",
                                data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                            },
                            {
                                label: "Referral",
                                color: "dark",
                                data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
                            },
                            {
                                label: "Direct",
                                color: "primary",
                                data: [40, 80, 70, 90, 30, 90, 140, 130, 200],
                            },
                        ],
                    }}
                />
            </MDBox>
            <MDBox py={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <ProfileInfoCard
                                title="profile information"
                                description="Hi, I???m Alec Thompson, Decisions: If you can???t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                                info={{
                                    fullName: "Alec M. Thompson",
                                    mobile: "(44) 123 1234 123",
                                    email: "alecthompson@mail.com",
                                    location: "USA",
                                }}
                                social={[
                                    {
                                        link: "https://www.facebook.com/CreativeTim/",
                                        icon: <FacebookIcon />,
                                        color: "facebook",
                                    },
                                    {
                                        link: "https://twitter.com/creativetim",
                                        icon: <TwitterIcon />,
                                        color: "twitter",
                                    },
                                    {
                                        link: "https://www.instagram.com/creativetimofficial/",
                                        icon: <InstagramIcon />,
                                        color: "instagram",
                                    },
                                ]}
                                action={{ route: "", tooltip: "Edit Profile" }}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <ProfileInfoCard
                                title="profile information"
                                description="Hi, I???m Alec Thompson, Decisions: If you can???t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                                info={{
                                    fullName: "Alec M. Thompson",
                                    mobile: "(44) 123 1234 123",
                                    email: "alecthompson@mail.com",
                                    location: "USA",
                                }}
                                social={[
                                    {
                                        link: "https://www.facebook.com/CreativeTim/",
                                        icon: <FacebookIcon />,
                                        color: "facebook",
                                    },
                                    {
                                        link: "https://twitter.com/creativetim",
                                        icon: <TwitterIcon />,
                                        color: "twitter",
                                    },
                                    {
                                        link: "https://www.instagram.com/creativetimofficial/",
                                        icon: <InstagramIcon />,
                                        color: "instagram",
                                    },
                                ]}
                                action={{ route: "", tooltip: "Edit Profile" }}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <ProfileInfoCard
                                title="profile information"
                                description="Hi, I???m Alec Thompson, Decisions: If you can???t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                                info={{
                                    fullName: "Alec M. Thompson",
                                    mobile: "(44) 123 1234 123",
                                    email: "alecthompson@mail.com",
                                    location: "USA",
                                }}
                                social={[
                                    {
                                        link: "https://www.facebook.com/CreativeTim/",
                                        icon: <FacebookIcon />,
                                        color: "facebook",
                                    },
                                    {
                                        link: "https://twitter.com/creativetim",
                                        icon: <TwitterIcon />,
                                        color: "twitter",
                                    },
                                    {
                                        link: "https://www.instagram.com/creativetimofficial/",
                                        icon: <InstagramIcon />,
                                        color: "instagram",
                                    },
                                ]}
                                action={{ route: "", tooltip: "Edit Profile" }}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <ProfileInfoCard
                                title="profile information"
                                description="Hi, I???m Alec Thompson, Decisions: If you can???t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
                                info={{
                                    fullName: "Alec M. Thompson",
                                    mobile: "(44) 123 1234 123",
                                    email: "alecthompson@mail.com",
                                    location: "USA",
                                }}
                                social={[

                                ]}
                                action={{ route: "", tooltip: "Edit Profile" }}
                            />
                        </MDBox>
                        <MDBox>
                        </MDBox>
                    </Grid>
                </Grid>
            </MDBox>
            <MDBox>
                
            <TimelineList title="Timeline">
            <TimelineItem
    icon="shopping_cart"
    title="Server payments for April"
    dateTime="21 DEC 9:34 PM"
    description="People care about how you see the world, how you think, what motivates you, what you???re struggling with or afraid of."
    badges={["server", "payments"]}
   
  />
     <TimelineItem
    icon="shopping_cart"
    title="Server payments for April"
    dateTime="21 DEC 9:34 PM"
    description="People care about how you see the world, how you think, what motivates you, what you???re struggling with or afraid of."
    badges={["server", "payments"]}
    lastItem
  />
 
</TimelineList>

            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}
export default Imashi;

//Service Name, Type, provider, charge, event date,event time,event type ordrerd date, notes, status,  ordered date