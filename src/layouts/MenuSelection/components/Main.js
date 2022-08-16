import React from 'react';
import Product from './Product';
//import './../index.css';
import { Grid } from '@mui/material';
import MDBox from "./../../../components/MDBox";
import MDTypography from "./../../../components/MDTypography";
export default function Main(props) {
  const { products, onAdd } = props;
  return (
  
     
    <MDBox p={2}>
         <Grid container spacing={6}>
        {products.map((product) => (
            
           
               <Grid item xs={12} md={6} xl={3}>
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
          </Grid>
        ))}
        </Grid>
        </MDBox>
   
  );
}