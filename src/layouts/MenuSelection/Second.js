import PropTypes from "prop-types";

import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import BasketOne from './components/BasketOne';
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import data from './data';
import { Grid } from '@mui/material';
import MDBox from "./../../components/MDBox";
import MDTypography from "./../../components/MDTypography";
import { useState } from 'react';
import MDProgress from "components/MDProgress";
//import './index.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Second(){

    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };
    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };


    return(
        <React.Fragment>
             <MDBox mt={5}p={2}>
          <Grid container spacing={6}>
         <Main products={products} onAdd={onAdd}></Main>
         </Grid>
         </MDBox>
        <p>jdj</p>
        
   
         <BasketOne
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></BasketOne>
        </React.Fragment>
    );
}

export default Second;