import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
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

    var payment = {
        sandbox: true, // if the account is sandbox or real
        merchant_id: '4242424242424242', // Replace your Merchant ID
        return_url: 'http://sample.com/return',
        cancel_url: 'http://sample.com/cancel',
        notify_url: 'http://sample.com/notify',
        order_id: 45,
        items: 'edhbdhcbhc',
        amount: '5500',
        currency: 'LKR',
        first_name: 'Saman',
        last_name: 'Perera',
        email: 'samanp@gmail.com',
        phone: '0771234567',
        address: 'No.1, Galle Road',
        city: 'Colombo',
        country: 'Sri Lanka',
        delivery_address: 'No. 46, Galle road, Kalutara South', // optional field
        delivery_city: 'Kalutara', // optional field
        delivery_country: 'Sri Lanka', // optional field
        custom_1: '', // optional field
        custom_2: '', // optional field
    };

    // Called when user completed the payment. It can be a successful payment or failure
    window.payhere.onCompleted = function onCompleted(orderId) {
        console.log("Payment completed. OrderID:" + orderId);
        //Note: validate the payment and show success or failure page to the customer
    };

    // Called when user closes the payment without completing
    window.payhere.onDismissed = function onDismissed() {
        //Note: Prompt user to pay again or show an error page
        console.log("Payment dismissed");
    };

    // Called when error happens when initializing payment such as invalid parameters
    window.payhere.onError = function onError(error) {
        // Note: show an error page
        console.log("Error:"  + error);
    };

    function pay(){
        console.log("hi")
        window.payhere.startPayment(payment);
    }


    return (
        <DashboardLayout>
            <DashboardNavbar absolute isMini />
            <MDBox mt={5}>
                <button onClick={pay}>Pay with Payhere</button>
            </MDBox>
        </DashboardLayout>
    );
}

export default AddEvent;
