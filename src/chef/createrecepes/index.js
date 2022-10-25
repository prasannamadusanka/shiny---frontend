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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// @mui icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

//forms
import FormControl from '@mui/material/FormControl';
import { Card, FormHelperText, Input, InputLabel } from "@mui/material";
import MDInput from "components/MDInput";

import { Link } from "react-router-dom";

import Select from 'react-select';

import React, { useState, useEffect } from 'react';

//
import API from '../../services/baseURL';

//
import { useMaterialUIController, setDirection } from "context";
const axios = require("axios");


export const getingredients = async event => {
  const response = await API.get('chef/view_ingredients');
  console.log(response.data.ingredients)
  return response.data.ingredients;
};


function CreateRecepes() {
  
  const [, dispatch] = useMaterialUIController();
  useEffect(() => {
    setDirection(dispatch, "chef");

    return () => setDirection(dispatch, "ltr");
  }, []);


  const [ingredientss, setingredients] = useState([
    { name: "", type_id: "", stock: "", pending_qty: "", ordered_date: "", description: "", status: "", },
  ]);
  useEffect(() => {
    getingredients()
      .then((data) => {
        console.log(ingredientss);
        console.log(data);
        setingredients(data);
        console.log(ingredientss);
      })
      .catch((err) => {
        
      }); 
  }, []);
  
  var uniquekey = 789

  const categoryies = [
    { value: 'welcomedrink', label: 'welcome drink' },
    { value: 'ricedish', label: 'rice dish' },
    { value: 'salad', label: 'salad' },
    { value: 'soup', label: 'soup' },
    { value: 'noodlesnpasta', label: 'noodles&pasta' },
    { value: 'vegitabledish', label: 'vegitable dish' },
    { value: 'chickendish', label: 'chicken dish' },
    { value: 'seafooddish', label: 'seafood dish' },
    { value: 'porkdish', label: 'pork dish' },
  ]

  const ingredients = [
    { value: '', label: '' },
    // ingredientss?.map((item) => (
    //   { value: item.name, label: item.name }
    // ))
    
    // { value: '', label: 'fruits' },
    { value: 'mango', label: 'mango' },
    { value: 'orange', label: 'orange' },
    { value: 'apple', label: 'apple' },
    { value: 'apple', label: 'apple' },
    { value: 'avacado', label: 'avacado' },
    { value: 'passion fruit', label: 'passion fruit' },
    // { value: '', label: 'vegetables' },
    { value: 'beans', label: 'beans' },
    { value: 'carrot', label: 'carrot' },
    { value: 'pumkin', label: 'pumkin' },
    { value: 'potato', label: 'potato' },
    { value: 'cabbage', label: 'cabbage' },
    { value: 'beet root', label: 'beet root' },
    // { value: '', label: 'oil' },
    { value: 'coconut oil', label: 'coconut oil' },
    { value: 'vegetable oil', label: 'vegetable oil' },
    { value: 'peanut oil', label: 'peanut oil' },
    { value: 'olive oil', label: 'olive oil' },
    { value: 'ghee', label: 'ghee' },
  ]

  const measurements = [
    { value: '', label: '' },
    { value: 'kg', label: 'kg' },
    { value: 'L', label: 'L' },
    { value: '0.00010kg', label: 'spoons' },
  ]


  const [formValues, setFormValues] = useState([{ name: "", quantity  : ""}])

  const [url,setUrl] = useState()
  const [category,setCategory] = useState("welcomedrink")
  const [name,setName] = useState()
  const [cheftips,setCheftips] = useState("chef tips")
  const [description,setDescription] = useState("description")


  let handleSubmit = (event) => {
    event.preventDefault();
    //alert(JSON.stringify(formValues));
    console.log(JSON.stringify(formValues))
    const formValues2 = JSON.stringify(formValues)
    console.log(formValues2)

    for(var i=0;i<JSON.stringify(formValues).length;i++){
      var params={name:JSON.stringify(formValues[i].name),type:JSON.stringify(formValues[i].category),description:JSON.stringify(formValues[i].description), image:JSON.stringify(formValues[i].image), chef_tips:JSON.stringify(formValues[i].cheftips),}
      console.log(params)
      axios
      .post("http://localhost:3001/chef/insert_create_recepe",params)
      .then(res=>{
        console.log("success")
      })
    }
  }
  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    console.log("dynamic part",e.target.value)
    setFormValues(newFormValues);
  }

  let addFormFields = () => {
    setFormValues([...formValues, { name: "", quantity: "" }])
  }
  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues)
  }

  
  let handleUrl=(e)=>{
    console.log(e.target.value)
    setUrl(e.target.value)
    console.log("seturllll",url)
  }

  let handleCategory=(e)=>{
    console.log(e.value)
    setCategory(e.value)
    // setCategory(e.target)
    console.log("category",category)
  }

  let handleName=(e)=>{
    console.log(e.target.value)
    setName(e.target.value)
    console.log(name)
  }

  let handleCheftips=(e)=>{
    console.log(e.target.value)
    setCheftips(e.target.value)
    console.log(cheftips)
  }

  let handleDescription=(e)=>{
    console.log(e.target.value)
    setDescription(e.target.value)
    console.log(description)
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          <Grid item xs={10}>
            <Card>
              <MDBox mb={1.5} component="form" role="form">
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    New Recepe
                  </MDTypography>
                </MDBox>

                <form  onSubmit={handleSubmit}>
                <MDBox mt={5} ml={5}>
                    <MDBox key={uniquekey++} mt={2} display="flex">
                      <MDTypography variant="h6" fontWeight="medium" mb={2}>
                        Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </MDTypography>
                      {/* <MDInput name="name" type="text" label="Name"  sx={{ width: "89%" }} value={element.name || ""} onChange={e => handleChange(index, e)} ></MDInput> */}
                      <MDInput name="name" type="text" label="Name"  sx={{ width: "89%" }} onChange={e => handleName(e)} ></MDInput>
                    </MDBox>
                    <MDBox mt={2} display="flex">
                      <MDTypography variant="h6" fontWeight="medium" mb={2}>
                        Category&nbsp;&nbsp;
                      </MDTypography>
                      <MDBox key={uniquekey++} sx={{ width: "89%" }}>
                        <Select 
                          isSearchable={true}
                          options={categoryies} 
                          style={{width: "auto"}}
                          name="category" 
                          // value={element.category || ""} onChange={e => handleChange(index, e)}
                          onChange={handleCategory}
                        />
                        {/* <MDInput type="text" label="Category" sx={{ width: "89%" }} ></MDInput> */}
                      </MDBox>
                    </MDBox>
                    <MDBox key={uniquekey++} mt={2} display="flex">
                      <MDTypography variant="h6" fontWeight="medium" mb={2}>
                        Image&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </MDTypography>
                      <MDInput  name="image" type="url" label="Image URL" borderLeft={"2"} sx={{ width: "89%" }} onChange={e =>handleUrl(e)} ></MDInput>
                      {/* <MDInput  name="image" type="url" label="Image URL"  borderLeft={"2"} sx={{ width: "89%" }} value={element.image || ""} onChange={e => handleChange(index, e)}></MDInput> */}
                    </MDBox>
                  <MDBox mt={2} display="flex" bgColor='#f0f2f5' borderRadius="lg" sx={{ width: "97%" }}>
                    <MDTypography variant="h6" fontWeight="medium" mb={2} pr={84} pt={2} pl={0.25}>
                      Ingredients for One
                    </MDTypography>
                    <MDButton variant="gradient" color="dark" >
                      <Icon sx={{ fontWeight: "bold" }} onClick={() => addFormFields()}>add</Icon>
                    </MDButton>
                  </MDBox>
                  
                  {formValues.map((element, index) => (
                  <Grid item xs={12} display='flex'mt={2}>
                    <MDBox key={uniquekey++} sx={{ width: "45%" }}>
                    {/* <Select 
                        isSearchable={true} 
                        defaultValue={ingredients[0]} 
                        options={ingredients} 
                        style={{width: "auto"}}
                        // name="ingredients"
                        // value={element.ingredients || ""} onChange={e => handleChange(index, e)}
                        // onChange={handleChange}
                      /> */}
                      <MDInput type="text" name="name" value={element.name || ""} label="Name" sx={{ width: "90%" }} onChange={e => handleChange(index, e)}></MDInput>
                    </MDBox>
                    <MDBox key={uniquekey++} sx={{ width: "25%" }} ml={3}>
                      <MDInput type="number" name="quantity" label="quantity" sx={{ width: "90%" }} value={element.quantity || ""} onChange={e => handleChange(index, e)}></MDInput>
                    </MDBox>
                    <MDBox key={uniquekey++} sx={{ width: "15%" }} mr={3}>
                      {/* <Select 
                        isSearchable={true} 
                        defaultValue={measurements[0]} 
                        options={measurements} 
                        style={{width: "auto"}}
                        name="measurements"
                        value={element.measurement || ""} onChange={e => handleChange(index, e)}
                      /> */}
                      <MDInput type="text" name="measurements" value={element.measurements || ""} onChange={e => handleChange(index, e)} label="kg/l/spoons" sx={{ width: "90%" }}></MDInput>
                    </MDBox>
                    <MDButton variant="gradient" color="secondary" >
                      <Icon sx={{ fontWeight: "bold" }} onClick={() => removeFormFields(index)}>remove</Icon>
                    </MDButton>
                  </Grid>
                  ))}
                  
                  <MDBox key={uniquekey++} mt={2} mb={5}>
                    <MDTypography variant="h6" fontWeight="medium" mb={2}>
                      Chef Tips
                    </MDTypography>
                    <MDInput name="cheftips" type="tyext" label="" multiline rows={5} sx={{ width: '97%' }} onChange={e => handleCheftips(e)}></MDInput>
                    {/* <MDInput name="cheftips" type="tyext" label="" multiline rows={5} sx={{ width: '97%' }} value={element.cheftips || ""} onChange={e => handleChange(index, e)}></MDInput> */}
                  </MDBox>
                  <MDBox key={uniquekey++} mt={2} mb={5}>
                    <MDTypography variant="h6" fontWeight="medium" mb={2}>
                      Description
                    </MDTypography>
                    <MDInput name="description" type="text" label="" multiline rows={5} sx={{ width: '97%' }} onChange={e => handleDescription(e)}></MDInput>
                    {/* <MDInput name="description" type="text" label="" multiline rows={5} sx={{ width: '97%' }} value={element.description || ""} onChange={e => handleChange(index, e)}></MDInput> */}
                  </MDBox>
                  <Link to="/chef/createrecepes/next">
                    <MDButton label= "next" variant="gradient" color="info">
                        &nbsp;Next
                    </MDButton>
                  </Link>
                  {/* <MDBox mt={5} ml={5}>
                  <FormControl size="medium">
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input id="my-input" aria-describedby="my-helper-text" />
                    <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                  </FormControl>
                  </MDBox> */}
                </MDBox>
                </form>


              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CreateRecepes;
