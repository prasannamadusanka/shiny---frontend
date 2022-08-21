import React from "react";
import { Button, TextField } from "@mui/material";
//import TextField from "components/TextField";
//import RaisedButton from "material-ui/RaisedButton";
//import TextField from "assets/theme/components/form/TextField";
import PasswordStr from "./PasswordStr";
import "./style.css";
//import { TextField } from "react-icons/md";
import MDBox from "components/MDBox";
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import CoverLayout from "layouts/authentication/components/CoverLayout";
import MDTypography from "components/MDTypography";

const SignUpForm = ({
    history,
    onSubmit,
    onChange,
    errors,
    user,
    score,
    btnTxt,
    type,
    pwMask,
    onPwChange
}) => {
    return (
    
        <div className="loginBox">
            {/* <MDAvatar src="assets/iimages"></MDAvatar> */}
         <MDTypography variant="h3">Start your Journey with us</MDTypography>
            {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

            <form onSubmit={onSubmit}>
                
                <MDBox mt={2} p={1}>
                    <TextField
                    fullWidth="true"
                    name="username"
                        label="username"
                        floatinglabeltext="user name"
                        value={user.username}
                        onChange={onChange}
                        helperText={errors.username}
                    />
                </MDBox>
                <MDBox mt={2} p={1}>
                    <TextField
                    fullWidth
                    name="email"
                        label="email"
                        floatingLabelText="email"
                        value={user.email}
                        onChange={onChange}
                        errortext={errors.email}
                        
                    />
                </MDBox>
                <MDBox mt={2} p={1}>
                    <TextField
                    fullWidth="true"
                    name="contactNumber"
                        label="Contact number"
                        floatinglabeltext="email"
                        value={user.contactNumber}
                        onChange={onChange}
                        helperText={errors.phone}
                    />
                </MDBox>
                <MDBox mt={2} p={1}>
                    <TextField
                    fullWidth="true"
                    name="addressOne"
                        label="address line 1"
                        floatinglabeltext="email"
                        value={user.addressOne}
                        onChange={onChange}
                        helperText={errors.address}
                    />
                </MDBox>
                <MDBox mt={2} p={1}>
                    <TextField
                    fullWidth="true"
                    name="addressTwo"
                        label="address line 2"
                        floatinglabeltext="email"
                        value={user.addressTwo}
                        onChange={onChange}
                        
                    />
                </MDBox>
                <MDBox mt={2} p={1}>
                    <TextField
                    fullWidth="true"
                    name="nic"
                        label="Nation Identity Card Number"
                        floatinglabeltext="nic"
                        value={user.nic}
                        onChange={onChange}
                        helperText={errors.nic}
                    />
                   
                </MDBox>

                <MDBox mt={2} p={1} >
                    <TextField
                    fullwidth="true"
                        type={type}
                        name="password"
                        label="password"
                        floatinglabeltext="password"
                        value={user.password}
                        onChange={onPwChange}
                        helperText={errors.password}
                    />
                </MDBox>
                <div className="pwStrRow">
                    {score >= 1 && (
                        <div>
                            <PasswordStr score={score} />
                            <Button
                                className="pwShowHideBtn"
                                label={btnTxt} onClick={pwMask}
                                style={{ position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
                            />
                        </div>
                    )}
                </div>
                <MDBox mt={2} p={1}>
                <TextField
                    type={type}
                    fullWidth="true"
                    name="pwconfirm"
                    label="pwconfirm"
                    floatinglabeltext="confirm password"
                    value={user.pwconfirm}
                    onChange={onChange}
                    helperText={errors.pwconfirm}
                />
                </MDBox>
                <br />
                <Button
                    className="signUpSubmit"
                    primary={true}
                    type="submit"
                    label="submit"
                >Sign up</Button>
            </form>
            <p>
                Aleady have an account? <br />
                <a href="/">Log in here</a>
            </p>
        </div>
     
    );
};

export default SignUpForm;
