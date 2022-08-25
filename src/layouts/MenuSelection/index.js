

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Header from './components/Header';
import React, { useState } from 'react';
import { Fragment, useEffect } from 'react';

import MDBox from "./../../components/MDBox";
import { Grid } from '@mui/material';
import data from './data';
import SoupData from "./soupData";
import BasketOne from './components/BasketOne';
import Main from './components/Main';
import { useMaterialUIController, setDirection } from "context";
//import { useEffect } from "react";
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
import API from '../../services/baseURL';


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
export const getItemList = async event => {
  const type1 = "WelcomeDrink"
  const response = await API.get(`client/welcomeitems`);
  console.log(response.data)
  return response.data;
};
const steps = ['Welcome drink', 'Soup', 'Salad', 'Rice Dishes', 'Noodles and Pasta', 'Fish dishes', 'Chicken Dishes', 'Desserts'];
//const { formId, formField } = checkoutFormModel;

function _renderStepContent(step) {
  let productss= []

  const [itemList, setItemList] = useState([]);
  const {products} = data
  const { soups } = SoupData;
  const item = []
  //console.log(soups)
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    getItemList().then(data => {
      console.log(data.menus)
      productss.push(data.menus)
      // console.log(JSON.parse(data))
     // const [ItemList, setItemList] = useState(data.menus);
   
      console.log(productss[0][0].id)
    }).catch(err => {
      console.log(err.error)
    })
  }, []);


  useEffect(async () => {
    //console.log("set");
   console.log(itemList);
    item.push(itemList)
    console.log('hi')
  console.log(item[0])
  //const  products  = item;
  //console.log(products)

  }, [itemList]);
 // console.log(item)
  //const  products  = item;

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
   // console.log(productss[0][0].id)
    case 0:
       //console.log(item[0])
      return (<React.Fragment>
        <div style={{ float: 'right' }}>
          <MDTypography color="warning">You can select upto maximum 3</MDTypography>
        </div>
        <MDBox mt={5} p={2}>
          <Grid container spacing={6}>
            <Main  products={products[0]} onAdd={onAdd}></Main>
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
            <Main products={products[1]} onAdd={onAdd}></Main>
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
            <Main products={products[2]} onAdd={onAdd}></Main>
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
          <Main products={products[1]} onAdd={onAdd}></Main>
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
          <Main products={products[2]} onAdd={onAdd}></Main>
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

  const [, dispatch] = useMaterialUIController();
//  const { sales, tasks } = reportsLineChartData;
  useEffect(() => {
    setDirection(dispatch, "client");

    return () => setDirection(dispatch, "ltr");
  }, []);
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


