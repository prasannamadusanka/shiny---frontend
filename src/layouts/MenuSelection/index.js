

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
const axios = require("axios");
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



export const getMenuList = async event => {
  // const headers = {
  //   'Content-Type': 'application/json',
  //   'Authorization': accessToken
  // }
  const y = localStorage.getItem('event_selected_food')
  console.log(y,"local")

  console.log("scbn cas")
  const response = await API.get(`/client/getclientmenu`,
  {
    params:{
      "event_id":101
    }
  }

  );
  console.log("hi")
  console.log(response.data.menus)
  return response.data.menus;
};




export const getItemList = async event => {
  const type1 = "WelcomeDrink"
  const response = await API.get(`client/welcomeitems`);
  console.log("hi")
  console.log(response.data)
  return response.data;
};
const steps = ['Welcome drink','Soup','Rice dishes','Vegetable','Chicken','Fish','Dessert', 'last',];
//const { formId, formField } = checkoutFormModel;

function _renderStepContent(step,menu) {
  let productss = []


  //  getItemList()
  const [itemList, setItemList] = useState([]);
  const [y, sety] = useState(0)

  // console.log(itemList)
  useEffect(() => {
    getItemList().then(data => {
      console.log(data)
      setItemList(data)
      console.log(itemList)
      // console.log(JSON.parse(data))
      // const [ItemList, setItemList] = useState(data.menus);
    }).catch(err => {
      console.log(err.error)
    })
  }, []);
  console.log("hi")
  console.log(itemList)
  const { products } = data
  const { soups } = SoupData;
  const item = []
  //console.log(soups)
  const [cartItems, setCartItems] = useState([]);

  const onAddWelcome = (product) => {
    console.log("welcome has come")

    console.log(menu[0])
   const welcome = menu[0].welcome_drink_count
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {

      // setCartItems(
      //   cartItems.map((x) =>
      //     x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      //   )
      // );
      console.log("dhbd")
    } else {
      //  console.log("fhhf")
      if (y < welcome) {
        console.log("fhhfhhgh")

        sety(y + 1)
        console.log(y)
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
      else {
        console.log("bfhrbf")
      }
    }
  };
  
  const onAddSoup = (product) => {
    console.log("soup has cone")
   const welcome = menu[0].soup
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {

      // setCartItems(
      //   cartItems.map((x) =>
      //     x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      //   )
      // );
      console.log("dhbd")
    } else {
      //  console.log("fhhf")
      if (y < welcome) {
        console.log("fhhfhhgh")

        sety(y + 1)
        console.log(y)
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
      else {
        console.log("bfhrbf")
      }
    }
  };
  
  const onAddRice = (product) => {
    console.log("soup has cone")
   const welcome = menu[0].rice_dishes
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {

      // setCartItems(
      //   cartItems.map((x) =>
      //     x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      //   )
      // );
      console.log("dhbd")
    } else {
      //  console.log("fhhf")
      if (y < welcome) {
        console.log("fhhfhhgh")

        sety(y + 1)
        console.log(y)
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
      else {
        console.log("bfhrbf")
      }
    }
  };
  
  const onAddVegetable = (product) => {
    console.log("soup has cone")
   const welcome = menu[0].vegetable_dishes
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {

      // setCartItems(
      //   cartItems.map((x) =>
      //     x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      //   )
      // );
      console.log("dhbd")
    } else {
      //  console.log("fhhf")
      if (y < welcome) {
        console.log("fhhfhhgh")

        sety(y + 1)
        console.log(y)
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
      else {
        console.log("bfhrbf")
      }
    }
  };
  
  const onAddChicken = (product) => {
    console.log("soup has cone")
   const welcome = menu[0].chicken_dishes
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {

      // setCartItems(
      //   cartItems.map((x) =>
      //     x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      //   )
      // );
      console.log("dhbd")
    } else {
      //  console.log("fhhf")
      if (y < welcome) {
        console.log("fhhfhhgh")

        sety(y + 1)
        console.log(y)
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
      else {
        console.log("bfhrbf")
      }
    }
  };
  
  const onAddFish = (product) => {
    console.log("soup has cone")
   const welcome = menu[0].fish_dishes
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {

      // setCartItems(
      //   cartItems.map((x) =>
      //     x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      //   )
      // );
      console.log("dhbd")
    } else {
      //  console.log("fhhf")
      if (y < welcome) {
        console.log("fhhfhhgh")

        sety(y + 1)
        console.log(y)
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
      else {
        console.log("bfhrbf")
      }
    }
  };

  
  const onAddDesserte = (product) => {
    console.log("soup has cone")
   const welcome = menu[0].desserts
  
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {

      // setCartItems(
      //   cartItems.map((x) =>
      //     x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      //   )
      // );
      console.log("dhbd")
    } else {
      //  console.log("fhhf")
      if (y < welcome) {
        console.log("fhhfhhgh")

        sety(y + 1)
        console.log(y)
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
      else {
        console.log("bfhrbf")
      }
    }
  };
  
  const onAdd = (product) => {
    console.log("soup has cone")
   const welcome = menu[0].welcome_drink_count
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {

      // setCartItems(
      //   cartItems.map((x) =>
      //     x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
      //   )
      // );
      console.log("dhbd")
    } else {
      //  console.log("fhhf")
      if (y < welcome) {
        console.log("fhhfhhgh")

        sety(y + 1)
        console.log(y)
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
      else {
        alert("fhhfh")
      }
    }
  };

  const addToDb = () => {

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

  const handleSubmit = (x) => {
    console.log("fhhghhgtnf nfbtgttttttttttttttttt")
    const event_id = 101
    console.log(cartItems)
    cartItems.map((index, item) => {
      const params = { event_id: event_id, food_item_id: index.id }
      axios
        .post("http://localhost:3000/client/addFoodItem", params)
        .then(res => {
          console.log("sucess")
        })
    })

  }
  switch (step) {
    case 0:
    
      return (<React.Fragment>
        <div style={{ float: 'right' }}>
          <MDTypography color="warning">{}</MDTypography>

          <MDTypography color="warning"></MDTypography>
        </div>
        <MDBox mt={5} p={2}>
          <Grid container spacing={6}>
            <Main products={products[0]} onAdd={onAddWelcome}></Main>
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
          <MDTypography color="warning">You can select upto maximum </MDTypography>
        </div>
        <MDBox mt={5} p={2}>

          <Grid container spacing={6}>
            <Main products={products[1]} onAdd={onAddSoup}></Main>
          </Grid>
        </MDBox>



        <BasketOne
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></BasketOne>
      </div>);
    case 2: return (<div>
      <div style={{ float: 'right' }}>
        <MDTypography color="warning">You can select upto maximum 3</MDTypography>
      </div>
      <MDBox mt={5} p={2}>

        <Grid container spacing={6}>
          <Main products={products[2]} onAdd={onAddRice}></Main>
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
          <Main products={products[3]} onAdd={onAddVegetable}></Main>
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
          <Main products={products[4]} onAdd={onAddChicken}></Main>
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
          <Main products={products[5]} onAdd={onAddFish}></Main>
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
        <MDTypography color="warning">You can select upto maximum 7</MDTypography>
      </div>
      <MDBox mt={5} p={2}>

        <Grid container spacing={6}>
          {console.log(products[6])}
          <Main products={products[6]} onAdd={onAddDesserte}></Main>
        </Grid>
      </MDBox>



      <BasketOne
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      ></BasketOne>
    </div>);
    case 7:
      return (<div>
        <BasketOne
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></BasketOne>
        <Button
          onClick={handleSubmit}


          variant="contained"
          color="primary"
        /*     className={classes.button} */
        >
          Complete order

        </Button>
      </div>);
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const [menu, setMenu] = useState([]);
//  const [welcome, setWelcome] = useState([]);

  useEffect(() => {
    console.log("hsdbhdc")
    getMenuList().then(data => {
      console.log("abzhz a")
      console.log("dhchhd", data)
      setMenu(data)
      console.log(menu)
      console.log("soupmhgh",menu[0].soup)
      // console.log(JSON.parse(data))
      // const [ItemList, setItemList] = useState(data.menus);
    }).catch(err => {
      //  console.log(err.error)
    })
  }, []);

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
      console.log("madu")

      console.log(cart)
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
  const x = [
    {
      type: 'shhhd',
      date: "hdcbh"
    }
  ]

  // console.log(myEvent)
  //console.log("fjnjf",myEvent[0].type)
  //const zh = localStorage.getItem("myitem")+" - "+localStorage.getItem("date1").split("T")[0] 

  //console.log(zh)
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <React.Fragment>
        <Typography mb={3} component="h1" variant="h4" align="left">
          Choose your Desired food items for your event
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
                  {_renderStepContent(activeStep,menu)}

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


