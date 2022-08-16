/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

// Images
import foodmenu from "assets/images/small-logos/food-menu.jpg";
import partyDecoration from "assets/images/small-logos/party-decoration.jpg";
import payment from "assets/images/small-logos/payment.svg";
import giftbox from "assets/images/small-logos/gift-box.png";
import schedule from "assets/images/small-logos/schedule.png";
import bar from "assets/images/small-logos/bar.svg";


import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <MDAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { white } }) =>
              `${borderWidth[2]} solid ${white.main}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Tasks", accessor: "tasks", align: "left" },
/*       { Header: "members", accessor: "members", width: "10%", align: "left" },
 */      { Header: "Started", accessor: "start", align: "left" },
      { Header: "completion", accessor: "completion", align: "center" },
      { Header: "Go to task", accessor: "gotask", align: "center" },
    ],

    rows: [
      {
        tasks: <Company image={foodmenu} name="Menu Selction" />,
      
        start: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            2022.12.03
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        gotask: (
          <MDButton variant="gradient" color="info">
          Proceede
        </MDButton>
        
        ),
      },
      {
        tasks: <Company image={partyDecoration} name="Decorate My Event" />,
      
        start: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            -
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={0} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        gotask: (
          <MDButton variant="gradient" color="info">
          Proceede
        </MDButton>
        
        ),
      },
      {
        tasks: <Company image={payment} name="Payment & Subscriptions" />,
      
        start: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            2022.12.10
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        gotask: (
          <MDButton variant="gradient" color="info">
          Proceede
        </MDButton>
        
        ),
      },
      {
        tasks: <Company image={giftbox} name="Order Complementary services" />,
      
        start: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            2022.12.03
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        gotask: (
          <MDButton variant="gradient" color="info">
          Proceede
        </MDButton>
        
        ),
      },
      {
        tasks: <Company image={schedule} name="Event Schedule" />,
      
        start: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            2022.12.03
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={80} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        gotask: (
          <MDButton variant="gradient" color="info">
          Proceede
        </MDButton>
        
        ),
      },
      {
        tasks: <Company image={bar} name="Setup my bar" />,
      
        start: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            2022.12.03
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={80} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
        gotask: (
          <MDButton variant="gradient" color="info">
          Proceede
        </MDButton>
        
        ),
      },
      
    
    ],
  };
}
