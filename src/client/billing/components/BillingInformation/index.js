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
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Billing page components
import Bill from "client/billing/components/Bill";

function BillingInformation({trans}) {
  console.log("my bills",trans)
  return (
    <Card id="delete-account">
      <MDBox pt={3} px={2}>
        <MDTypography variant="h6" fontWeight="medium">
          Billing Information
        </MDTypography>
      </MDBox>
      <MDBox pt={1} pb={2} px={2}>
        <MDBox component="ul" display="flex" flexDirection="column" p={0} m={0}>{
           trans?trans.map((item, index) => {
            //  let rate = item.rate;
            return (
              <Bill
                    name ={item.type}
                         total={item.total}
                        advance={item.advance}
                       remaining={item.remaining}
                         dueDate={item.due}
                        id={item.id}
                       /> 
              
           
            );

          }):console.log("hshs")
        }
  {/* //         trans.map(
  //           (item,index)=>(
  //             return(
  //  <Bill
  //         name ="Wedding event(2022.12.03)"
  //           total="Rs.455.00k"
  //           advance="Rs.234.00k"
  //           remaining="Rs.120.00k"
  //           dueDate="2022.10.12"
            
  //         /> 
  //             )
          
  //           )
  //         )
  //         {/* <Bill
  //         name ="Wedding event(2022.12.03)"
  //           total="Rs.455.00k"
  //           advance="Rs.234.00k"
  //           remaining="Rs.120.00k"
  //           dueDate="2022.10.12"
            
  //         /> */}

          
        </MDBox>
      </MDBox>
    </Card>
  );
}

export default BillingInformation;
