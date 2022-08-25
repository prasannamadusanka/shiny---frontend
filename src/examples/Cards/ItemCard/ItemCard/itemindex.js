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

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

function ItemCard({ image, title1="Ingredints",title2="Chef Tips", title, description, ingredints }) {
  const renderIngredints = ingredints.map(({ image: media, name }) => (
    <Tooltip key={name} title={name} placement="top">
      <MDAvatar
        src={media}
        alt={name}
        size="xs"
        sx={({ borders: { borderWidth }, palette: { white } }) => ({
          border: `${borderWidth[2]} solid ${white.main}`,
          cursor: "pointer",
          position: "relative",
          ml: -1.25,

          "&:hover, &:focus": {
            zIndex: "10",
          },
        })}
      />
    </Tooltip>
  ));

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "transparent",
        boxShadow: "none",
        overflow: "visible",
        width:'33%',
      }}
    >
      <MDBox position="relative" width="100%" height="75%" shadow="xl" borderRadius="xl" bgColor="primary" >
        <CardMedia
          src={image}
          component="img"
          title={title}
          sx={{
            maxWidth: "100%",
            margin: 0,
            boxShadow: ({ boxShadows: { md } }) => md,
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </MDBox>
      <MDBox mt={3} mx={0.5} bgColor="warning">
        <MDBox mb={3} lineHeight={0}>
          <MDTypography variant="button" fontWeight="light" color="text">
            {description}
          </MDTypography>
        </MDBox>
        <MDBox>
          <MDTypography variant="button" fontWeight="bold" color="text" textTransform="capitalize">
            {title1}
          </MDTypography>
        </MDBox>
        <MDBox>
          <MDTypography variant="button" fontWeight="bold" color="text" textTransform="capitalize">
            {title2}
          </MDTypography>
        </MDBox>
        <MDBox display="flex" justifyContent="space-between" alignItems="center">
          
          <MDBox display="flex">{renderIngredints}</MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default values for the props of ItemCard
ItemCard.defaultProps = {
  ingredints: [],
};

// Typechecking props for the ItemCard
ItemCard.propTypes = {
  image: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ingredints: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default ItemCard;
