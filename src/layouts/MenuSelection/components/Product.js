import React from 'react';

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button } from '@mui/material';
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React components
import MDBox from "./../../../components/MDBox";
import MDTypography from "./../../../components/MDTypography";
import MDButton from "components/MDButton";
import MDAvatar from "components/MDAvatar";

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <Card
   
    sx={{
      
      flexDirection: "column",
      backgroundColor: "transparent",
      boxShadow: "none",
    
    }}
  >
    <MDBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
      <CardMedia
        src={product.image}
        component="img"
        title={product.name}
        style={{}}
        sx={{
          maxWidth: "100%",
          margin: 0,
          boxShadow: ({ boxShadows: { md } }) => md,
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </MDBox>
    <MDBox mt={1} mx={0.5}>
      <MDTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize">
        {product.description}
      </MDTypography>
     
      <MDBox mb={3} lineHeight={0}>
        <MDTypography variant="button" fontWeight="light" color="text">
          {product.name}
        </MDTypography>
      </MDBox>
      <MDBox display="flex" justifyContent="center" alignItems="center">
        
            <Button
            style={{color:'black'}}
              variant="outlined"
              size="small"
             
              onClick={() => onAdd(product)}
            >
             Add to Menu
            </Button>

         
        </MDBox>
    </MDBox>
  </Card>
  
  );
}