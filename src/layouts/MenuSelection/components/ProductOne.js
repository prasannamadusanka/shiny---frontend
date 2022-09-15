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

export default function ProductOne(props) {
    const { product, onAdd } = props;
    return (
      <MDBox key={product.id} component="li" display="flex" alignItems="center" py={1} mb={1}>
      <MDBox mr={2}>
        <MDAvatar src={product.image} alt="something here" shadow="md" />
      </MDBox>
      <MDBox display="flex" flexDirection="column" alignItems="flex-start" justifyContent="center">
        <MDTypography variant="button" fontWeight="medium">
          {/* {product.price} */}
        </MDTypography>
        <MDTypography variant="caption" color="text">
          {product.name}
        </MDTypography>
      </MDBox>
      <MDBox ml="auto">
       
          <MDButton
            component="a"
          
            onClick={() => onAdd(product)}
          >
             Remove From menu
          </MDButton>
    
      </MDBox>


    </MDBox>
    //   <Card
     
    //   sx={{
        
    //     flexDirection: "column",
    //     backgroundColor: "transparent",
    //     boxShadow: "none",
      
    //   }}
    // >
    //   <MDBox position="relative" width="100.25%" shadow="xl" borderRadius="xl">
    //     <CardMedia
    //       src={product.image}
    //       component="img"
    //       title={product.name}
    //       style={{}}
    //       sx={{
    //         maxWidth: "100%",
    //         margin: 0,
    //         boxShadow: ({ boxShadows: { md } }) => md,
    //         objectFit: "cover",
    //         objectPosition: "center",
    //       }}
    //     />
    //   </MDBox>
    //   <MDBox mt={1} mx={0.5}>
    //     <MDTypography variant="button" fontWeight="regular" color="text" textTransform="capitalize">
    //       {product.price}
    //     </MDTypography>
       
    //     <MDBox mb={3} lineHeight={0}>
    //       <MDTypography variant="button" fontWeight="light" color="text">
    //         {product.name}
    //       </MDTypography>
    //     </MDBox>
    //     <MDBox display="flex" justifyContent="center" alignItems="center">
          
    //           <Button
    //           style={{color:'black'}}
    //             variant="outlined"
    //             size="small"
               
    //             onClick={() => onAdd(product)}
    //           >
    //            Remove From menu
    //           </Button>
  
           
    //       </MDBox>
    //   </MDBox>
    // </Card>
    
    );
}