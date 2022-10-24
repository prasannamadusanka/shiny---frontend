
import * as React from 'react';
import Grid from "@mui/material/Grid";
import { useMaterialUIController, setDirection } from "context";
import { useEffect,useState } from "react";
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from 'react-select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

//import StripeCheckout from "react-stripe-checkout";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import StripeCheckout from "react-stripe-checkout";
import MDInput from 'components/MDInput';
import API from '../../services/baseURL';

function Payment() {
    const [banquets,setBanquets] = useState()
    

  useEffect(async() => {
    API.get(`client/getbanquets`)
      .then(res => {
        console.log("dcnjf",res.data.menus)
        setBanquets(res.data.menus?res.data.menus.map((item) => {
            return {
              'value' : item.banquet_id,
              'label' : <p> {item.name}</p>
            }
        
        }
        ):console.log("sjjsj"))
      console.log("Your new array of modified objects here")
    })
    .catch(err => { console.log('Google api calendar error', err) })
  }, [])

  function DateReturn(){
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    return formattedToday
}
console.log(banquets)
    const options=[
        { value: 'Wedding', label: 'Wedding' },
        { value: 'Birthday party', label: 'Birthday party' },
        { value: 'Home coming', label: 'Home coming' },
        { value: 'Other party', label: 'Other party' }
      ]
 
      const x=40000;  

let date
let banquet
let type
let pax


const ChangeDate = (event)=>{
  event.preventDefault()
  console.log(event.target.value)
  date=event.target.value
 // setDate(event.target.value)
    console.log("date",date)

    
    //const [banquets,setBanquets] = useState()
  
    API.get(`client/getbanquetsDate`,{
      params:{
        date:date
      }
    })
      .then(res => {
        console.log("dcnjf",res.data.menus)
        setBanquets(res.data.menus?res.data.menus.map((item) => {
            return {
              'value' : item.banquet_id,
              'label' : <p> {item.name}</p>
            }
        
        }
        ):console.log("sjjsj"))
      console.log("Your new array of modified objects here")
    })
    .catch(err => { console.log('Google api calendar error', err) })

    console.log("jejjd")

  
}

// const [banquet,setBanquet] = useState([])
// const [type,setType] = useState([])
// const [pax,setPax] = useState([])

const changeBanquets = (event)=>{
 // event.preventDefault()
    console.log(event.value)
    banquet=event.value
    console.log(banquet)

  //   const [banquets,setBanquets] = useState()
  // useEffect(async() => {
  //   API.get(`client/getbanquetsDate`,{
  //     params:{

  //     }
  //   })
  //     .then(res => {
  //       console.log("dcnjf",res.data.menus)
  //       setBanquets(res.data.menus?res.data.menus.map((item) => {
  //           return {
  //             'value' : item.banquet_id,
  //             'label' : <p> {item.name}</p>
  //           }
        
  //       }
  //       ):console.log("sjjsj"))
  //     console.log("Your new array of modified objects here")
  //   })
  //   .catch(err => { console.log('Google api calendar error', err) })
  // }, [])
}
const [isDisabled, setIsDisabled] = useState(false);

const changeType = (event)=>{
 // event.preventDefault()
  console.log(event)
   type=event.value
    console.log(banquet)
}

const changePax = (event)=>{
  event.preventDefault()

  if(event.target.value<500){
    console.log(event)
    pax=event.target.value
    console.log("pax",pax)
  }
  else{
   // event.preventDefault()
setIsDisabled(!isDisabled)
    //event.stopPropagation()
    console.log("hfbvfv")
  }
}
//const [] = useState()

async function handleToken(token, addresses) {
  console.log(type)
    console.log(token)
    const amount = 45000.00
    
    API.post(`client/addNewEvent`,{params:{
        type:type,
        pax:pax,
        date:date,
        user_id:localStorage.getItem('id'),
        banquet_id:banquet
    }})

    API.post(`client/initialAdvance`,{params:{
      payment_id:token.id,
      event_id:100,
      paid_date:DateReturn(),
      amount:25000.00,   
      pay_by:"Card payment",
      pay_for:"Event booking"
  }})



    
   }

   const [xh,setx]=useState("")
  return (
<MDBox mt={4.5}>
        <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={12}>
        <MDTypography>Add New Event</MDTypography>
        
      <FormControl sx={{ m: 1 }} variant="standard">
      <MDInput  onChange={ChangeDate} htmlFor="demo-customized-textbox" type="date" label="" value={date} />
      <MDBox mt={3} mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={12}>
            <Select onChange={changeBanquets} options={banquets}/>
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
            <Select onChange={changeType} options={options}/>
            </Grid>
          </Grid>
        </MDBox >
     
        <MDInput required disabled={isDisabled} onChange={changePax} htmlFor="demo-customized-textbox" type="text" label="pax" value={pax} />
        <MDTypography></MDTypography>
       
        <StripeCheckout
             stripeKey="pk_test_51LgXJdSDmFBknNFOqB2kq2HzScVWiF4IKKH8fNHQDPLbhwQbhgvfPCibmDR8tH0YlkZuZAkzb0wnboLGVIdPAOg600hRJpjBTp"
            token={handleToken}
            amount= {x}          
             name="Payment details"
          
             />
            
      
      </FormControl>
    
    </Grid>
    </Grid>
        </MDBox>
   
  )
}

export default Payment