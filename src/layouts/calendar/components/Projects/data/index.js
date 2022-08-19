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
// import Tooltip from "@mui/material/Tooltip";
// import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
// import { Card } from "@mui/material";
// import MDAvatar from "components/MDAvatar";
// import MDProgress from "components/MDProgress";

// Images
// import logoXD from "assets/images/small-logos/logo-xd.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
// import team1 from "assets/images/team-1.jpg";
// import team2 from "assets/images/team-2.jpg";
// import team3 from "assets/images/team-3.jpg";
// import team4 from "assets/images/team-4.jpg";

export default function data() {
  /*
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
  */
  /*
  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );
  */

  return {
    columns: [
      { Header: " ", accessor: "description", width: "45%", align: "left" },
      { Header: " ", accessor: "buttons", width: "30%", align: "left" },
      /*
      { Header: " ", accessor: "budget",  width: "10%", align: "center" },
      { Header: " ", accessor: "completion",  width: "10%", align: "center" },
      */
    ],

    rows: [
      {
        description: (
          <MDTypography>
            <MDTypography variant="caption" color="info" fontWeight="medium" paragraph="true">
              Customer: S D Perera
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium" paragraph="true">
              Time: 9.00AM - 3.00PM
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium" paragraph="true">
              Date: 12/09/2022
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium" paragraph="true">
              Event: Wedding
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium" paragraph="true">
              Banquet: Hikkaduwa
            </MDTypography>
          </MDTypography>
        ),
        buttons: (
          <MDTypography variant="caption" color="text" fontWeight="medium" paragraph="true">
            <MDButton color="dark" size="small" m="2">
              Accept
            </MDButton>
            &nbsp; &nbsp; &nbsp;
            <MDButton color="dark" size="small" m="2">
              Chat Now
            </MDButton>
            &nbsp; &nbsp; &nbsp;
            <MDButton color="dark" size="small" m="2">
              Reject
            </MDButton>
            &nbsp;
          </MDTypography>
        ),
      },
      {
        description: (
          <MDTypography>
            <MDTypography variant="caption" color="info" fontWeight="medium" paragraph="true">
              Customer: M N Lakshan
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium" paragraph="true">
              Time: 1.00PM - 10.00PM
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium" paragraph="true">
              Date: 28/08/2022
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium" paragraph="true">
              Event: Wedding
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium" paragraph="true">
              Banquet: Negambo
            </MDTypography>
          </MDTypography>
        ),
        buttons: (
          <MDTypography variant="caption" color="text" fontWeight="medium" paragraph="true">
            <MDButton color="dark" size="small" m="2">
              Accept
            </MDButton>
            &nbsp; &nbsp; &nbsp;
            <MDButton color="dark" size="small" m="2">
              Chat Now
            </MDButton>
            &nbsp; &nbsp; &nbsp;
            <MDButton color="dark" size="small" m="2">
              Reject
            </MDButton>
            &nbsp;
          </MDTypography>
        ),
      },
      {
        description: (
          <MDTypography>
            <MDTypography variant="caption" color="info" fontWeight="medium" paragraph="true">
              Customer: J H Silva
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium" paragraph="true">
              Time: 4.00pM - 9.00PM
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium" paragraph="true">
              Date: 11/08/2022
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium" paragraph="true">
              Event: Birthday Party
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium" paragraph="true">
              Banquet: Hikkaduwa
            </MDTypography>
          </MDTypography>
        ),
        buttons: (
          <MDTypography variant="caption" color="text" fontWeight="medium" paragraph="true">
            <MDButton color="dark" size="small" m="2">
              Accept
            </MDButton>
            &nbsp; &nbsp; &nbsp;
            <MDButton color="dark" size="small" m="2">
              Chat Now
            </MDButton>
            &nbsp; &nbsp; &nbsp;
            <MDButton color="dark" size="small" m="2">
              Reject
            </MDButton>
            &nbsp;
          </MDTypography>
        ),
      },
      /*
      {
        companies: <Company image={logoXD} name="Material UI XD Version" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team2, "Romina Hadid"],
              [team3, "Alexander Smith"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $14,000
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoAtlassian} name="Add Progress Track" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team2, "Romina Hadid"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $3,000
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={10} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoSlack} name="Fix Platform Errors" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team3, "Alexander Smith"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            Not set
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoSpotify} name="Launch our Mobile App" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team4, "Jessica Doe"],
              [team3, "Alexander Smith"],
              [team2, "Romina Hadid"],
              [team1, "Ryan Tompson"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $20,500
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={100} color="success" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoJira} name="Add the New Pricing Page" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([[team4, "Jessica Doe"]])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $500
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={25} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company image={logoInvesion} name="Redesign New Online Shop" />,
        members: (
          <MDBox display="flex" py={1}>
            {avatars([
              [team1, "Ryan Tompson"],
              [team4, "Jessica Doe"],
            ])}
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            $2,000
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={40} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      */
    ],
  };
}
