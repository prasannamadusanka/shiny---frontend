import { Link } from "react-router-dom";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MDBox from "components/MDBox";
import { Grid } from "@mui/material";
import DataTable from "examples/Tables/DataTable";
import MDTypography from "components/MDTypography";
// import ProfileInfoCard from "examples/Cards/InfoCards/ProfileInfoCard";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
//import avenra from ""./avenra.jpg"";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
//import TimelineItemImashi from "examples/Timeline/TimeLineItemImashi";
import TimelineList from "examples/Timeline/TimelineList";
import TimelineItem from "examples/Timeline/TimelineItem";
import OwnerProfile from "examples/Cards/InfoCards/OwnerProfile";
//Service Name, Type, provider, charge, event date,event time,event type ordrerd date, notes, status,  ordered date

function Ownerdashboard() {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <MDBox>
                <DefaultLineChart
                    icon={{ color: "info", component: "leaderboard" }}
                    title="Income chart"
                    image="Events"
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
                            <OwnerProfile
                                title="SHINY GARDEN"
                                image="./images/shinygarden.jpg"
                                info={{
                                    Manager: "A.K.Perera",
                                    mobile: "076-4268177",
                                    email: "akperera@gmail.com",
                                    location: "Hikkaduwa",
                                }}
                                // social={[
                                //     {
                                //         link: "https://www.facebook.com/CreativeTim/",
                                //         icon: <FacebookIcon />,
                                //         color: "facebook",
                                //     },
                                //     {
                                //         link: "https://twitter.com/creativetim",
                                //         icon: <TwitterIcon />,
                                //         color: "twitter",
                                //     },
                                //     {
                                //         link: "https://www.instagram.com/creativetimofficial/",
                                //         icon: <InstagramIcon />,
                                //         color: "instagram",
                                //     },
                                // ]}
                                action={{ route: "", tooltip: "Edit Profile" }}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5} >
                            <OwnerProfile
                                title="SUNDREAM"
                                image="./images/sundream.jpg"
                                info={{
                                    Manager: "V.W.Siriwardana",
                                    mobile: "077-2548711",
                                    email: "alecthompson@mail.com",
                                    location: "Matara",
                                }}
                                // social={[
                                //     {
                                //         link: "https://www.facebook.com/CreativeTim/",
                                //         icon: <FacebookIcon />,
                                //         color: "facebook",
                                //     },
                                //     {
                                //         link: "https://twitter.com/creativetim",
                                //         icon: <TwitterIcon />,
                                //         color: "twitter",
                                //     },
                                //     {
                                //         link: "https://www.instagram.com/creativetimofficial/",
                                //         icon: <InstagramIcon />,
                                //         color: "instagram",
                                //     },
                                // ]}
                                action={{ route: "", tooltip: "Edit Profile" }}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1.5}>
                            <OwnerProfile
                                title="RIVER PARK"
                                image="./images/riverpark.jpg"
                                info={{
                                    Manager: "K.C.Witharana",
                                    mobile: "077-3657844",
                                    email: "kcwhompson@gmail.com",
                                    location: "Galle",
                                }}
                                // social={[
                                //     {
                                //         link: "https://www.facebook.com/CreativeTim/",
                                //         icon: <FacebookIcon />,
                                //         color: "facebook",
                                //     },
                                //     {
                                //         link: "https://twitter.com/creativetim",
                                //         icon: <TwitterIcon />,
                                //         color: "twitter",
                                //     },
                                //     {
                                //         link: "https://www.instagram.com/creativetimofficial/",
                                //         icon: <InstagramIcon />,
                                //         color: "instagram",
                                //     },
                                // ]}
                                action={{ route: "", tooltip: "Edit Profile" }}
                            />
                        </MDBox>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <MDBox mb={1}>
                            <OwnerProfile
                                title="SHINY LAKESIDE"
                                image="./images/shinylakeside.jpg"
                                info={{
                                    Manager: "K.P.Fernando",
                                    mobile: "072-4587912",
                                    email: "kpfer@gmail.com",
                                    location: "Ahangama",
                                }}
                                // social={[

                                // ]}
                                action={{ route: "", tooltip: "Edit Profile" }}
                            />
                        </MDBox>
                        {/* <MDBox>
                        </MDBox> */}
                    </Grid>
                </Grid>
            </MDBox>
            <MDBox>
                
                <TimelineList title="Timeline">
                        <TimelineItem
                            icon="shopping_cart"
                            title="Advanced payment-Rs.10000.00"
                            dateTime="21 DEC 9:34 PM"
                            description="Wedding event-2022.12.02"
                            event="Sundream"
                            badges={["server", "payments"]}
                        
                        />

                        <TimelineItem
                            icon="shopping_cart"
                            title="Advanced payment-Rs.10000.00"
                            dateTime="21 DEC 9:34 PM"
                            description="Wedding event-2022.12.04"
                            event="Shiny Garden"
                            badges={["server", "payments"]}
                            // lastItem
                        />

                        <TimelineItem
                            icon="shopping_cart"
                            title="Advanced payment-Rs.10000.00"
                            dateTime="22 DEC 9:34 PM"
                            description="Wedding event-2022.12.04"
                            event="River Park"
                            badges={["server", "payments"]}
                            // lastItem
                           
                        />

                        <TimelineItem
                            icon="shopping_cart"
                            title="Advanced payment-Rs.10000.00"
                            dateTime="22 DEC 9:34 PM"
                            description="Wedding event-2022.12.04"
                            event="River Park"
                            badges={["server", "payments"]}
                            // lastItem
                           
                        />


                        <TimelineItem
                            icon="shopping_cart"
                            title="Advanced payment-Rs.10000.00"
                            dateTime="22 DEC 9:34 PM"
                            description="Wedding event-2022.12.04"
                            event="Shiny Lakeside"
                            badges={["server", "payments"]}
                            lastItem
                           
                        />
                    
                 </TimelineList>

            </MDBox>
            <Footer />
        </DashboardLayout>
    );
}
export default Ownerdashboard;

//Service Name, Type, provider, charge, event date,event time,event type ordrerd date, notes, status,  ordered date