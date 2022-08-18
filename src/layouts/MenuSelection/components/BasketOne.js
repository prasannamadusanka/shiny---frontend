import React from 'react';

// @mui material components
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Button, Grid } from '@mui/material';
import Tooltip from "@mui/material/Tooltip";

// Material Dashboard 2 React components
import MDBox from "./../../../components/MDBox";
import MDTypography from "./../../../components/MDTypography";
import MDButton from "components/MDButton";
import MDAvatar from "components/MDAvatar";
import Product from './../components/Product'
import ProductOne from './ProductOne';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';




export default function BasketOne(props) {
    const { cartItems, onAdd, onRemove } = props;
    // const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    // const taxPrice = itemsPrice * 0.14;
    // const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    // const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <Box sx={{ pb: 7 }}>
         <MDTypography
  variant="h4"
  color="success"
  textGradient
>
  My Cart
</MDTypography>
        <CssBaseline />
        <List>
                {cartItems.map((item) => (
                 
                           <ProductOne key={item.id} product={item} onAdd={onRemove}></ProductOne>
                 
                ))}
            </List>
            </Box>

    );
}