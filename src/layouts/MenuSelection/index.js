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
/* import PropTypes from "prop-types";

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

const steps = ['Rice and Pasta', 'Chicken dishes', 'Welcome drink','Dessert','Fish dishes','salad dishes'];



function MenuSelection() {

    const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

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

    return (
        
       
        <DashboardLayout>
      <DashboardNavbar />
      <MDBox >
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
      </MDBox>
     <MDBox mt={5}p={2}>
          <Grid container spacing={6}>
         <Main products={products} onAdd={onAdd}></Main>
         </Grid>
         </MDBox>
        
        
   
         <BasketOne
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></BasketOne>
    
        
       
    
         <Footer/>
          </DashboardLayout>
        
      
    );
}



export default MenuSelection;  */

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Header from './components/Header';
import React, { useState } from 'react';

import MDBox from "./../../components/MDBox";
import { Grid } from '@mui/material';
import data from './data';
import SoupData from "./soupData";
import BasketOne from './components/BasketOne';
import Main from './components/Main';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress
} from '@mui/material';
import { Formik, Form } from 'formik';

import First from './First';
import CheckoutSuccess from './CheckOutSuccess';


//import checkoutFormModel from './FormModel/checkoutFormModel';
//import formInitialValues from './FormModel/formInitialValues';

//import useStyles from './styles';
import Second from './Second';
import MDTypography from "components/MDTypography";


// const { products } = data;
// const [cartItems, setCartItems] = useState([]);
// const onAdd = (product) => {
//   const exist = cartItems.find((x) => x.id === product.id);
//   if (exist) {
//     setCartItems(
//       cartItems.map((x) =>
//         x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
//       )
//     );
//   } else {
//     setCartItems([...cartItems, { ...product, qty: 1 }]);
//   }
// };
// const onRemove = (product) => {
//   const exist = cartItems.find((x) => x.id === product.id);
//   if (exist.qty === 1) {
//     setCartItems(cartItems.filter((x) => x.id !== product.id));
//   } else {
//     setCartItems(
//       cartItems.map((x) =>
//         x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
//       )
//     );
//   }
// };
const steps = ['Welcome drink', 'Soup', 'Salad', 'Rice Dishes', 'Noodles and Pasta', 'Fish dishes', 'Chicken Dishes', 'Desserts'];
//const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  const { products } = data;
  const { soups } = SoupData;
  //console.log(soups)
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
  switch (step) {
    case 0:
      return (<React.Fragment>
        <div style={{ float: 'right' }}>
          <MDTypography color="warning">You can select upto maximum 3</MDTypography>
        </div>
        <MDBox mt={5} p={2}>
          <Grid container spacing={6}>
            <Main products={products[0]} onAdd={onAdd}></Main>
          </Grid>
        </MDBox>



        <BasketOne
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></BasketOne>
      </React.Fragment>);
    case 1:
      return (<div>
        <div style={{ float: 'right' }}>
          <MDTypography color="warning">You can select upto maximum 3</MDTypography>
        </div>
        <MDBox mt={5} p={2}>

          <Grid container spacing={6}>
            <Main products={products[0]} onAdd={onAdd}></Main>
          </Grid>
        </MDBox>



        <BasketOne
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></BasketOne>
      </div>);
    case 2:
      return (<div>
        <div style={{ float: 'right' }}>
          <MDTypography color="warning">You can select upto maximum 3</MDTypography>
        </div>
        <MDBox mt={5} p={2}>

          <Grid container spacing={6}>
            <Main products={products[0]} onAdd={onAdd}></Main>
          </Grid>
        </MDBox>



        <BasketOne
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></BasketOne>
      </div>);
    case 3: return (<div>
      <div style={{ float: 'right' }}>
        <MDTypography color="warning">You can select upto maximum 3</MDTypography>
      </div>
      <MDBox mt={5} p={2}>

        <Grid container spacing={6}>
          <Main products={products[0]} onAdd={onAdd}></Main>
        </Grid>
      </MDBox>



      <BasketOne
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      ></BasketOne>
    </div>);
    case 4: return (<div>
      <div style={{ float: 'right' }}>
        <MDTypography color="warning">You can select upto maximum 3</MDTypography>
      </div>
      <MDBox mt={5} p={2}>

        <Grid container spacing={6}>
          <Main products={products[0]} onAdd={onAdd}></Main>
        </Grid>
      </MDBox>



      <BasketOne
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      ></BasketOne>
    </div>);
    case 5: return (<div>
      <div style={{ float: 'right' }}>
        <MDTypography color="warning">You can select upto maximum 3</MDTypography>
      </div>
      <MDBox mt={5} p={2}>

        <Grid container spacing={6}>
          <Main products={products[0]} onAdd={onAdd}></Main>
        </Grid>
      </MDBox>



      <BasketOne
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      ></BasketOne>
    </div>);
    case 6: return (<div>
      <div style={{ float: 'right' }}>
        <MDTypography color="warning">You can select upto maximum 3</MDTypography>
      </div>
      <MDBox mt={5} p={2}>

        <Grid container spacing={6}>
          <Main products={products[0]} onAdd={onAdd}></Main>
        </Grid>
      </MDBox>



      <BasketOne
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      ></BasketOne>
    </div>);
    case 7: return (<div>
      <div style={{ float: 'right' }}>
        <MDTypography color="warning">You can select upto maximum 3</MDTypography>
      </div>
      <MDBox mt={5} p={2}>

        <Grid container spacing={6}>
          <Main products={products[0]} onAdd={onAdd}></Main>
        </Grid>
      </MDBox>



      <BasketOne
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      ></BasketOne>
    </div>);
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  // const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;
  /* 
    function _sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    } */

  /*   async function _submitForm(values, actions) {
      await _sleep(1000);
      alert(JSON.stringify(values, null, 2));
      actions.setSubmitting(false);
  
      setActiveStep(activeStep + 1);
    }
   */
  function _handleSubmit() {
    if (isLastStep) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
      console.log(activeStep);
      /*    actions.setTouched({});
         actions.setSubmitting(false); */
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <React.Fragment>
        <Typography component="h1" variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper activeStep={activeStep} /* className={classes.stepper} */>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
           Thank you for your order.
         </Typography>
         <Typography variant="subtitle1">
           Your order number is #2001539. We have emailed your order confirmation,
           and will send you an update when your order has shipped.
         </Typography>

              {/* <BasketOne
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              ></BasketOne> */}

            </React.Fragment>
          ) : (
            <Formik



            >
              {({ isSubmitting }) => (
                <Form >
                  {_renderStepContent(activeStep)}

                  <div /* className={classes.buttons} */>
                    {activeStep !== 0 && (
                      <Button onClick={_handleBack}/*  className={classes.button} */>
                        Back
                      </Button>
                    )}
                    <div /* className={classes.wrapper} */>
                      <Button
                        onClick={_handleSubmit}


                        variant="contained"
                        color="primary"
                      /*     className={classes.button} */
                      >
                        {isLastStep ? 'Place order' : 'Next'}

                      </Button>
                      {isSubmitting && (
                        <CircularProgress
                          size={24}

                        />
                      )}
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          )}
        </React.Fragment>
      </React.Fragment>
      <Footer />
    </DashboardLayout>
  );
}


