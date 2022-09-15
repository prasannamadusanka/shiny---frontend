import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import StripeCheckout from "react-stripe-checkout";
import {Button} from "@mui/material";
import Footer from "examples/Footer";
// Billing page components
import { useMaterialUIController, setDirection } from "context";
import { useEffect,useState } from "react";

import "payhere-embed-sdk/dist/react.css"
import Payhere from "payhere-embed-sdk/dist/react"
function AddEvent() {

    const [, dispatch] = useMaterialUIController();
    // const { sales, tasks } = reportsLineChartData;
    useEffect(() => {
        setDirection(dispatch, "client");

        return () => setDirection(dispatch, "ltr");
    }, []);

    async function handleToken(token, addresses) {
       console.log(token)
      }
const x=40000;

    return (
        <DashboardLayout>
            <DashboardNavbar absolute isMini />
            <MDBox mt={5}>
             <StripeCheckout
             stripeKey="pk_test_51LgXJdSDmFBknNFOqB2kq2HzScVWiF4IKKH8fNHQDPLbhwQbhgvfPCibmDR8tH0YlkZuZAkzb0wnboLGVIdPAOg600hRJpjBTp"
            token={handleToken}
            amount= {x}          
             name="Payment details"
          
             />

            </MDBox>
        </DashboardLayout>
    );
}

export default AddEvent;
